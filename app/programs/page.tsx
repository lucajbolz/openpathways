import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Microscope,
  Calculator,
  Code,
  FileText,
  MessageSquare,
  Target,
  Star,
  TrendingUp,
} from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">OP</span>
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">Open Pathways</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/programs" className="text-foreground font-medium">
                Programs
              </Link>
              <Link href="/get-involved" className="text-muted-foreground hover:text-foreground transition-colors">
                Get Involved
              </Link>
              <Link href="/our-team" className="text-muted-foreground hover:text-foreground transition-colors">
                Our Team
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">Our Programs</h1>
            <p className="text-xl lg:text-2xl text-primary font-medium mb-4">Comprehensive Educational Pathways</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Detailed educational offerings designed to prepare European high school students for university-level
              science through innovative courses, mentorship, and skill development.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Courses Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Academic Courses</h2>
            <p className="text-lg text-muted-foreground">
              University-level coursework designed to build a strong foundation in science and essential technical
              skills
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calculator className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading text-xl">University-Level Physics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Comprehensive foundation course covering mechanics, thermodynamics, electromagnetism, and modern
                  physics concepts at university level.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Classical Mechanics & Dynamics
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Electromagnetic Theory
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Quantum Physics Introduction
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Laboratory Techniques
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading text-xl">Advanced Mathematics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Mathematical foundations essential for scientific research including calculus, linear algebra, and
                  statistical analysis.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Multivariable Calculus
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Linear Algebra & Matrices
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Differential Equations
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Statistical Methods
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading text-xl">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Essential technical tools and programming languages used in modern scientific research and academic
                  work.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    LaTeX Document Preparation
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    MATLAB Programming
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Python for Science
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Research Methodology
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading text-xl">Academic Life Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Essential skills for academic success including communication, ethics, and professional networking in
                  scientific communities.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Scientific Communication
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Research Ethics
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Academic Networking
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Presentation Skills
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mentorship Program Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Mentorship Program</h2>
            <p className="text-lg text-muted-foreground">
              Personalized guidance through small groups and experienced mentors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="font-heading">Small Group Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Each mentor works with exactly 5 students, ensuring personalized attention and meaningful
                    relationships within a supportive peer group.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="font-heading">Themed Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Structured monthly sessions covering practical topics like "How to Contact Professors" and "Finding
                    Research Opportunities" alongside academic discussions.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="font-heading">Monthly Video Calls</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    One-hour monthly video calls mixing academic discussion with practical guidance, creating a safe and
                    inclusive environment for building confidence.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <Award className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="font-heading">Safe Environment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Carefully curated inclusive environment designed to build confidence and encourage questions,
                    fostering both academic and personal growth.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate System Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Certificate System</h2>
            <p className="text-lg text-muted-foreground">
              Recognition system designed to strengthen university applications and validate skills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Individual Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Earn certificates for each course completed, demonstrating mastery of specific academic and technical
                  skills.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    Physics Mastery Certificate
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    Mathematics Proficiency
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    Technical Skills Validation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Scholar Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Comprehensive "Open Pathways Scholar" certification for students completing the full program with
                  mentorship.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    Complete Program Recognition
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    Mentorship Participation
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    Leadership Development
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Skills Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Skills-based recognition including LaTeX proficiency, scientific communication, and research
                  methodology.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    LaTeX Proficiency Badge
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    Communication Excellence
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-2" />
                    Research Methodology
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Journey Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Student Journey</h2>
            <p className="text-lg text-muted-foreground">
              From curious high school student to confident university-ready scholar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Entry Point</h3>
              <p className="text-muted-foreground">
                Curious but inexperienced high school student with interest in science but lacking confidence or clear
                direction for university preparation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Experience</h3>
              <p className="text-muted-foreground">
                Comprehensive learning through university-level courses, personalized mentorship, and community building
                with like-minded peers and experienced guides.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Exit Point</h3>
              <p className="text-muted-foreground">
                Confident student ready for university-level academics with strong professional network, technical
                skills, and clear academic direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Path to Mentorship Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Path to Mentorship</h2>
            <p className="text-lg text-muted-foreground">
              Creating a self-sustaining community where graduates become the next generation of mentors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Graduate Mentors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Program graduates can become mentors after completing the full program, creating a continuous cycle of
                  knowledge sharing and community growth.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Complete program graduation required
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    University enrollment verification
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Demonstrated leadership skills
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Mentor Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Comprehensive mentor training workshop required before beginning mentorship responsibilities, ensuring
                  quality and consistency across the program.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Mentorship methodology training
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Communication skills development
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-primary mr-2" />
                    Ongoing support and resources
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Student Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Hear from students who have transformed their academic journey through Open Pathways
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Anna Schmidt</p>
                    <p className="text-sm text-muted-foreground">Physics Student, University of Vienna</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "The mentorship program gave me the confidence to pursue physics at university. My mentor helped me
                  understand not just the coursework, but how to navigate academic life."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Marco Jensen</p>
                    <p className="text-sm text-muted-foreground">Engineering Student, ETH Zurich</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Learning LaTeX and MATLAB through Open Pathways gave me a huge advantage in my first year. I was
                  already familiar with tools my classmates were just discovering."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join our comprehensive program and transform your scientific education experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Learn More
              </Button>
            </div>
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
