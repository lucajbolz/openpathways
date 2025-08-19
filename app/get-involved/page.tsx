import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BookOpen,
  Users,
  Handshake,
  Heart,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Mail,
  Code,
  Palette,
  PenTool,
  Megaphone,
  Settings,
  Globe2,
  Lightbulb,
} from "lucide-react"

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">OP</span>
                </div>
                <span className="font-bold text-xl text-foreground">Open Pathways</span>
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="/programs" className="text-muted-foreground hover:text-foreground transition-colors">
                Programs
              </a>
              <a href="/get-involved" className="text-foreground font-medium">
                Get Involved
              </a>
              <a href="/our-team" className="text-muted-foreground hover:text-foreground transition-colors">
                Our Team
              </a>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">Get Involved</h1>
            <p className="text-xl lg:text-2xl text-primary font-medium mb-4">
              Join Our Mission to Democratize Science Education
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're a curious student, experienced mentor, skilled contributor, potential partner, or
              passionate supporter, there's a place for you in the Open Pathways community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="students" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="students" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Students
              </TabsTrigger>
              <TabsTrigger value="mentors" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Mentors
              </TabsTrigger>
              <TabsTrigger value="contributors" className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Contributors
              </TabsTrigger>
              <TabsTrigger value="partners" className="flex items-center gap-2">
                <Handshake className="h-4 w-4" />
                Partners
              </TabsTrigger>
              <TabsTrigger value="supporters" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Supporters
              </TabsTrigger>
            </TabsList>

            {/* Students Tab */}
            <TabsContent value="students" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  Ready to Transform Your Science Journey?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join our global community of curious minds and accelerate your path to university-level science
                  mastery.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <Target className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="font-heading">Eligibility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>High school students passionate about science (global, but starting in Europe)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Strong curiosity and commitment to learning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Basic English proficiency for course materials</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <BookOpen className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="font-heading">What You'll Gain</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>University-level courses in physics and mathematics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Expert mentorship from experienced guides</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Certificates recognizing your achievements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Global network of like-minded peers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <Clock className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="font-heading">Process & Commitment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Application form → brief interview → join cohort</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Course participation + monthly mentor calls</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Flexible schedule around school commitments</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">Start Your Application</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Join thousands of students transforming their scientific future
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      size="lg"
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Mentors Tab */}
            <TabsContent value="mentors" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  Guide the Next Generation of Scientists
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Share your expertise and help shape curious minds. Make a lasting impact on the future of science.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="font-heading">Who Can Mentor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>University students, grad students, researchers, professionals</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Academic background OR completed Open Pathways program</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Passion for education and student development</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <Target className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="font-heading">Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Complete mentor training program</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Strong communication and empathy skills</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Commitment to consistent guidance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <Clock className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="font-heading">Your Commitment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>1-hour monthly video calls with 5 students</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Build network and give back to community</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Shape careers and inspire future scientists</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">Your Impact</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Shape careers, build networks, and give back to the scientific community
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      size="lg"
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full"
                    >
                      Become a Mentor
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="contributors" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  Help Build the Future of Education
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every skill matters - from coding to creativity, research to relationships. Find your way to
                  contribute.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Code className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="font-heading text-lg">Developers & Engineers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Platform development</li>
                      <li>• Learning management systems</li>
                      <li>• Mobile app development</li>
                      <li>• API integrations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Palette className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="font-heading text-lg">Designers & UX Artists</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Brand identity design</li>
                      <li>• Educational graphics</li>
                      <li>• User interface design</li>
                      <li>• User experience optimization</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <PenTool className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="font-heading text-lg">Content Creators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Educational materials</li>
                      <li>• Blog posts and articles</li>
                      <li>• Social media content</li>
                      <li>• Video production</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Megaphone className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="font-heading text-lg">Marketing & Outreach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Community building</li>
                      <li>• Partnership development</li>
                      <li>• Social media management</li>
                      <li>• Event coordination</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Settings className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="font-heading text-lg">Operations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Student success support</li>
                      <li>• Community management</li>
                      <li>• Event coordination</li>
                      <li>• Process optimization</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Globe2 className="h-10 w-10 text-primary mb-3" />
                    <CardTitle className="font-heading text-lg">Translators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Content localization</li>
                      <li>• Making education accessible globally</li>
                      <li>• Cultural adaptation</li>
                      <li>• Multilingual support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary text-primary-foreground max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-2xl">Ready to Contribute?</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Every skill matters - from coding to creativity, research to relationships
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select>
                    <SelectTrigger className="bg-primary-foreground text-foreground">
                      <SelectValue placeholder="Select your area of expertise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Development & Engineering</SelectItem>
                      <SelectItem value="design">Design & UX</SelectItem>
                      <SelectItem value="content">Content Creation</SelectItem>
                      <SelectItem value="marketing">Marketing & Outreach</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="translation">Translation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    size="lg"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full"
                  >
                    Join as Contributor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Partners Tab */}
            <TabsContent value="partners" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">For Institutional Partners</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join us in democratizing science education across Europe. Together, we can create lasting change.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <BookOpen className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="font-heading">Universities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Course recognition and credit transfer</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Research collaboration opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Student pipeline development</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <Handshake className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="font-heading">Companies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Sponsorship opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Mentorship program participation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Internship opportunities for students</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="font-heading">Educational Organizations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Content partnerships</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Outreach collaboration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Shared resources and best practices</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary text-primary-foreground max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-2xl">Partner With Us</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Collaborate to expand access to quality science education and create meaningful impact
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Partner With Us
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Supporters Tab */}
            <TabsContent value="supporters" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">For Supporters</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every form of support helps us reach more students and create greater impact. Join our mission today.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <Heart className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="font-heading">Ways to Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Newsletter signup for updates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Social media following and sharing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Donations (when available)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Advocacy and spreading awareness</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <Mail className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="font-heading">Stay Connected</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Join our newsletter to receive updates on student success stories, program developments, and
                      opportunities to get more involved.
                    </p>
                    <div className="space-y-4">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Subscribe to Newsletter
                      </Button>
                      <div className="flex gap-4 justify-center">
                        <Button variant="outline" size="sm">
                          Twitter
                        </Button>
                        <Button variant="outline" size="sm">
                          LinkedIn
                        </Button>
                        <Button variant="outline" size="sm">
                          Facebook
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're here to help you find the right way to get involved with Open Pathways.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm">info@openpathways.org</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Join Our Community</h3>
                  <p className="text-muted-foreground text-sm">Connect with like-minded individuals</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
