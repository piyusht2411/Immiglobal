import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  country: string;
  service: string;
  rating: number;
  testimonial: string;
  avatar?: string;
  delay?: number;
}

export default function TestimonialCard({
  name,
  country,
  service,
  rating,
  testimonial,
  avatar,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full hover-elevate p-6 relative overflow-hidden">
        {/* Quote Icon */}
        <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

        <CardContent className="p-0">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
            "{testimonial}"
          </blockquote>

          {/* Client Info */}
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div>
              <h4
                className="font-semibold text-foreground"
                data-testid={`testimonial-name-${name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {service} • {country}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
