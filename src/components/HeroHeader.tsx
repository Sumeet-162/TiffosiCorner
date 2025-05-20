import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface HeroHeaderProps {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  badgeText: string;
  badgeIcon: ReactNode;
  imageUrl: string;
  metaItems?: Array<{
    icon: ReactNode;
    text: string;
  }>;
}

const HeroHeader = ({
  title,
  titleHighlight,
  subtitle,
  badgeText,
  badgeIcon,
  imageUrl,
  metaItems
}: HeroHeaderProps) => {
  return (
    <section className="relative h-[50vh] sm:h-[40vh] flex items-center mt-0 pt-0">
      <div className="absolute inset-0 top-0 overflow-hidden">
        <img 
          src={imageUrl}
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
        
        {/* Racing-inspired elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-20 checkered-flag opacity-10"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 mt-16">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="mb-4 bg-ferrari-red text-white border-none px-3 py-1 sm:px-4 sm:py-1.5 flex items-center gap-2 w-fit text-xs sm:text-sm">
            {badgeIcon}
            {badgeText}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 sm:mb-4">
            {title} {titleHighlight && <span className="text-ferrari-red">{titleHighlight}</span>}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-4 max-w-2xl">
            {subtitle}
          </p>
          
          {metaItems && metaItems.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/70 text-xs sm:text-sm mt-4 sm:mt-6">
              {metaItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex items-center gap-1.5">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                  {index < metaItems.length - 1 && (
                    <div className="h-4 w-px bg-white/30 mx-2 sm:mx-4 hidden sm:block"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroHeader; 