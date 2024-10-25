import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Dumbbell,
  Scale,
  Trophy,
  Target,
  ChevronRight,
  Zap,
  TrendingUp,
  Gauge,
  Brain,
  Salad
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Noise overlay */}
      <div className="noise" />

      {/* Hero section */}
      <div className="flex-1 w-full py-24 md:py-32 xl:py-48 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full opacity-20"
            poster="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?auto=format&fit=crop&q=80"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-giant font-black tracking-tighter">
                BULK
                <span className="gradient-text">BLITZ</span>
              </h1>
              
              <div className="flex flex-col items-center space-y-2">
                <p className="text-2xl md:text-4xl font-black tracking-tight text-muted-foreground">
                  TRACK • ANALYZE • GROW
                </p>
                <p className="text-lg md:text-xl text-muted-foreground/80 max-w-lg">
                  Your all-in-one platform for tracking nutrition, maximizing gains, and achieving your muscle-building goals
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="hover-lift">
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift">
                <Link href="/auth/signup">Start Building Muscle</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="w-full py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group hover-lift">
              <div className="flex flex-col items-center text-center space-y-4">
                <Scale className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-black">Track Progress</h3>
                <p className="text-muted-foreground">
                  Monitor your caloric surplus and protein intake for optimal muscle growth
                </p>
              </div>
            </div>
            
            <div className="group hover-lift">
              <div className="flex flex-col items-center text-center space-y-4">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-black">Set Goals</h3>
                <p className="text-muted-foreground">
                  Get personalized bulking strategies based on your body type and goals
                </p>
              </div>
            </div>
            
            <div className="group hover-lift">
              <div className="flex flex-col items-center text-center space-y-4">
                <Trophy className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-black">Achieve Results</h3>
                <p className="text-muted-foreground">
                  Monitor your gains with advanced metrics and progress tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="w-full py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
              MAXIMIZE YOUR GAINS
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to optimize your muscle growth journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-primary/50 hover-lift">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-black mb-2">Smart Tracking</h3>
              <p className="text-muted-foreground">
                AI-powered meal analysis for accurate macro tracking
              </p>
            </div>

            <div className="p-6 border border-primary/50 hover-lift">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-black mb-2">Progress Analytics</h3>
              <p className="text-muted-foreground">
                Visualize your gains with detailed progress charts
              </p>
            </div>

            <div className="p-6 border border-primary/50 hover-lift">
              <Gauge className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-black mb-2">Custom Goals</h3>
              <p className="text-muted-foreground">
                Personalized macro targets based on your goals
              </p>
            </div>

            <div className="p-6 border border-primary/50 hover-lift">
              <Brain className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-black mb-2">Expert Analysis</h3>
              <p className="text-muted-foreground">
                Get insights from our advanced nutrition AI
              </p>
            </div>

            <div className="p-6 border border-primary/50 hover-lift">
              <Salad className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-black mb-2">Meal Scanner</h3>
              <p className="text-muted-foreground">
                Instantly analyze meals with our camera feature
              </p>
            </div>

            <div className="p-6 border border-primary/50 hover-lift">
              <Dumbbell className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-black mb-2">Bulk Optimized</h3>
              <p className="text-muted-foreground">
                Features designed specifically for muscle gain
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="w-full py-24 bg-secondary relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
              READY TO START GROWING?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of lifters who are maximizing their gains with BulkBlitz
            </p>
            <Button asChild size="lg" className="hover-lift">
              <Link href="/auth/signup">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}