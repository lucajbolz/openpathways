import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">OP</span>
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">Open Pathways</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-foreground font-medium">
                About
              </Link>
              <Link href="/programs" className="text-muted-foreground hover:text-foreground transition-colors">
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
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-heading">About Open Pathways</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of scientists through accessible education and meaningful mentorship
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-lg mb-6">
                Open Pathways was founded with a simple yet powerful vision: to break down the barriers that prevent
                curious young minds from accessing university-level science education. We recognized that too many
                bright students face obstacles like prohibitive costs, geographic limitations, and lack of academic
                preparation that keep them from pursuing their scientific passions.
              </p>
              <p className="text-lg mb-6">
                Our inspiration comes from the countless students we've met who are genuinely curious about science but
                lack the guidance and confidence to take their first steps into the academic world. These are the
                students who ask profound questions, who wonder about the mysteries of the universe, but who don't know
                where to turn for answers.
              </p>
              <p className="text-lg">
                We envision a future where every curious student, regardless of their background or circumstances, can
                become part of a global community of young scientists. A community where learning is collaborative,
                mentorship is meaningful, and every pathway truly leads to discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-heading text-center">
              The Problem We Solve
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">
                    Lack of Access & Awareness
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many students simply don't know how to contact professors or access research opportunities. They're
                    unaware of the pathways available to them, especially students from non-academic families who lack
                    insider knowledge of university systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">
                    Cost & Geographic Barriers
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Existing programs are often expensive or not well-publicized in Europe. Students in remote areas or
                    with limited financial resources find themselves excluded from opportunities that could transform
                    their futures.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">
                    Confidence & Social Barriers
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Introverted students and those who feel like outsiders in academic settings need safe spaces to
                    build confidence. Traditional educational environments often fail to nurture these students'
                    potential.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">Skills Gap</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Students may have the curiosity and intelligence but lack practical academic life skills - how to
                    read research papers, communicate with professors, or navigate university culture.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-heading text-center">
              Our Approach
            </h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-foreground mb-4 font-heading">Accessible Education</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We offer affordable and free online courses that make university-level science education accessible
                    to everyone. Our courses are designed to bridge the gap between high school and university,
                    providing the foundation students need to succeed.
                  </p>
                </div>
                <div className="md:w-1/2 bg-primary/10 rounded-lg p-8 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5:1</div>
                  <div className="text-sm text-muted-foreground">Student to Mentor Ratio</div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-foreground mb-4 font-heading">Small Group Mentorship</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mentorship program pairs small groups of 5 students with experienced mentors. This intimate
                    setting allows for personalized guidance and creates strong bonds within our learning community.
                  </p>
                </div>
                <div className="md:w-1/2 bg-secondary/10 rounded-lg p-8 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Holistic Development</div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-foreground mb-4 font-heading">
                    Comprehensive Skills Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We focus on both academic knowledge AND practical academic life skills. Students learn not just
                    science, but how to navigate university culture, communicate effectively, and build confidence in
                    academic settings.
                  </p>
                </div>
                <div className="md:w-1/2 bg-accent/10 rounded-lg p-8 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">♻️</div>
                  <div className="text-sm text-muted-foreground">Self-Sustaining Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-heading">Vision for the Future</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-border/50 bg-background/50">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">2030</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">Global Community</h3>
                  <p className="text-muted-foreground">
                    Thousands of members worldwide, creating a vibrant network of young scientists supporting each
                    other's growth and discovery.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-background/50">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-secondary mb-4">🏆</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">Recognized Excellence</h3>
                  <p className="text-muted-foreground">
                    Certificates that universities value and recognize, providing real pathways to higher education and
                    research opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-background/50">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-accent mb-4">🏛️</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">Policy Influence</h3>
                  <p className="text-muted-foreground">
                    A respected voice in European education policy, advocating for accessible science education and
                    student empowerment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-background/50">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-4">🌍</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-heading">Confident Scientists</h3>
                  <p className="text-muted-foreground">
                    A network of confident young scientists who are prepared to tackle the world's greatest challenges
                    with knowledge and collaboration.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-background/80 rounded-lg p-8 border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-4 font-heading">
                Join Us in Building the Future
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every pathway leads to discovery, and every student deserves the chance to explore theirs. Together,
                we're not just teaching science – we're nurturing the next generation of innovators, researchers, and
                problem-solvers who will shape our world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-involved">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Involved
                  </Button>
                </Link>
                <Link href="/get-involved">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                  >
                    Become a Mentor
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 inline-block">
              Open Pathways
            </Link>
            <p className="text-muted-foreground mb-6">Every Pathway Leads To Discovery</p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/programs" className="hover:text-foreground transition-colors">
                Programs
              </Link>
              <Link href="/get-involved" className="hover:text-foreground transition-colors">
                Get Involved
              </Link>
              <Link href="/our-team" className="hover:text-foreground transition-colors">
                Our Team
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
