import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const navLinks = [
	{ name: "Home", path: "/" },
	{ name: "YouTube", path: "/youtube" },
	{ name: "About", path: "/about" },
	{ name: "Booking", path: "/booking" },
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<Link to="/" className="flex items-center gap-2 group">
					<motion.div
						whileHover={{ rotate: 180 }}
						transition={{ duration: 0.5 }}
						className="text-primary"
					>
						<Star className="h-6 w-6 fill-primary" />
					</motion.div>
					<span className="font-serif text-xl font-bold tracking-tight text-secondary">
						Dr. Sekar{" "}
						<span className="text-primary">Chivukula</span>
					</span>
				</Link>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							className={`text-sm font-medium transition-colors hover:text-primary ${
								location.pathname === link.path
									? "text-primary"
									: "text-muted-foreground"
							}`}
						>
							{link.name}
						</Link>
					))}
					<Button
						nativeButton={false}
						render={<Link to="/booking" />}
						className="bg-primary hover:bg-primary/90"
					>
						Book Now
					</Button>
				</div>

				{/* Mobile Nav */}
				<div className="md:hidden">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsOpen((open) => !open)}
						aria-label={isOpen ? "Close menu" : "Open menu"}
					>
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</Button>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden border-t border-border bg-background/98 px-4 pb-4 pt-2 shadow-xl">
					<div className="flex flex-col gap-4">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								onClick={() => setIsOpen(false)}
								className={`text-lg font-medium transition-colors hover:text-primary ${
									location.pathname === link.path
										? "text-primary"
										: "text-muted-foreground"
								}`}
							>
								{link.name}
							</Link>
						))}
						<Button
							nativeButton={false}
							render={<Link to="/booking" />}
							className="bg-primary hover:bg-primary/90 w-full mt-2"
							onClick={() => setIsOpen(false)}
						>
							Book Now
						</Button>
					</div>
				</div>
			)}
		</nav>
	);
};
