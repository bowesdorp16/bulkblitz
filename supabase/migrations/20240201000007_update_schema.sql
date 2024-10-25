-- Update profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS goal TEXT CHECK (goal IN ('lean_bulk', 'mass_gain', 'strength')),
ADD COLUMN IF NOT EXISTS activity_level TEXT CHECK (activity_level IN ('sedentary', 'light', 'moderate', 'very_active', 'extra_active')),
ADD COLUMN IF NOT EXISTS target_calories INTEGER,
ADD COLUMN IF NOT EXISTS target_protein DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS target_carbs DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS target_fats DECIMAL(10,2);

-- Update meals table
ALTER TABLE meals 
ADD COLUMN IF NOT EXISTS calories INTEGER,
ADD COLUMN IF NOT EXISTS protein DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS carbs DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS fats DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS analysis TEXT,
ADD COLUMN IF NOT EXISTS active BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW());

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_meals_active ON meals(active);
CREATE INDEX IF NOT EXISTS idx_meals_date ON meals(date);
CREATE INDEX IF NOT EXISTS idx_meals_user_date ON meals(user_id, date);
CREATE INDEX IF NOT EXISTS idx_profiles_goal ON profiles(goal);
CREATE INDEX IF NOT EXISTS idx_profiles_activity_level ON profiles(activity_level);

-- Add constraints
ALTER TABLE meals
ADD CONSTRAINT calories_non_negative CHECK (calories >= 0),
ADD CONSTRAINT protein_non_negative CHECK (protein >= 0),
ADD CONSTRAINT carbs_non_negative CHECK (carbs >= 0),
ADD CONSTRAINT fats_non_negative CHECK (fats >= 0);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for meals
DROP TRIGGER IF EXISTS meals_updated_at ON meals;
CREATE TRIGGER meals_updated_at
    BEFORE UPDATE ON meals
    FOR EACH ROW
    EXECUTE PROCEDURE handle_updated_at();

-- Update RLS policies
DROP POLICY IF EXISTS "Users can view own meals" ON meals;
DROP POLICY IF EXISTS "Users can update own meals" ON meals;

CREATE POLICY "Users can view own meals"
    ON meals FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can update own meals"
    ON meals FOR UPDATE
    USING (auth.uid() = user_id);