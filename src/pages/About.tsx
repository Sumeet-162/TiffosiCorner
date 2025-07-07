import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Github, Twitter, History, Flag, Clock, Calendar, Car, Trophy, User, Users, Heart, Camera, ExternalLink, Star, Award, ChevronRight, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import HeroHeader from "@/components/HeroHeader";

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
    <div className="space-y-8">
      <HeroHeader 
        title="About"
        titleHighlight="Tifosi Corner"
        subtitle="Passion for Ferrari Excellence"
        badgeText="FORZA FERRARI"
        badgeIcon={<Flag className="h-4 w-4" />}
        imageUrl="https://wojciechstaszewski4.github.io/FerrariWebsite/ferrari.png"
        metaItems={[
          { icon: <Trophy className="h-4 w-4" />, text: "Celebrating Ferrari racing excellence" },
          { icon: <Heart className="h-4 w-4" />, text: "Created with passion for the Prancing Horse" }
        ]}
      />

      {/* Ferrari Racing Stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-[#009246] via-white to-[#CE2B37] my-8"></div>

      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-16"
          >
            {/* My Story Section */}
            <motion.section 
              variants={item}
              className="relative bg-gradient-to-br from-black/90 to-black/70 p-8 rounded-2xl border border-ferrari-red/10 shadow-xl overflow-hidden"
            >
              {/* Background accents */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-ferrari-red/10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-ferrari-red/5 blur-2xl"></div>
              
              <h2 className="text-3xl font-bold mb-6 font-racing relative">
                <span className="text-ferrari-red">My</span> Story
                <div className="h-1 w-16 bg-ferrari-red mt-2"></div>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-ferrari-red" />
                    Why I Created This Site
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Welcome to Tifosi Corner! As a dedicated follower of Formula 1 and passionate Ferrari supporter, I created this hub to celebrate the sport's most iconic team. Ferrari's rich history and thrilling present make following the Scuderia an exciting journey I'm delighted to share.
                  </p>
                  <p className="text-muted-foreground">
                    This isn't just a website; it's a digital home for Ferrari fans, where the legacy of the Prancing Horse is honored and its future celebrated.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Flag className="h-5 w-5 text-ferrari-red" />
                    My F1 Journey
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    My love for Formula 1 began during the dominant Schumacher era. The sight of the scarlet cars leading the pack, the sound of those powerful engines, and the drama of race weekends quickly had me hooked.
                  </p>
                  <p className="text-muted-foreground">
                    Through victories and challenges, I've remained devoted to the team that embodies passion, excellence, and the pure spirit of racing. Being a tifoso isn't just about supporting a team; it's a lifestyle.
                  </p>
                </div>
              </div>
            </motion.section>
            
            {/* Why Ferrari Section */}
            <motion.section 
              variants={item}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 bg-gradient-to-br from-ferrari-red to-ferrari-dark p-8 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-3xl"></div>
                  
                  <h2 className="text-3xl font-bold mb-6 font-racing text-white relative">
                    Why <span className="text-white">Ferrari</span>?
                    <div className="h-1 w-16 bg-white mt-2"></div>
                  </h2>
                  
                  <p className="text-white/90 mb-6">
                    Ferrari isn't just a racing team; it's a symbol of passion, excellence, and tradition. As the only team to have competed in every Formula 1 season since the championship began, Ferrari carries a legacy unmatched in motorsport.
                  </p>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy className="h-5 w-5 text-white" />
                    <p className="text-white"><strong>16</strong> Constructor Championships</p>
                </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="h-5 w-5 text-white" />
                    <p className="text-white"><strong>15</strong> Driver Championships</p>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Flag className="h-5 w-5 text-white" />
                    <p className="text-white"><strong>242</strong> Race Victories</p>
                </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-white" />
                    <p className="text-white"><strong>788</strong> Podium Finishes</p>
                </div>
              </div>
              
                <div className="w-full md:w-1/2 relative">
                  <div className="h-full w-full overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                    <img 
                      src="https://wojciechstaszewski4.github.io/FerrariWebsite/ferrari.png" 
                      alt="Ferrari Logo" 
                      className=" object-contain bg-black/90"
                    />
                </div>
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <Badge className="bg-ferrari-red text-white mb-2">ICONIC</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">74 Years of Excellence</h3>
                    <p className="text-white/90">From the first race to today's battles, the journey continues</p>
                </div>
                </div>
              </div>
            </motion.section>

            {/* Website Features */}
            <motion.section 
              variants={item}
              className="bg-gradient-to-br from-black/80 to-black/60 p-8 rounded-2xl border border-ferrari-red/10 shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-8 font-racing relative">
                <span className="text-ferrari-red">What</span> I Offer
                <div className="h-1 w-16 bg-ferrari-red mt-2"></div>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-black/50 p-6 rounded-xl border border-white/5 hover:border-ferrari-red/20 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-ferrari-red flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Latest Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay current with race results, team news, and driver updates
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-xl border border-white/5 hover:border-ferrari-red/20 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-ferrari-red flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <History className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Rich History</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore Ferrari's legendary legacy in Formula 1
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-xl border border-white/5 hover:border-ferrari-red/20 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-ferrari-red flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Driver Profiles</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep dives into current and legendary Ferrari drivers
                  </p>
                </div>
                
                <div className="bg-black/50 p-6 rounded-xl border border-white/5 hover:border-ferrari-red/20 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-ferrari-red flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Media Gallery</h3>
                  <p className="text-sm text-muted-foreground">
                    Stunning photos and videos of Ferrari in action. Contribute your own photos through our{' '}
                    <a 
                      href="https://github.com/Sumeet-162/Formula1Gallery" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ferrari-red hover:underline"
                    >
                      open-source gallery
                    </a>
                  </p>
                </div>
              </div>
            </motion.section>
            
            {/* Connect with Me */}
            <motion.section 
              variants={item}
              className="bg-gradient-to-br from-black/80 to-black/60 p-8 rounded-2xl border border-ferrari-red/10 shadow-xl relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-ferrari-red/10 blur-3xl"></div>
              
              <h2 className="text-3xl font-bold mb-6 font-racing relative">
                <span className="text-ferrari-red">Contact</span> Me
                <div className="h-1 w-16 bg-ferrari-red mt-2"></div>
              </h2>
              
              <p className="text-muted-foreground mb-6 max-w-2xl">
                I'm always interested in connecting with fellow F1 and Ferrari enthusiasts. Whether you have suggestions for the website, want to discuss race strategies, or simply share in the excitement of a Ferrari victory, feel free to reach out!
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-ferrari-red hover:bg-ferrari-red/90 flex items-center gap-2 transition-all hover:gap-3">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:contact@forzaferrari.com">Email Me</a>
                  <ChevronRight className="h-3 w-3" />
                </Button>
                <Button variant="outline" className="border-ferrari-red/20 hover:bg-ferrari-red/10 flex items-center gap-2 transition-all hover:gap-3">
                  <Instagram className="h-4 w-4 text-ferrari-red" />
                  <a href="https://instagram.com/tifosicorner" target="_blank" rel="noreferrer">Instagram</a>
                  <ChevronRight className="h-3 w-3 text-ferrari-red" />
                </Button>
                <Button variant="outline" className="border-ferrari-red/20 hover:bg-ferrari-red/10 flex items-center gap-2 transition-all hover:gap-3">
                  <Twitter className="h-4 w-4 text-ferrari-red" />
                  <a href="https://twitter.com/tifosicorner" target="_blank" rel="noreferrer">Twitter</a>
                  <ChevronRight className="h-3 w-3 text-ferrari-red" />
                </Button>
                <Button variant="outline" className="border-ferrari-red/20 hover:bg-ferrari-red/10 flex items-center gap-2 transition-all hover:gap-3">
                  <Github className="h-4 w-4 text-ferrari-red" />
                  <a href="https://github.com/Sumeet-162/Formula1Gallery" target="_blank" rel="noreferrer">Contribute Images</a>
                  <ChevronRight className="h-3 w-3 text-ferrari-red" />
                </Button>
              </div>
            </motion.section>
            
            {/* Disclaimer */}
            <motion.section 
              variants={item}
              className="p-6 bg-black/50 rounded-xl border border-white/10 mt-16"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <div className="h-6 w-1.5 bg-ferrari-red rounded-full"></div>
                Disclaimer
              </h3>
              <p className="text-sm text-muted-foreground">
                This is an unofficial fan website and is not affiliated with, authorized, or endorsed by Ferrari S.p.A or Formula One Group. Ferrari, the Prancing Horse logo, Formula 1, and related marks are registered trademarks of their respective owners.
              </p>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
