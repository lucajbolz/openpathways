import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Heart, Lightbulb, Target, Mail, Linkedin, BookOpen, Award, Globe, Star } from "lucide-react"
import Link from "next/link"

export default function OurTeamPage() {
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
              <Link href="/programs" className="text-muted-foreground hover:text-foreground transition-colors">
                Programs
              </Link>
              <Link href="/get-involved" className="text-muted-foreground hover:text-foreground transition-colors">
                Get Involved
              </Link>
              <Link href="/our-team" className="text-foreground font-medium">
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Meet the People Transforming Science Education
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate educators, researchers, and innovators united by one mission: making university-level science
              accessible to every curious mind
            </p>
            <div className="flex items-center justify-center space-x-4 text-primary">
              <Globe className="h-6 w-6" />
              <span className="text-lg font-medium">Building the Future of Education</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="mb-4">
                      <span className="text-primary font-semibold text-lg">Founder & Director</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Dr. Sarah Mitchell</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        With over 15 years of experience in science education and research, Dr. Mitchell founded Open
                        Pathways with a vision to democratize access to high-quality scientific education across Europe.
                      </p>
                      <p>
                        Her academic background spans theoretical physics and educational psychology, bringing together
                        deep scientific knowledge with proven pedagogical methods. She has published extensively on
                        innovative teaching approaches and mentorship in STEM fields.
                      </p>
                      <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                        <p className="text-foreground font-medium italic">
                          "Every student deserves the opportunity to explore the wonders of science, regardless of their
                          background or circumstances. Open Pathways exists to make that vision a reality."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-6">
                      <Button variant="outline" size="sm">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="w-full max-w-sm mx-auto">
                      <img
                        src="/placeholder-wn1mk.png"
                        alt="Dr. Sarah Mitchell, Founder & Director"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Our Advisory Board</h2>
            <p className="text-lg text-muted-foreground">Distinguished educators and researchers guiding our mission</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">JM</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Prof. James Morrison</h3>
                <p className="text-sm text-primary mb-3">Physics Department, Oxford University</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Theoretical physicist specializing in quantum mechanics and educational innovation. 20+ years of
                  experience in undergraduate physics education.
                </p>
                <div className="flex justify-center space-x-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">AL</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Dr. Anna Larsson</h3>
                <p className="text-sm text-primary mb-3">Educational Psychology, KTH Stockholm</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Expert in STEM education and student motivation. Research focus on bridging secondary to tertiary
                  education transitions.
                </p>
                <div className="flex justify-center space-x-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">MR</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Dr. Marco Rossi</h3>
                <p className="text-sm text-primary mb-3">Research Director, CERN</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Particle physicist and science communicator. Passionate about making complex physics accessible to
                  young minds worldwide.
                </p>
                <div className="flex justify-center space-x-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  Expanding Our Advisory Network
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We're continuously building relationships with leading educators and researchers who share our vision.
                  Join us in shaping the future of science education and creating opportunities for the next generation
                  of scientists and innovators.
                </p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Become an Advisor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mentor Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Our Mentor Team</h2>
            <p className="text-lg text-muted-foreground">
              Experienced students and professionals guiding the next generation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-primary">EK</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Emma Kowalski</h4>
                <p className="text-xs text-primary mb-2">Physics, Cambridge</p>
                <p className="text-muted-foreground text-xs">3rd year undergraduate specializing in quantum physics</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-primary">LM</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Lucas Martinez</h4>
                <p className="text-xs text-primary mb-2">PhD Candidate, ETH Zurich</p>
                <p className="text-muted-foreground text-xs">
                  Researching condensed matter physics and materials science
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-primary">SJ</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Sofia Jensen</h4>
                <p className="text-xs text-primary mb-2">Research Engineer, ASML</p>
                <p className="text-muted-foreground text-xs">
                  Optical systems engineer with 5 years industry experience
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-primary">AD</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Alex Dubois</h4>
                <p className="text-xs text-primary mb-2">Mathematics, Sorbonne</p>
                <p className="text-muted-foreground text-xs">Master's student in mathematical physics and modeling</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-center">University Physics Students</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  Current university students who have successfully navigated the transition from high school to
                  university-level physics, sharing their recent experiences and insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-center">Graduate Researchers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  PhD students and early-career researchers bringing cutting-edge knowledge and research experience to
                  guide students toward advanced scientific thinking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-center">Industry Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  Working scientists and engineers who provide real-world perspective on how scientific education
                  translates into meaningful careers and impactful work.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Join Our Mentor Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Culture/Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Inclusive Community</h3>
              <p className="text-muted-foreground">
                Everyone belongs here. We create safe, welcoming spaces where all students can thrive regardless of
                their background or starting point.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Academic Excellence</h3>
              <p className="text-muted-foreground">
                We maintain rigorous academic standards while providing the support and encouragement students need to
                reach their full potential.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We're reimagining education for the digital age, using technology and proven pedagogical methods to
                create better learning experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Impact</h3>
              <p className="text-muted-foreground">
                Every decision we make is guided by our mission to change lives through education and create
                opportunities for the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl opacity-90 mb-8">
              Whether as a student, mentor, advisor, or team member, there's a place for you at Open Pathways
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
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
                <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center">
                  <span className="text-foreground font-bold text-sm">OP</span>
                </div>
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
