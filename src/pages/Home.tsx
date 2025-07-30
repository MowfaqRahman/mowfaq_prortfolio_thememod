import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from '@/components/Scene3D';
import ParticleBackground from '@/components/ParticleBackground';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import emailjs from 'emailjs-com';
import { useRef, useState, useEffect } from 'react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const projects = [
    {
      title: 'Attendance System Using Face Recognition',
      description: 'A Python-based face recognition system that marks attendance automatically using OpenCV and a facial recognition algorithm.',
      link: '#',
    },
    {
      title: 'Happy Paw Adoption Services',
      description: 'A responsive pet adoption web app with a content-based recommendation system, location-based search, and Firebase integration for personalized user experiences.',
      link: '#',
    },
    {
      title: 'Pill Reminder App',
      description: 'An Android application that helps users manage and receive timely reminders for their medication schedules.',
      link: '#',
    },
    {
      title: 'Money Management App',
      description: ' A Flutter-based mobile app for tracking categorized income and expenses with Firebase storage and a custom animated UI.',
      link: '#',
    },
    {
      title: ' Blog Post App',
      description: ' A blog management system built using React and Firebase with full  functionality.',
      link: '#',
    },
    
  ];



  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'React.js', value: 95 },
        { name: 'JavaScript', value: 90 },
        { name: 'TypeScript', value: 85 },
        { name: 'HTML & CSS', value: 95 },
        { name: 'Tailwind CSS', value: 90 },
      ],
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', value: 85 },
        { name: 'Express', value: 80 },
        { name: 'Firebase', value: 80 },
        { name: 'REST APIs', value: 40 },
      ],
    },
  ];

  const form = useRef(null);
  const [heroProjects, setHeroProjects] = useState([]);

  function getRandomProjects(arr, n) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  // Set random projects for hero section on component mount
  useEffect(() => {
    setHeroProjects(getRandomProjects(projects, 3));
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs.sendForm(
      'service_rsdcifa',
      'template_2bzuvcj',
      form.current,
      '72FP9JhvNn2SlDJca'
    )
    .then((result) => {
        alert('Message sent!');
        form.current.reset();
    }, (error) => {
        alert('Failed to send message: ' + error.text);
    });
  };

  return (
    <>
      <ParticleBackground />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-glow opacity-30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-glow-strong"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Mowfaq mfq
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Creative Developer
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-lg"
                variants={itemVariants}
              >
                I build immersive digital experiences that combine design, animation, 
                and cutting-edge web technologies.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button 
                variant="cosmic"
                size="lg"
                className="hover-float group"
                onClick={() => {
                  const section = document.getElementById('contact-section');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Mail className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Contact Me
              </Button>
              
              <Button 
                variant="glow"
                size="lg"
                className="hover-scale"
                asChild
              >
                <a href="/Mowfaq's resume.pdf" download>
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-6 pt-8"
            >
              <div className="flex -space-x-2">
                {heroProjects.map((project, i) => {
                  // Define project-specific images and colors
                  const projectConfig = {
                    'Attendance System Using Face Recognition': {
                      images: [
                        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=100&h=100&fit=crop&crop=center",
                        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop&crop=center",
                        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop&crop=center"
                      ],
                      color: "from-primary to-accent"
                    },
                    'Happy Paw Adoption Services': {
                      images: [
                        "https://images.unsplash.com/photo-1587764379873-97837921fd44?w=100&h=100&fit=crop&crop=center",
                        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=100&h=100&fit=crop&crop=center",
                        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=100&h=100&fit=crop&crop=center"
                      ],
                      color: "from-accent to-primary"
                    },
                    'Pill Reminder App': {
                      images: [
                        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop&crop=center",
                        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop&crop=center",
                        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop&crop=center"
                      ],
                      color: "from-green-500 to-blue-500"
                    },
                    'Money Management App': {
                      images: [
                        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop&crop=center",
                        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center"
                      ],
                      color: "from-primary/50 to-accent/50"
                    },
                    'Blog Post App': {
                      images: [
                        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=center",
                        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=100&h=100&fit=crop&crop=center",
                        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&crop=center"
                      ],
                      color: "from-purple-500 to-pink-500"
                    }
                  };

                  const config = projectConfig[project.title] || {
                    images: [
                      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=100&h=100&fit=crop&crop=center"
                    ],
                    color: "from-primary to-accent"
                  };

                  return (
                  <motion.div
                    key={project.title}
                    className={`w-12 h-12 rounded-full overflow-hidden cursor-pointer relative bg-gradient-to-r ${
                      config.color
                    }`}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => {
                      const section = document.getElementById('projects-section');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    title={i === 2 ? "Other Projects - Click to view all projects" : `${project.title} - Click to view projects`}
                  >
                    {i === 2 ? (
                      // Third project - "+" logo
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
                        <span className="text-white text-2xl font-bold">+</span>
                      </div>
                    ) : (
                      // First and second projects - animated images
                      config.images.map((image, imgIndex) => (
                        <motion.img 
                          key={imgIndex}
                          src={image} 
                          alt={`${project.title} ${imgIndex + 1}`}
                          className="w-full h-full object-cover absolute inset-0"
                          animate={{ 
                            opacity: [0, 1, 1, 0],
                          }}
                          transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            delay: imgIndex * 2 + i * 0.5,
                            ease: "easeInOut"
                          }}
                        />
                      ))
                    )}
                  </motion.div>
                );
                })}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">5+ Projects Completed</p>
                <p className="text-xs text-primary">2 Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Scene */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-[500px]"
          >
            <Scene3D />
            {/* Removed floating icons */}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* About Preview Section */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Frontend Developer",
                  description: "Specializing in React and modern web technologies, with additional expertise in mobile app development using Flutte",
                  icon: "💻"
                },
                {
                  title: "UI/UX Designer",
                  description: "Creating beautiful, intuitive interfaces with attention to detail",
                  icon: "🎨"
                },
                {
                  title: "Animation Expert",
                  description: "Bringing designs to life with smooth, engaging animations",
                  icon: "✨"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-strong p-6 rounded-lg border-neon hover-glow hover-float"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects-section" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-glow text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getRandomProjects(projects, 5).map((project, idx) => (
              <Card key={idx} className="glass-strong border-neon hover-glow hover-float transition-all">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={project.link} className="btn-cosmic px-6 py-2 inline-block mt-4">View Project</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-glow text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((group, idx) => (
              <div key={idx} className="glass-strong p-8 rounded-xl border-neon shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                  {group.category}
                </h3>
                <div className="space-y-6">
                  {group.items.map((skill, i) => (
                    <div key={i} className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.value}%</span>
                      </div>
                      <Progress value={skill.value} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto glass-strong p-8 rounded-xl border-neon shadow-lg grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info & Social Media */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-glow">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">mowfaqrahman01@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Download className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+91 9876543210</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <ExternalLink className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">Aluva Ernakulam</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-2">Social Media</div>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/mowfaq-rahman-120470254/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/20 transition"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="https://github.com/MowfaqRahman" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary/20 transition"><i className="fa-brands fa-github"></i></a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-glow">Send Me a Message</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="from_name" placeholder="Your Name" className="w-full p-3 rounded-md bg-background/80 border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary" required />
                  <input type="email" name="from_email" placeholder="Your Email" className="w-full p-3 rounded-md bg-background/80 border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary" required />
                </div>
                <input type="text" name="subject" placeholder="Subject" className="w-full p-3 rounded-md bg-background/80 border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary" />
                <textarea name="message" rows={5} placeholder="Your Message" className="w-full p-3 rounded-md bg-background/80 border border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary" required />
                <div className="text-center">
                  <button type="submit" className="btn-cosmic text-lg px-8 py-3">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;