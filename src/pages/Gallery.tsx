import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '@/data/gallery';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image, Calendar, Info, ChevronLeft, ChevronRight, Camera, Filter, X, Download, ChevronDown, ImageIcon } from 'lucide-react';
import HeroHeader from "@/components/HeroHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { Github } from 'lucide-react';

const categoriesMap = {
  'all': 'All Images',
  'car': 'Cars',
  'driver': 'Drivers',
  'race': 'Races',
  'team': 'Team'
};

type Category = 'all' | 'car' | 'driver' | 'race' | 'team';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Filter images when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Set current index when an image is selected
  useEffect(() => {
    if (selectedImage) {
      const index = filteredImages.findIndex(img => img.id === selectedImage.id);
      setCurrentImageIndex(index);
    } else {
      setCurrentImageIndex(null);
    }
  }, [selectedImage, filteredImages]);

  useEffect(() => {
    // Simulate loading images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlePreviousImage = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1]);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex !== null && currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1]);
    }
  };

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="space-y-12">
      <HeroHeader 
        title="Ferrari"
        titleHighlight="Gallery"
        subtitle="Explore stunning imagery from Ferrari's journey in Formula 1"
        badgeText="VISUAL SHOWCASE"
        badgeIcon={<ImageIcon className="h-4 w-4" />}
        imageUrl="https://raw.githubusercontent.com/Sumeet-162/f1Images/refs/heads/main/gallery1.jpg"
        metaItems={[
          { icon: <Camera className="h-4 w-4" />, text: "High-resolution Images" },
          { icon: <Download className="h-4 w-4" />, text: "Updates After Each Race" },
          { icon: <Image className="h-4 w-4" />, text: "Official Ferrari Collection" }
        ]}
      />

      <div className="container mx-auto px-4">
        {/* Contribution Banner */}
        <div className="flex justify-center mb-12">
          <div className="bg-card shadow-sm rounded-lg p-6 border max-w-2xl w-full">
            <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
              <Github className="h-5 w-5 text-ferrari-red" />
              Contribute to Our Gallery
            </h3>
            <p className="text-muted-foreground mb-4">
              Are you a passionate F1 photographer or Ferrari fan? Share your best Formula 1 photos through our open-source gallery repository. Help us build the most comprehensive collection of Ferrari F1 moments!
            </p>
            <Button 
              asChild 
              className="bg-ferrari-red hover:bg-ferrari-red/90 text-white flex items-center gap-2"
            >
              <a 
                href="https://github.com/Sumeet-162/Formula1Gallery" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Submit Your Photos
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className={selectedCategory === null ? "bg-ferrari-red hover:bg-red-700" : ""}
          >
            All Images
          </Button>
          
          {Object.entries(categoriesMap).map(([key, label]) => (
            <Button
              key={key}
              variant={selectedCategory === key as Category ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(key as Category)}
              className={selectedCategory === key as Category ? "bg-ferrari-red hover:bg-red-700" : ""}
            >
              {label}
            </Button>
          ))}
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="aspect-video w-full rounded-lg" />
            ))
          ) : (
            filteredImages.map((image, index) => (
          <motion.div 
                key={image.id}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <div className="relative aspect-video">
              <img 
                src={image.imageUrl} 
                alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <Badge className="mb-2 bg-ferrari-red text-white border-none">{image.category}</Badge>
                    <p className="text-white">{image.title}</p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
              </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <Image className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-2xl font-bold mb-2">No images found</h3>
            <p className="text-muted-foreground">Try selecting a different category</p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-white/80"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl text-white font-bold">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.description}</p>
                  </div>
                </div>
                  </div>
        )}
        
        {/* Load More Button */}
        <div className="text-center mt-12">
                  <Button 
            variant="outline"
            size="lg"
            className="border-ferrari-red text-ferrari-red hover:bg-ferrari-red/10"
          >
            Load More Images
            <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
      </div>
    </div>
  );
}
