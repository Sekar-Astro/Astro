import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube as YoutubeIcon, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    id: "1",
    title: "Understanding Saturn's Transit in 2026",
    thumbnail: "https://picsum.photos/seed/saturn/800/450",
    views: "12K views",
    date: "2 weeks ago"
  },
  {
    id: "2",
    title: "Vedic Astrology for Beginners: The 12 Houses",
    thumbnail: "https://picsum.photos/seed/houses/800/450",
    views: "45K views",
    date: "1 month ago"
  },
  {
    id: "3",
    title: "How to Read Your Own Kundli Chart",
    thumbnail: "https://picsum.photos/seed/kundli/800/450",
    views: "89K views",
    date: "3 months ago"
  },
  {
    id: "4",
    title: "The Power of Mantras in Daily Life",
    thumbnail: "https://picsum.photos/seed/mantra/800/450",
    views: "23K views",
    date: "4 months ago"
  }
];

export const YouTube = () => {
  return (
    <div className="py-24 mandala-bg min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 text-red-600 mb-4">
              <YoutubeIcon className="h-8 w-8 fill-red-600" />
              <span className="font-bold tracking-wider uppercase text-sm">Official Channel</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-secondary">Vedic Wisdom on <span className="text-red-600">YouTube</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join our community of over 50,000 seekers. We share weekly insights on planetary transits, 
              spiritual practices, and ancient Vedic philosophy tailored for the modern world.
            </p>
          </motion.div>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 h-14 px-8 rounded-full text-lg gap-2">
            Subscribe Now <ExternalLink className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <Play className="h-8 w-8 text-red-600 fill-red-600 ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-secondary mb-3 group-hover:text-red-600 transition-colors">{video.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{video.views}</span>
                    <span>•</span>
                    <span>{video.date}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-muted-foreground mb-8 italic">"Dr. Sekar's videos have a way of making complex astrology feel so simple and applicable."</p>
          <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 h-12 px-8 rounded-full">
            View All Videos
          </Button>
        </div>
      </div>
    </div>
  );
};
