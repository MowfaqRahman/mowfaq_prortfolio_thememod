import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from '@/components/Scene3D';
import ParticleBackground from '@/components/ParticleBackground';

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
                Creative
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Developer
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
              >
                <Mail className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Contact Me
              </Button>
              
              <Button 
                variant="glow"
                size="lg"
                className="hover-scale"
              >
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-6 pt-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className={`w-12 h-12 rounded-full border-2 border-primary bg-gradient-to-r ${
                      i === 1 ? 'from-primary to-accent' :
                      i === 2 ? 'from-accent to-primary' :
                      'from-primary/50 to-accent/50'
                    }`}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">50+ Projects Completed</p>
                <p className="text-xs text-primary">5 Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Scene */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-[500px]"
          >
            <Scene3D />
            
            {/* Floating icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-10 left-10 w-16 h-16 glass rounded-full flex items-center justify-center border-neon-violet"
            >
              <ExternalLink className="w-8 h-8 text-accent" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute bottom-10 right-10 w-16 h-16 glass rounded-full flex items-center justify-center border-neon"
            >
              <Download className="w-8 h-8 text-primary" />
            </motion.div>
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
                  description: "Specializing in React, Three.js, and modern web technologies",
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

      {/* CTA Section */}
      <motion.section
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Ready to Start a Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate and create something amazing together. 
              I'm always excited to work on innovative projects.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="cosmic"
                size="lg" 
                className="text-lg px-8 py-3 hover-float"
              >
                <Mail className="mr-2 w-6 h-6" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;