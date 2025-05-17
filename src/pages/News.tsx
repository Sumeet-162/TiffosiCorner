
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  source: string;
  url: string;
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
    url: "#"
  },
  {
    id: 2,
    title: "Leclerc: 'Monaco Win Was One of My Most Special Moments'",
    summary: "Charles Leclerc reflects on his emotional home race victory at the Monaco Grand Prix, calling it one of the most special moments of his Formula 1 career so far.",
    date: "2025-05-27",
    imageUrl: "/placeholder.svg",
    source: "Autosport",
    url: "#"
  },
  {
    id: 3,
    title: "Carlos Sainz Set for Contract Extension with Ferrari",
    summary: "Reports suggest that Carlos Sainz is close to finalizing a new multi-year deal with Ferrari, ensuring the team's driver lineup remains stable for the foreseeable future.",
    date: "2025-05-12",
    imageUrl: "/placeholder.svg",
    source: "Motorsport.com",
    url: "#"
  },
  {
    id: 4,
    title: "Ferrari Celebrates 250th F1 Victory",
    summary: "Ferrari reaches a historic milestone with their 250th Formula 1 victory, cementing their status as the most successful team in the sport's history.",
    date: "2025-05-05",
    imageUrl: "/placeholder.svg",
    source: "RacingNews365",
    url: "#"
  },
  {
    id: 5,
    title: "Technical Analysis: How Ferrari's New Floor Design Has Improved Performance",
    summary: "An in-depth look at Ferrari's recent floor redesign and how it has contributed to the team's improved performance in the last three races.",
    date: "2025-04-28",
    imageUrl: "/placeholder.svg",
    source: "The Race",
    url: "#"
  },
  {
    id: 6,
    title: "Ferrari Academy Driver Wins Formula 2 Feature Race",
    summary: "Ferrari Driver Academy member impresses with a dominant victory in the Formula 2 Feature Race, strengthening his case for a future Formula 1 seat.",
    date: "2025-04-21",
    imageUrl: "/placeholder.svg",
    source: "Formula1.com",
    url: "#"
  }
];

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

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
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Ferrari F1 News</h1>
        <p className="text-lg text-muted-foreground">
          Stay updated with the latest Ferrari Formula 1 news
        </p>
      </div>

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
        // News grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map(item => (
            <a 
              key={item.id} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="overflow-hidden h-full transition-shadow hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription>
                    <div className="flex justify-between items-center">
                      <span>{item.source}</span>
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {item.summary}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-12">
        <p className="text-muted-foreground text-sm text-center max-w-2xl">
          This news section showcases sample content for demonstration purposes. 
          In a real implementation, this would pull updates from Formula 1 and Ferrari news sources via APIs.
        </p>
      </div>
    </div>
  );
};

export default News;
