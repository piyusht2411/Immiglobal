import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FunctionComponentElement } from "react";
import { Props } from "country-flag-icons/react/3x2";

interface VisaCardProps {
  visa: {
    title: string;
    approvalTime: string;
    keyBenefits: string[];
    rating: number;
    description: string;
    category?: string;
    approvedVisas?: string;
    isPopular?: boolean;
  };
  countryFlag : FunctionComponentElement<Props> | null
  backgroundImage?: StaticImageData | undefined;
}

export default function VisaCard({
  visa,
  countryFlag,
  backgroundImage,
}: VisaCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="h-4 w-4 fill-yellow-400/50 text-yellow-400"
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden hover-elevate transition-all duration-500 border-0 shadow-lg relative group">
        {/* Background Image */}
        <div className="relative h-48 overflow-hidden">
          {backgroundImage ? (
            <Image
              src={backgroundImage}
              alt="Country background"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
          )}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Country Flag */}
          <div className="absolute top-4 right-4 w-12 h-8 rounded shadow-md flex items-center justify-center text-lg">
            {countryFlag}
          </div>

          {/* Most Approved Badge */}
          {visa.isPopular && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-chart-2 hover:bg-chart-2 text-white font-medium px-3 py-1">
                <Award className="h-3 w-3 mr-1" />
                Most Approved!
              </Badge>
            </div>
          )}

          {/* Category Badge */}
          {visa.category && (
            <div className="absolute top-16 left-4">
              <Badge
                variant="secondary"
                className="bg-white/90 text-foreground font-medium"
              >
                {visa.category}
              </Badge>
            </div>
          )}

          {/* Rating */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold text-foreground">
              {visa.rating}
            </span>
          </div>

          {/* Approved Visas Count */}
          {visa.approvedVisas && (
            <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground rounded-full px-3 py-1">
              <span className="text-sm font-bold">{visa.approvedVisas}</span>
            </div>
          )}
        </div>

        <CardHeader className="pb-3">
          <h3 className="text-lg font-bold text-foreground leading-tight">
            {visa.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-chart-2 font-medium">
            <Clock className="h-4 w-4" />
            Fastest Approval {visa.approvalTime}
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Key Benefits */}
          <ul className="space-y-2">
            {visa.keyBenefits.slice(0, 3).map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle className="h-3 w-3 text-chart-2 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="pt-0">
          <Button
            className="w-full bg-primary hover:bg-primary/90 font-medium"
            data-testid={`button-learn-more-${visa.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
