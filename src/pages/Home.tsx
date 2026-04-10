import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Moon, Sun, Compass, ArrowRight } from "lucide-react";
import { Mandala } from "@/components/Mandala";
import { SolarSystem } from "@/components/SolarSystem";
import headshotImage from "@/assets/image.png";

const features = [
	{
		icon: <Sun className="h-8 w-8 text-primary" />,
		title: "Birth Chart Analysis",
		description:
			"Deep dive into your Kundli to understand your inherent strengths and life purpose.",
	},
	{
		icon: <Moon className="h-8 w-8 text-secondary" />,
		title: "Dasha & Transit",
		description:
			"Navigate current planetary cycles and prepare for upcoming life transitions.",
	},
	{
		icon: <Compass className="h-8 w-8 text-accent" />,
		title: "Career & Wealth",
		description:
			"Align your professional path with your cosmic design for abundance and fulfillment.",
	},
];

export const Home = () => {
	return (
		<div className="relative overflow-hidden">
			{/* Hero Section */}
			<section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
				<SolarSystem />
				<Mandala className="absolute -top-20 -right-20 w-[600px] h-[600px]" />
				<Mandala className="absolute -bottom-40 -left-40 w-[500px] h-[500px]" />

				<div className="container mx-auto px-4 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="text-left"
						>
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 border border-primary/20">
								<Star className="h-4 w-4 fill-primary" />
								<span>Ancient Wisdom for Modern Life</span>
							</div>
							<h1 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1] text-secondary">
								Unlock Your{" "}
								<span className="text-primary italic">Cosmic Blueprint</span>
							</h1>
							<p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
								Discover the profound insights of Vedic Astrology with Dr. Sekar
								Chivukula, PhD. Navigate your life's journey with clarity, purpose,
								and spiritual alignment.
							</p>
							<div className="flex flex-col sm:flex-row items-center gap-4">
								<Button
									nativeButton={false}
									render={<Link to="/booking" />}
									size="lg"
									className="bg-primary hover:bg-primary/90 text-lg px-8 h-14 rounded-full"
								>
									Book a Consultation
								</Button>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.9, x: 30 }}
							animate={{ opacity: 1, scale: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative hidden lg:block"
						>
							<div className="relative z-10 rounded-3xl overflow-hidden p-2 bg-transparent">
								<div className="relative">
									<img
										src={headshotImage}
										alt="Dr. Sekar Chivukula, PhD"
										className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]"
										referrerPolicy="no-referrer"
									/>
									<div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_100px_rgba(255,255,255,0.5)] pointer-events-none" />
								</div>
							</div>
							{/* Decorative elements around headshot */}
							<div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse" />
							<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 bg-white relative">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-serif mb-4">
							Our Sacred Offerings
						</h2>
						<div className="h-1 w-20 bg-primary mx-auto rounded-full" />
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
							>
								<Card className="h-full hover:shadow-2xl transition-all duration-500 border-none bg-background/50 group overflow-hidden">
									<CardContent className="p-8 relative">
										<div className="mb-6 p-4 rounded-2xl bg-white shadow-sm inline-block group-hover:scale-110 transition-transform duration-500">
											{feature.icon}
										</div>
										<h3 className="text-2xl font-serif mb-4 text-secondary">
											{feature.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed mb-6">
											{feature.description}
										</p>
										<Link
											to="/booking"
											className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
										>
											Book Now{" "}
											<ArrowRight className="h-4 w-4" />
										</Link>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Reviews Section */}
			<section className="py-24 bg-background relative overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-serif mb-4">
							Voices of the Soul
						</h2>
						<p className="text-muted-foreground">
							What our community says about their journey with Sekar
						</p>
						<div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								name: "Sarah Jenkins",
								role: "Entrepreneur",
								content:
									"The 30-minute session was incredibly dense with insight. Dr. Sekar pinpointed my career challenges with frightening accuracy.",
								rating: 5,
							},
							{
								name: "Rajesh Kumar",
								role: "Software Engineer",
								content:
									"I've been following Dr. Sekar on YouTube for years, but a personal reading changed everything. Highly recommended for clarity.",
								rating: 5,
							},
							{
								name: "Elena Rodriguez",
								role: "Artist",
								content:
									"Vedic astrology felt intimidating until I met Dr. Sekar. He explains things with such warmth and modern context.",
								rating: 5,
							},
						].map((review, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
							>
								<Card className="h-full border-none shadow-md hover:shadow-xl transition-all p-8 bg-white">
									<div className="flex gap-1 mb-4">
										{[...Array(review.rating)].map((_, i) => (
											<Star
												key={i}
												className="h-4 w-4 fill-accent text-accent"
											/>
										))}
									</div>
									<p className="text-secondary/80 italic mb-6 leading-relaxed">
										"{review.content}"
									</p>
									<div>
										<p className="font-bold text-secondary">{review.name}</p>
										<p className="text-xs text-muted-foreground uppercase tracking-widest">
											{review.role}
										</p>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Quote Section */}
			<section className="py-24 bg-secondary text-white relative overflow-hidden">
				<Mandala className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5" />
				<div className="container mx-auto px-4 relative z-10 text-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="max-w-4xl mx-auto"
					>
						<Star className="h-12 w-12 mx-auto mb-8 text-primary fill-primary opacity-50" />
						<blockquote className="text-3xl md:text-5xl font-serif italic leading-tight mb-12">
							"The stars do not compel us, they incline us. Understanding your
							cosmic design is the first step toward true freedom."
						</blockquote>
						<cite className="text-xl font-medium text-primary not-italic">
							— Dr. Sekar Chivukula, PhD
						</cite>
					</motion.div>
				</div>
			</section>
		</div>
	);
};
