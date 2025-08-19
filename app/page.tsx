import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Microscope,
  Calculator,
  Search,
  Brain,
  Network,
  Rocket,
  Globe,
  Target,
  Zap,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">OP</span>
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">Open Pathways</span>
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="/programs" className="text-muted-foreground hover:text-foreground transition-colors">
                Programs
              </a>
              <a href="/get-involved" className="text-muted-foreground hover:text-foreground transition-colors">
                Get Involved
              </a>
              <a href="/our-team" className="text-muted-foreground hover:text-foreground transition-colors">
                Our Team
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Floating science icons */}
            <div className="absolute -top-10 left-10 opacity-30 animate-bounce">
              <Microscope className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute top-20 right-10 opacity-30 animate-bounce delay-300">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -bottom-5 left-1/4 opacity-30 animate-bounce delay-700">
              <Zap className="h-7 w-7 text-primary" />
            </div>

            <h1 className="text-6xl lg:text-8xl font-heading font-bold text-foreground mb-6 tracking-tight">
              Open Pathways
            </h1>
            <p className="text-2xl lg:text-3xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-medium mb-6">
              Every Pathway Leads To Discovery
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Transform Your Scientific Curiosity Into Academic Confidence
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Bridging the gap between high school and university science through cutting-edge online education, expert
              mentorship, and a global community of curious minds.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Become a Mentor
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Why Choose Open Pathways?</h2>
            <p className="text-lg text-muted-foreground">
              Experience the future of science education with our innovative approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">University-Level Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  Advanced physics, mathematics, and technical skills that prepare you for academic excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">Expert Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  Personal guidance from experienced mentors in small, focused groups of just 5 students.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">Career Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  Essential life skills, professional development, and university preparation beyond academics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">Global Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  Connect with like-minded students and mentors from across Europe and beyond.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground">Your journey to scientific discovery in four simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Search className="h-8 w-8" />
                </div>
                <div className="absolute -inset-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Discover</h3>
              <p className="text-muted-foreground">
                Explore our university-level courses and find the perfect learning path for your scientific interests.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Brain className="h-8 w-8" />
                </div>
                <div className="absolute -inset-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Learn</h3>
              <p className="text-muted-foreground">
                Dive deep into advanced physics, mathematics, and technical skills with our comprehensive curriculum.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Network className="h-8 w-8" />
                </div>
                <div className="absolute -inset-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Connect</h3>
              <p className="text-muted-foreground">
                Join mentorship groups and build lasting relationships with peers and experienced guides.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Rocket className="h-8 w-8" />
                </div>
                <div className="absolute -inset-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Thrive</h3>
              <p className="text-muted-foreground">
                Launch into your university journey with confidence, skills, and a supportive network behind you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Our Impact</h2>
            <p className="text-lg text-muted-foreground">
              Building the future of science education, one student at a time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-lg font-heading font-semibold text-foreground mb-2">Students Empowered</div>
                <p className="text-muted-foreground text-sm">Across Europe and beyond</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-lg font-heading font-semibold text-foreground mb-2">Mentors Connected</div>
                <p className="text-muted-foreground text-sm">Expert guides and supporters</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-lg font-heading font-semibold text-foreground mb-2">Universities Partnered</div>
                <p className="text-muted-foreground text-sm">Recognition and pathways</p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial placeholder */}
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-background border-primary/20">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-muted-foreground italic mb-4">
                "Open Pathways transformed my understanding of physics and gave me the confidence to pursue my dream of
                studying at Cambridge. The mentorship was invaluable."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">AS</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Anna Schmidt</div>
                  <div className="text-sm text-muted-foreground">Physics Student, Cambridge University</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-6">Ready to Begin Your Journey?</h2>
              <p className="text-xl opacity-90">
                Join our community of curious minds and take the first step toward your scientific future
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-primary-foreground text-foreground border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-2xl">Ready to Start?</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-6 text-lg">
                    Join thousands of students exploring university-level science. Your journey begins here.
                  </CardDescription>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Apply as Student
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground text-foreground border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-2xl">Want to Guide?</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-6 text-lg">
                    Share your expertise and help shape the next generation of scientists and innovators.
                  </CardDescription>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Become a Mentor
                    <Users className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are dedicated to democratizing access to university-level science education, building an inclusive
              community that combines rigorous academics with meaningful mentorship, and empowering curious students
              regardless of their background or circumstances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Democratizing Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Making university-level science education accessible to all European high school students, breaking
                  down barriers of geography and resources.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Inclusive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Building a supportive network that combines academic excellence with personal mentorship, fostering
                  both intellectual and personal growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Empowering Students</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Providing every curious student with the tools, knowledge, and confidence needed to pursue their
                  scientific aspirations, regardless of their starting point.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section id="programs" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Our Programs</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive educational pathways designed to prepare you for university-level science
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <Calculator className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">University-Level Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Advanced coursework in physics, mathematics, and technical skills preparation.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Advanced Physics
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Higher Mathematics
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    LaTeX Documentation
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    MATLAB Programming
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Mentorship Program</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Personalized guidance from experienced mentors in small, focused groups.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />5 students per mentor
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Monthly group calls
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Individual guidance
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Career counseling
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Certificate System</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Recognition for both academic achievements and essential life skills development.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Course completion certificates
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Life skills recognition
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Portfolio development
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    University preparation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Microscope className="h-6 w-6" />
                <span className="text-xl font-heading font-bold">Open Pathways</span>
              </div>
              <p className="text-sm opacity-80">Every Pathway Leads To Discovery</p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Physics Courses</li>
                <li>Mathematics</li>
                <li>Technical Skills</li>
                <li>Mentorship</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Student Portal</li>
                <li>Mentor Network</li>
                <li>Success Stories</li>
                <li>Events</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>info@openpathways.org</li>
                <li>+44 (0) 20 1234 5678</li>
                <li>London, United Kingdom</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-60">
              © 2024 Open Pathways. All rights reserved. Empowering the next generation of scientists.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
