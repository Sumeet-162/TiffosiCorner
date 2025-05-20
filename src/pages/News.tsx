import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Newspaper, Clock, ExternalLink, Calendar, Flag, ChevronRight, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  source: string;
  url: string;
  tag?: string;
}

// Mocked news data (in a real app, this would come from an API)
const mockNewsItems: NewsItem[] = [
  {
    id: 1,
    title: "Ferrari Introduces Major Upgrade Package for Spanish Grand Prix",
    summary: "Scuderia Ferrari will bring significant updates to both cars for the upcoming Spanish Grand Prix, focusing on improved aerodynamics and better tire management in high-temperature conditions.",
    date: "2025-05-15",
    imageUrl: "/placeholder.svg",
    source: "Formula1.com",
    url: "#",
    tag: "Updates"
  },
  {
    id: 2,
    title: "Leclerc: 'Monaco Win Was One of My Most Special Moments'",
    summary: "Charles Leclerc reflects on his emotional home race victory at the Monaco Grand Prix, calling it one of the most special moments of his Formula 1 career so far.",
    date: "2025-05-27",
    imageUrl: "/placeholder.svg",
    source: "Autosport",
    url: "#",
    tag: "Interview"
  },
  {
    id: 3,
    title: "Carlos Sainz Set for Contract Extension with Ferrari",
    summary: "Reports suggest that Carlos Sainz is close to finalizing a new multi-year deal with Ferrari, ensuring the team's driver lineup remains stable for the foreseeable future.",
    date: "2025-05-12",
    imageUrl: "/placeholder.svg",
    source: "Motorsport.com",
    url: "#",
    tag: "Team News"
  },
  {
    id: 4,
    title: "Ferrari Celebrates 250th F1 Victory",
    summary: "Ferrari reaches a historic milestone with their 250th Formula 1 victory, cementing their status as the most successful team in the sport's history.",
    date: "2025-05-05",
    imageUrl: "/placeholder.svg",
    source: "RacingNews365",
    url: "#",
    tag: "Achievement"
  },
  {
    id: 5,
    title: "Technical Analysis: How Ferrari's New Floor Design Has Improved Performance",
    summary: "An in-depth look at Ferrari's recent floor redesign and how it has contributed to the team's improved performance in the last three races.",
    date: "2025-04-28",
    imageUrl: "/placeholder.svg",
    source: "The Race",
    url: "#",
    tag: "Technical"
  },
  {
    id: 6,
    title: "Ferrari Academy Driver Wins Formula 2 Feature Race",
    summary: "Ferrari Driver Academy member impresses with a dominant victory in the Formula 2 Feature Race, strengthening his case for a future Formula 1 seat.",
    date: "2025-04-21",
    imageUrl: "/placeholder.svg",
    source: "Formula1.com",
    url: "#",
    tag: "Junior Team"
  }
];

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const uniqueTags = Array.from(new Set(mockNewsItems.map(item => item.tag).filter(Boolean)));

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = activeTag ? item.tag === activeTag : true;
    
    return matchesSearch && matchesTag;
  });

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll simulate a delay for loading state
    const fetchNews = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setNews(mockNewsItems);
      setLoading(false);
    };
    
    fetchNews();
  }, []);

  return (
    <>
      {/* Hero Header Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://raw.githubusercontent.com/Sumeet-162/f1Images/refs/heads/main/news1.jpg" 
            alt="Ferrari F1 Car" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
          
          {/* Racing-inspired elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-20 checkered-flag opacity-10"></div>
            <div className="absolute top-1/3 left-0 right-0 h-px border-t-2 border-dashed border-white/10 rotate-1"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 mt-16">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="mb-4 bg-ferrari-red text-white border-none px-4 py-1.5 flex items-center gap-2 w-fit">
              <Newspaper className="h-4 w-4" />
              LATEST UPDATES
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Ferrari F1 <span className="text-ferrari-red">News</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-4 max-w-2xl">
              Stay updated with the latest news, exclusive content and developments from Scuderia Ferrari
            </p>
            
            <div className="flex items-center gap-4 text-white/70 text-sm mt-6">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>Updated daily</span>
              </div>
              <div className="h-4 w-px bg-white/30"></div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>2025 Season coverage</span>
              </div>
              <div className="h-4 w-px bg-white/30"></div>
              <div className="flex items-center gap-1.5">
                <Flag className="h-4 w-4" />
                <span>Official team insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <motion.div 
          className="mb-10 rounded-xl p-6 bg-muted/30 border"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-ferrari-red" />
              <span>Recent Stories</span>
            </h2>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8"
                />
              </div>
              
              <Button
                variant={activeTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTag(null)}
                className="whitespace-nowrap"
              >
                All news
              </Button>
            </div>
          </div>
          
          {uniqueTags.length > 0 && (
            <>
              <Separator className="my-4" />
              <div className="flex flex-wrap gap-2">
                {uniqueTags.map(tag => (
                  <Badge
                    key={tag}
                    variant={activeTag === tag ? "default" : "outline"}
                    className={`cursor-pointer ${activeTag === tag ? "bg-ferrari-red hover:bg-ferrari-red/90" : "hover:bg-muted"}`}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </motion.div>

        {loading ? (
          // Loading state
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <Skeleton className="w-full h-48" />
                <CardHeader>
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-4 w-3/4 mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <>
            {filteredNews.length > 0 ? (
              // News grid
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -5 }}
                  >
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block h-full"
                    >
                      <Card className="overflow-hidden h-full transition-all hover:shadow-lg border-2 border-transparent hover:border-ferrari-red/20">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {item.tag && (
                            <Badge className="absolute top-3 right-3 bg-ferrari-red text-white border-none">
                              {item.tag}
                            </Badge>
                          )}
                        </div>
                        <CardHeader>
                          <CardTitle className="group-hover:text-ferrari-red transition-colors line-clamp-2">
                            {item.title}
                          </CardTitle>
                          <CardDescription>
                            <div className="flex justify-between items-center mt-1">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                {new Date(item.date).toLocaleDateString('en-US', { 
                                  day: 'numeric', 
                                  month: 'short',
                                  year: 'numeric'
                                })}
                              </span>
                              <span className="text-ferrari-red font-medium">{item.source}</span>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground line-clamp-3">
                            {item.summary}
                          </p>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button variant="ghost" size="sm" className="gap-1 ml-auto text-ferrari-red">
                            <span>Read more</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </a>
                  </motion.div>
                ))}
              </div>
            ) : (
              // No results state
              <div className="text-center py-20 bg-muted/20 rounded-lg border border-dashed">
                <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-medium">No articles found</h3>
                <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                  We couldn't find any articles matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveTag(null);
                  }}
                >
                  View all news
                </Button>
              </div>
            )}
          </>
        )}

        <div className="flex justify-center mt-12">
          <div className="text-center max-w-xl py-6 px-8 rounded-lg bg-muted/30 border">
            <h3 className="text-lg font-medium mb-2 flex items-center justify-center gap-2">
              <ExternalLink className="h-4 w-4 text-ferrari-red" />
              Official Ferrari News
            </h3>
            <p className="text-sm text-muted-foreground">
              This news section showcases sample content for demonstration purposes. 
              For the latest official Ferrari Formula 1 news, visit the Scuderia Ferrari website.
            </p>
            <Button className="mt-4 bg-ferrari-red hover:bg-ferrari-red/90">Visit Official Site</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
