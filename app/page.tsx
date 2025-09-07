import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  ExternalLink,
  Cloud,
  Server,
  Database,
  Code,
  Award,
  Users,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const skills = {
    "Programming Languages": ["Java", "C", "C++", "C#", "PHP", "JavaScript", "Python", "SQL"],
    Frameworks: ["SpringBoot", "Angular", ".NET", "JavaFX", "QT", "Symfony", "Bootstrap"],
    Databases: ["MySQL", "Oracle DB", "MongoDB", "SQLite"],
    "Cloud/DevOps": [
      "OpenStack",
      "Docker",
      "Kubernetes",
      "Ansible",
      "Jenkins",
      "SonarQube",
      "Grafana",
      "Prometheus",
      "CI/CD",
    ],
    Tools: ["Git", "Trello", "Jira", "StarUML", "LaTeX", "Microsoft Office"],
  }

  const experiences = [
    {
      company: "StreamWIDE",
      role: "Cloud/Kubernetes Intern",
      period: "Dec 2024 – Jun 2025",
      achievements: [
        "Containerized a critical VOIP/SIP service (Swengine), core of the Team on Mission solution",
        "Implemented Kubernetes orchestration to improve scalability and reliability",
        "Built a dynamic port-forwarding mechanism for 30,000 simultaneous connections",
        "Authored automation scripts (Helm, Ansible) reducing deployment time by 25%",
      ],
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      company: "Vermeg",
      role: "FinOps Cloud Intern",
      period: "Jun – Aug 2024",
      achievements: [
        "Developed an automated tool for AWS cost monitoring and anomaly detection",
        "Collected and analyzed consumption data to optimize cloud expenses",
        "Implemented reporting and alerting to anticipate budget overruns",
        "Established KPIs that helped reduce unnecessary cloud spending by 18%",
      ],
      icon: <Server className="w-5 h-5" />,
    },
    {
      company: "Vermeg",
      role: "Software Development Intern",
      period: "Jul – Aug 2023",
      achievements: [
        "Built a leave management application (SpringBoot, Angular, MySQL)",
        "Strengthened version control skills with Git/GitHub workflows",
        "Developed responsive user interfaces improving employee experience",
      ],
      icon: <Code className="w-5 h-5" />,
    },
  ]

  const projects = [
    {
      title: "Cloud Computing Project",
      year: "2024",
      description:
        "Designed a scalable cloud infrastructure using OpenStack, KVM, Docker, Ansible, and Kubernetes. Developed cloud-native services with SpringBoot and Angular.",
      achievements: ["30% increase in service availability", "Automated deployments", "Performance testing"],
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      title: "Dronify Development Project",
      year: "2023",
      description:
        "Built a cross-platform application for drone-based delivery using Java, JavaFX, Symfony, PHP, and MySQL.",
      achievements: ["Cross-platform compatibility", "Real-time tracking", "Route optimization"],
      icon: <Database className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background cloud-bg">
      <div className="floating-clouds">
        <div className="floating-cloud cloud-1"></div>
        <div className="floating-cloud cloud-2"></div>
        <div className="floating-cloud cloud-3"></div>
        <div className="floating-cloud cloud-4"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center" style={{ justifyContent: 'center' }}>
          <nav className="flex items-center space-x-6" style={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          {/* Making hero photo much bigger */}
          <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
            <Image src="/images/ramy-profile.png" alt="Ramy Mgaidi" fill className="object-cover" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Freshly Graduated Cloud Engineer</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Passionate about orchestration, security and infrastructure optimization. Specializing in containerization,
            Kubernetes, and cloud-native solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ramy.mgaidi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
            </a>
            <a
              href="/RamyMgaidiCV_ANG.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <ExternalLink className="w-4 h-4" />
                View Resume
              </Button>
            </a>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Phone className="w-4 h-4" />
              +216 27086763
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +216 27086763
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              ramy.mgaidi@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Tunisia
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Updated description to reflect graduated status */}
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                I'm a freshly graduated Cloud Engineer from ESPRIT with hands-on experience in containerization,
                orchestration, and cloud infrastructure optimization. My passion lies in building scalable, secure, and
                efficient cloud-native solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Microsoft Certified: Azure Fundamentals (AZ-900)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Active member of Rotaract Club & IEEE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  {/* Updated to show graduated status */}
                  <span>Graduated 2025 from ESPRIT</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Arabic (Native)</Badge>
                  <Badge variant="secondary">French (B2)</Badge>
                  <Badge variant="secondary">English (C1)</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Leadership</Badge>
                  <Badge variant="outline">Teamwork</Badge>
                  <Badge variant="outline">Adaptability</Badge>
                  <Badge variant="outline">Curiosity</Badge>
                  <Badge variant="outline">Time Management</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="flex justify-center">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] max-w-md">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24">
                    <Image
                      src="/microsoft-azure-fundamentals-az-900-certification-.jpg"
                      alt="Microsoft Azure Fundamentals AZ-900 Badge"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl">Microsoft Azure Fundamentals</CardTitle>
                <CardDescription className="text-primary font-medium">AZ-900</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Demonstrates foundational knowledge of cloud services and how those services are provided with
                  Microsoft Azure.
                </p>
                <Badge variant="secondary" className="mb-2">
                  Certified 2025
                </Badge>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Award className="w-4 h-4 text-primary" />
                  <a
                    href="https://learn.microsoft.com/api/credentials/share/en-us/ramymgaidi-4121/FC0BB17AF17BF46D?sharingId=222A56239CCA2F59"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Microsoft Certified
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">{exp.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                      <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">{project.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">{project.year}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12 text-pretty">
            I'm always interested in discussing cloud computing opportunities, innovative projects, and potential
            collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              ramy.mgaidi@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Phone className="w-4 h-4" />
              +216 27086763
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/ramy-mgaidi-915940381/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://github.com/Ramy-Mgaidi" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">© 2025 Ramy Mgaidi. Built with passion for cloud computing.</p>
        </div>
      </footer>
    </div>
  )
}
