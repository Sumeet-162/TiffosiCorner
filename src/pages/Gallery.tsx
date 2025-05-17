
import { useState, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { galleryImages } from "@/data/gallery";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ChevronDown, ChevronUp } from "lucide-react";

const Gallery = () => {
  const [filter, setFilter] = useState<"all" | "car" | "driver" | "race" | "team">("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showLeclerc, setShowLeclerc] = useState(false);
  const [expandedDescription, setExpandedDescription] = useState(false);

  const filteredImages = useMemo(() => {
    if (showLeclerc) {
      return galleryImages.filter(image => 
        image.title.toLowerCase().includes('leclerc') || 
        image.description.toLowerCase().includes('leclerc')
      );
    }
    return galleryImages.filter(
      image => filter === "all" || image.category === filter
    );
  }, [filter, showLeclerc]);
  
  const selectedImageData = selectedImage !== null 
    ? galleryImages.find(image => image.id === selectedImage) 
    : null;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };
  
  const handleDownload = (imageUrl: string, title: string) => {
    // Create a temporary link
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `ferrari-f1-${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const hasLeclercImages = galleryImages.some(image => 
    image.title.toLowerCase().includes('leclerc') || 
    image.description.toLowerCase().includes('leclerc')
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Ferrari F1 Gallery</h1>
        <p className="text-lg text-muted-foreground">
          Explore the visual history of Ferrari in Formula 1
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-10">
        <Button
          variant={!showLeclerc && filter === "all" ? "default" : "outline"}
          onClick={() => { setFilter("all"); setShowLeclerc(false); }}
          size="sm"
          className="rounded-full"
        >
          All Photos
        </Button>
        <Button
          variant={!showLeclerc && filter === "car" ? "default" : "outline"}
          onClick={() => { setFilter("car"); setShowLeclerc(false); }}
          size="sm"
          className="rounded-full"
        >
          Cars
        </Button>
        <Button
          variant={!showLeclerc && filter === "driver" ? "default" : "outline"}
          onClick={() => { setFilter("driver"); setShowLeclerc(false); }}
          size="sm"
          className="rounded-full"
        >
          Drivers
        </Button>
        <Button
          variant={!showLeclerc && filter === "race" ? "default" : "outline"}
          onClick={() => { setFilter("race"); setShowLeclerc(false); }}
          size="sm"
          className="rounded-full"
        >
          Races
        </Button>
        <Button
          variant={!showLeclerc && filter === "team" ? "default" : "outline"}
          onClick={() => { setFilter("team"); setShowLeclerc(false); }}
          size="sm"
          className="rounded-full"
        >
          Team
        </Button>
        {hasLeclercImages && (
          <Button
            variant={showLeclerc ? "default" : "outline"}
            onClick={() => { setShowLeclerc(!showLeclerc); }}
            size="sm"
            className="rounded-full bg-gradient-to-r from-ferrari-red to-red-700 text-white hover:text-white hover:from-ferrari-red hover:to-ferrari-yellow"
          >
            Charles Leclerc
          </Button>
        )}
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredImages.map(image => (
          <motion.div 
            key={image.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
            onClick={() => setSelectedImage(image.id)}
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={image.imageUrl} 
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                <h3 className="font-bold text-lg">{image.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-white/80">{image.year}</p>
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                    {image.category}
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced image modal with description and download button */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img 
                  src={selectedImageData.imageUrl} 
                  alt={selectedImageData.title}
                  className="w-full h-auto"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge 
                    className="bg-ferrari-red text-white border-none"
                  >
                    {selectedImageData.category}
                  </Badge>
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="h-8 w-8 rounded-full bg-black/40 border-white/20 hover:bg-black/60"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(selectedImageData.imageUrl, selectedImageData.title);
                    }}
                  >
                    <Download className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-card/80 to-card">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-bold">{selectedImageData.title}</h2>
                  <Badge variant="outline">{selectedImageData.year}</Badge>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{selectedImageData.description}</p>
                
                <AnimatePresence>
                  {expandedDescription && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-muted-foreground pt-4 border-t border-border"
                    >
                      <p className="mb-3">This image captures a moment from Ferrari's rich Formula 1 history, showcasing the team's commitment to excellence and passion for racing.</p>
                      
                      {selectedImageData.title.toLowerCase().includes('leclerc') && (
                        <p>Charles Leclerc, one of Ferrari's current star drivers, has shown incredible skill and determination since joining the Scuderia. His talent behind the wheel continues Ferrari's legacy of nurturing world-class racing drivers.</p>
                      )}
                      
                      {selectedImageData.category === "car" && (
                        <p>Ferrari's F1 cars are renowned for their distinctive red livery and cutting-edge engineering. Each model represents countless hours of development and the pinnacle of automotive technology.</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setExpandedDescription(!expandedDescription)}
                  className="mt-2 text-muted-foreground"
                >
                  {expandedDescription ? (
                    <> 
                      <ChevronUp className="h-4 w-4 mr-1" /> 
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-1" /> 
                      Show more details
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium">No images found for this filter</h3>
          <p className="text-muted-foreground mt-2">Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
