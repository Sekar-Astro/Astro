import { motion } from "motion/react";
import { Star, Award, BookOpen, Heart } from "lucide-react";

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif mb-8">Dr. Sekar <span className="text-primary italic">Chivukula</span></h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                A lifelong student of the cosmos, Dr. Sekar Chivukula, PhD combines traditional Vedic scholarship 
                with a modern understanding of psychology and human potential.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Award className="text-primary h-6 w-6" />
                  <span className="font-medium">20+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="text-primary h-6 w-6" />
                  <span className="font-medium">Vedic Scholar</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden vedic-border p-2">
                <img 
                  src="https://picsum.photos/seed/astrologer/800/800" 
                  alt="Dr. Sekar Chivukula, PhD" 
                  className="w-full h-full object-cover rounded-2xl [mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-2xl hidden md:block">
                <Star className="h-8 w-8 text-white fill-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-stone mx-auto">
              <h2 className="text-4xl font-serif text-secondary mb-8 text-center">The Journey of Wisdom</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Dr. Sekar's journey into Vedic Astrology began in the ancient temples of South India, 
                where he was introduced to the sacred texts by his grandfather. Over the decades, 
                he has refined his practice, bridging the gap between ancient Sanskrit verses 
                and the complexities of 21st-century life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                His approach is not just about prediction, but about empowerment. By understanding 
                the karmic patterns revealed in the birth chart, Dr. Sekar helps his clients make 
                conscious choices that lead to greater harmony and success.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <div className="p-8 rounded-3xl bg-background border border-primary/10">
                  <Heart className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-serif text-secondary mb-4">Philosophy</h3>
                  <p className="text-muted-foreground">
                    "Astrology is a map, not a destination. My goal is to give you the tools 
                    to navigate your own path with confidence."
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-background border border-primary/10">
                  <Star className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-serif text-secondary mb-4">Methodology</h3>
                  <p className="text-muted-foreground">
                    Utilizing Parashara and Jaimini systems alongside modern psychological 
                    insights for a holistic consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
