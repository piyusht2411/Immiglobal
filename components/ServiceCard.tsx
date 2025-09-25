import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  price?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  price,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full hover-elevate transition-all duration-300 border-card-border group">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold text-foreground">
            {title}
          </CardTitle>
          <p className="text-muted-foreground">{description}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {price && (
            <div className="text-center py-2">
              <span className="text-2xl font-bold text-primary">{price}</span>
              <span className="text-muted-foreground ml-1">starting from</span>
            </div>
          )}

          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-chart-2 rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            className="w-full mt-4"
            data-testid={`button-learn-more-${title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
