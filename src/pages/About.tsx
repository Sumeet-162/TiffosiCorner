
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Github, Twitter, History, Flag } from "lucide-react";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 -right-40 w-80 h-80 rounded-full bg-ferrari-red/10 blur-[100px] -z-10"></div>
      <div className="absolute -bottom-20 -left-40 w-80 h-80 rounded-full bg-ferrari-yellow/10 blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-ferrari-red to-ferrari-yellow bg-clip-text text-transparent">
            About This Site
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            My passion for Formula 1 and the iconic Scuderia Ferrari team
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="prose dark:prose-invert max-w-none"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div 
              className="mb-12 bg-gradient-to-r from-ferrari-red/10 to-ferrari-yellow/5 p-8 rounded-2xl border border-muted"
              variants={item}
            >
              <h2 className="flex items-center text-2xl font-bold mb-4">
                <span className="w-1 h-6 bg-ferrari-red rounded-full mr-3 inline-block"></span>
                Why I Created This Site
              </h2>
              <p>
                Welcome to my Ferrari F1 fan website! As a dedicated follower of Formula 1 and a passionate Ferrari supporter, I created this site to share my enthusiasm for the sport's most iconic team. Ferrari's rich history, combined with the thrill of current season action, makes following the Scuderia an exciting journey that I'm delighted to document here.
              </p>
            </motion.div>
            
            <motion.div 
              className="mb-12 bg-card p-8 rounded-2xl shadow-sm border border-muted"
              variants={item}
            >
              <h2 className="flex items-center text-2xl font-bold mb-4">
                <span className="w-1 h-6 bg-ferrari-red rounded-full mr-3 inline-block"></span>
                My F1 Journey
              </h2>
              <p>
                My love for Formula 1 began in the early 2000s during the dominant Schumacher era. The sight of the scarlet cars leading the pack, the sound of those powerful engines, and the drama of race weekends quickly had me hooked. Since then, I've followed every race, celebrated the victories, and stayed loyal through the challenging seasons.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-ferrari-dark/80 to-black/80 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-2">First Race</h3>
                  <p className="text-sm opacity-80">Monza, 2004</p>
                </div>
                <div className="bg-gradient-to-br from-ferrari-red/90 to-ferrari-red/70 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-2">Favorite Driver</h3>
                  <p className="text-sm opacity-80">Charles Leclerc</p>
                </div>
                <div className="bg-gradient-to-br from-ferrari-yellow/90 to-ferrari-yellow/70 p-6 rounded-xl text-ferrari-dark">
                  <h3 className="text-xl font-bold mb-2">Best Memory</h3>
                  <p className="text-sm opacity-80">Monza 2019 Victory</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-12 bg-gradient-to-r from-ferrari-red/10 to-ferrari-yellow/5 p-8 rounded-2xl border border-muted"
              variants={item}
            >
              <h2 className="flex items-center text-2xl font-bold mb-4">
                <span className="w-1 h-6 bg-ferrari-red rounded-full mr-3 inline-block"></span>
                Why Ferrari?
              </h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p>
                    Ferrari isn't just a racing team; it's a symbol of passion, excellence, and tradition. As the only team to have competed in every Formula 1 season since the championship began, Ferrari carries a legacy unmatched in motorsport. The distinctive red cars, the passionate tifosi, and the team's commitment to pushing the boundaries of performance all contribute to making Ferrari special.
                  </p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-32 h-32 bg-ferrari-red rounded-lg shadow-lg flex items-center justify-center">
                    <Flag className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="mb-12 bg-card p-8 rounded-2xl shadow-sm border border-muted"
              variants={item}
            >
              <h2 className="flex items-center text-2xl font-bold mb-4">
                <span className="w-1 h-6 bg-ferrari-red rounded-full mr-3 inline-block"></span>
                About This Website
              </h2>
              <p>
                This website aims to provide fellow Ferrari fans with:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ferrari-red mt-2 mr-2"></span>
                  Up-to-date information on Ferrari's performance in the current F1 season
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ferrari-red mt-2 mr-2"></span>
                  Insights into the team's rich history and legacy
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ferrari-red mt-2 mr-2"></span>
                  Coverage of drivers, team developments, and race highlights
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-ferrari-red mt-2 mr-2"></span>
                  A platform to celebrate and share our collective passion for the Prancing Horse
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="mb-12 bg-gradient-to-r from-ferrari-red/10 to-ferrari-yellow/5 p-8 rounded-2xl border border-muted"
              variants={item}
            >
              <h2 className="flex items-center text-2xl font-bold mb-4">
                <span className="w-1 h-6 bg-ferrari-red rounded-full mr-3 inline-block"></span>
                Connect With Me
              </h2>
              <p>
                I'm always interested in connecting with fellow F1 and Ferrari enthusiasts. Whether you have suggestions for the website, want to discuss race strategies, or simply share in the excitement of a Ferrari victory, feel free to reach out!
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="bg-gradient-to-r from-ferrari-red to-ferrari-red/80 hover:from-ferrari-red/90 hover:to-ferrari-red/70 transition-all duration-300">
                  <Mail className="mr-2 h-4 w-4" />
                  <a href="mailto:contact@forzaferrari.com">Email Me</a>
                </Button>
                <Button variant="outline" className="border-ferrari-red/20 hover:bg-ferrari-red/10 transition-all duration-300">
                  <Twitter className="mr-2 h-4 w-4 text-ferrari-red" />
                  <a href="https://twitter.com/ferrariexample" target="_blank" rel="noreferrer">Twitter</a>
                </Button>
                <Button variant="outline" className="border-ferrari-red/20 hover:bg-ferrari-red/10 transition-all duration-300">
                  <Github className="mr-2 h-4 w-4 text-ferrari-red" />
                  <a href="https://github.com/ferrariexample" target="_blank" rel="noreferrer">GitHub</a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-16 p-8 bg-muted/50 rounded-2xl border border-muted"
              variants={item}
            >
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-1 h-5 bg-ferrari-red/70 rounded-full mr-2 inline-block"></span>
                Disclaimer
              </h3>
              <p className="text-sm text-muted-foreground">
                This is an unofficial fan website and is not affiliated with, authorized, or endorsed by Ferrari S.p.A or Formula One Group. Ferrari, the Prancing Horse logo, Formula 1, and related marks are registered trademarks of their respective owners.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
