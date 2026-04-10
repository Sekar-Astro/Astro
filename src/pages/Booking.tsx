import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock, Globe, Info } from "lucide-react";

export const Booking = () => {
  return (
    <div className="py-24 mandala-bg min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif mb-6 text-secondary">Schedule Your Session</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select a time that works for you. All consultations are conducted via Zoom. 
                You will receive a link and preparation instructions after booking.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif text-secondary mb-6 flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    Before You Book
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-primary/10">
                        <CalendarIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary">Accurate Birth Data</p>
                        <p className="text-sm text-muted-foreground">Please have your exact birth date, time, and place ready.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-primary/10">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary">Preparation</p>
                        <p className="text-sm text-muted-foreground">Think of 3 specific questions or areas of focus for our session.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-primary/10">
                        <Globe className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary">Time Zone</p>
                        <p className="text-sm text-muted-foreground">The calendar automatically detects your local time zone.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="p-8 rounded-3xl bg-secondary text-white">
                <p className="italic text-lg mb-4">"A session with Dr. Sekar is like having a cosmic mirror held up to your soul. Truly transformative."</p>
                <p className="text-primary font-medium">— Priya S., London</p>
              </div>
            </div>

            {/* Calendar Embed */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-2xl overflow-hidden bg-white h-[70vh] min-h-[650px] lg:h-[800px]">
                <CardContent className="p-0 h-full">
                  <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qVAFDAA6CHd_1Wxm2ePhHGBnxtnkfVBVI_VMVMTs09JlxMVC4D69IMpP7aylqi1BathGxBfaq?gv=true" 
                    style={{ border: 0, minHeight: '650px' }} 
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    title="Google Calendar Appointment Schedule"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
