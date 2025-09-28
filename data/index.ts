import canadaImg from "@/public/assets/image/canada_toronto_skyli_b51634fd.jpg";
import germanyImg from "@/public/assets/image/germany_landmarks_br_8b4ad405.jpg";
import australiaImg from "@/public/assets/image/australia_sydney_ope_496c87c2.jpg";
import usaImg from "@/public/assets/image/usa_new_york_city_sk_8eb051af.jpg";
import ukImg from "@/public/assets/image/uk_london_big_ben_we_480c214e.jpg";
import testimonialPhotos from "@/public/assets/image/Client_testimonial_photos_f8e7184a.png";
import teamPhoto from "@/public/assets/image/Immigration_team_photo_50e13447.png";
import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";
import {
  Users,
  Briefcase,
  GraduationCap,
  Building,
  Heart,
  FileText,
  Scale,
  Clock,
  Award,
  Globe,
} from "lucide-react";
import Germany from "country-flag-icons/react/3x2/DE";
import UnitedStates from "country-flag-icons/react/3x2/US";
import Canada from "country-flag-icons/react/3x2/CA";
import Australia from "country-flag-icons/react/3x2/AU";
import UnitedKingdom from "country-flag-icons/react/3x2/GB";

export const countries = [
  { id: "canada", name: "Canada", flag: Germany, image: canadaImg },
  { id: "germany", name: "Germany", flag: UnitedStates, image: germanyImg },
  { id: "australia", name: "Australia", flag: Canada, image: australiaImg },
  { id: "usa", name: "USA", flag: Australia, image: usaImg },
  { id: "uk", name: "UK", flag: UnitedKingdom, image: ukImg },
];

export const visaPrograms = {
  canada: [
    {
      title: "Express Entry Program",
      approvalTime: "6-8 Months",
      keyBenefits: [
        "Permanent Residency",
        "Work Authorization",
        "Path to Citizenship",
      ],
      rating: 4.8,
      description: "Fast-track immigration for skilled workers",
      category: "Skilled Migration",
      approvedVisas: "700+ Approved Visas",
      isPopular: true,
    },
    {
      title: "Provincial Nominee Program",
      approvalTime: "12-18 Months",
      keyBenefits: [
        "Provincial Support",
        "Job Opportunities",
        "Family Sponsorship",
      ],
      rating: 4.6,
      description: "Province-specific immigration pathway",
      category: "Provincial Program",
      approvedVisas: "400+ Approved Visas",
      isPopular: false,
    },
    {
      title: "Canadian Experience Class",
      approvalTime: "4-6 Months",
      keyBenefits: [
        "Prior Work Experience",
        "Language Advantage",
        "Quick Processing",
      ],
      rating: 4.9,
      description: "For candidates with Canadian work experience",
    },
    {
      title: "Federal Skilled Worker",
      approvalTime: "6-12 Months",
      keyBenefits: ["Education Points", "Language Skills", "Work Experience"],
      rating: 4.7,
      description: "Merit-based skilled worker program",
    },
  ],
  germany: [
    {
      title: "Germany Opportunity Card",
      approvalTime: "1-2 Months",
      keyBenefits: ["Job Search Visa", "Point-based System", "Fast Processing"],
      rating: 4.9,
      description: "New points-based job seeker visa",
      category: "Skilled Migration",
      approvedVisas: "600+ Approved Visas",
      isPopular: true,
    },
    {
      title: "EU Blue Card",
      approvalTime: "2-4 Months",
      keyBenefits: [
        "Permanent Residency Path",
        "Family Reunion",
        "EU Mobility",
      ],
      rating: 4.7,
      description: "For highly qualified professionals",
    },
    {
      title: "Skilled Immigration Act",
      approvalTime: "3-6 Months",
      keyBenefits: [
        "Vocational Training",
        "Recognition Process",
        "Work Authorization",
      ],
      rating: 4.5,
      description: "Comprehensive skilled worker program",
    },
    {
      title: "Startup Visa",
      approvalTime: "4-8 Months",
      keyBenefits: [
        "Business Innovation",
        "Investment Opportunities",
        "Residence Permit",
      ],
      rating: 4.6,
      description: "For innovative entrepreneurs",
    },
  ],
  australia: [
    {
      title: "Skilled Independent Visa",
      approvalTime: "8-12 Months",
      keyBenefits: [
        "Points-based",
        "Permanent Residency",
        "No Sponsor Required",
      ],
      rating: 4.8,
      description: "Independent skilled migration pathway",
    },
    {
      title: "Employer Nomination Scheme",
      approvalTime: "6-10 Months",
      keyBenefits: ["Employer Sponsored", "Job Security", "PR Pathway"],
      rating: 4.7,
      description: "Employer-sponsored permanent visa",
    },
    {
      title: "Regional Skilled Migration",
      approvalTime: "10-14 Months",
      keyBenefits: [
        "Regional Opportunities",
        "Lower Competition",
        "Bonus Points",
      ],
      rating: 4.6,
      description: "Regional area sponsored migration",
    },
    {
      title: "Global Talent Visa",
      approvalTime: "3-6 Months",
      keyBenefits: [
        "Priority Processing",
        "Exceptional Talent",
        "Fast-track PR",
      ],
      rating: 4.9,
      description: "For globally recognized talent",
    },
  ],
  usa: [
    {
      title: "EB-1 Extraordinary Ability",
      approvalTime: "8-12 Months",
      keyBenefits: ["No Labor Certification", "Self-petition", "Green Card"],
      rating: 4.8,
      description: "For individuals with extraordinary ability",
    },
    {
      title: "H-1B Specialty Occupation",
      approvalTime: "3-6 Months",
      keyBenefits: ["Employer Sponsored", "Renewable", "Green Card Path"],
      rating: 4.5,
      description: "Specialty occupation work visa",
    },
    {
      title: "L-1 Intracompany Transfer",
      approvalTime: "2-4 Months",
      keyBenefits: ["Company Transfer", "Dual Intent", "Fast Processing"],
      rating: 4.7,
      description: "For intracompany transferees",
    },
    {
      title: "EB-5 Investor Visa",
      approvalTime: "18-36 Months",
      keyBenefits: ["Investment-based", "Green Card", "Family Inclusion"],
      rating: 4.4,
      description: "Investment-based immigration program",
    },
  ],
  uk: [
    {
      title: "Skilled Worker Visa",
      approvalTime: "3-8 Weeks",
      keyBenefits: ["Job Offer Required", "ILR Pathway", "Family Sponsorship"],
      rating: 4.7,
      description: "For skilled workers with job offers",
    },
    {
      title: "Global Talent Visa",
      approvalTime: "3-8 Weeks",
      keyBenefits: ["No Job Offer", "Exceptional Talent", "Settlement Route"],
      rating: 4.8,
      description: "For leaders in technology, sciences, and arts",
    },
    {
      title: "Innovator Founder Visa",
      approvalTime: "3-8 Weeks",
      keyBenefits: ["Business Innovation", "Investment", "Settlement Path"],
      rating: 4.6,
      description: "For innovative business founders",
    },
    {
      title: "Graduate Visa",
      approvalTime: "8 Weeks",
      keyBenefits: ["UK Study", "Work Permission", "No Sponsor"],
      rating: 4.5,
      description: "For recent UK university graduates",
    },
  ],
};

export const footerLinks = {
  services: [
    { name: "Express Entry", href: "/services/express-entry" },
    { name: "Provincial Nominee", href: "/services/pnp" },
    { name: "Work Permits", href: "/services/work-permits" },
    { name: "Study Permits", href: "/services/study-permits" },
    { name: "Business Immigration", href: "/services/business" },
  ],
  countries: [
    { name: "Canada Immigration", href: "/countries/canada" },
    { name: "Australia Immigration", href: "/countries/australia" },
    { name: "Germany Immigration", href: "/countries/germany" },
    { name: "USA Immigration", href: "/countries/usa" },
    { name: "UK Immigration", href: "/countries/uk" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
    { name: "ICCRC Compliance", href: "/compliance" },
  ],
};

export const popularDestinations = [
  {
    country: "Canada",
    flag: Canada,
    image: canadaImg,
    totalVisas: "2,500+",
    successRate: "95%",
    avgProcessing: "6-8 months",
    trending: true,
    programs: ["Express Entry", "PNP", "Family Sponsorship"],
    description: "Most popular destination for skilled workers",
  },
  {
    country: "Germany",
    flag: Germany,
    image: germanyImg,
    totalVisas: "1,800+",
    successRate: "92%",
    avgProcessing: "2-4 months",
    trending: true,
    programs: ["Opportunity Card", "EU Blue Card", "Job Seeker Visa"],
    description: "Fastest growing immigration destination",
  },
  {
    country: "Australia",
    flag: Australia,
    image: australiaImg,
    totalVisas: "1,200+",
    successRate: "89%",
    avgProcessing: "8-12 months",
    trending: false,
    programs: ["Skilled Independent", "Employer Sponsored", "Regional"],
    description: "Points-based skilled migration system",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    country: "Canada",
    program: "Express Entry",
    rating: 5,
    text: "Immiglobal Services made my Canadian immigration dream come true. Their expert guidance through the Express Entry process was invaluable. I received my PR within 6 months!",
    avatar: testimonialPhotos,
  },
  {
    name: "Michael Schmidt",
    country: "Germany",
    program: "Opportunity Card",
    rating: 5,
    text: "The team helped me navigate the new Germany Opportunity Card program seamlessly. Their knowledge of the latest immigration policies is exceptional. Highly recommended!",
    avatar: testimonialPhotos,
  },
  {
    name: "Priya Patel",
    country: "Australia",
    program: "Skilled Independent",
    rating: 5,
    text: "Outstanding service from start to finish. They helped me understand the points system and optimize my application. Now I am a proud Australian PR holder!",
    avatar: testimonialPhotos,
  },
  {
    name: "James Wilson",
    country: "UK",
    program: "Global Talent Visa",
    rating: 5,
    text: "Professional, knowledgeable, and always responsive. They secured my Global Talent Visa in record time. Could not have asked for better support.",
    avatar: testimonialPhotos,
  },
  {
    name: "Maria Rodriguez",
    country: "USA",
    program: "EB-1 Visa",
    rating: 5,
    text: "Immiglobal Services expertise in US immigration is unmatched. They guided me through the complex EB-1 process and I got approved on the first try.",
    avatar: testimonialPhotos,
  },
];

export const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Senior Immigration Consultant",
    credentials: "RCIC, MBA",
    experience: "10+ years",
    specialties: "Express Entry, PNP Programs",
    avatar: teamPhoto.src,
  },
  {
    name: "Michael Chen",
    role: "Immigration Lawyer",
    credentials: "JD, RCIC",
    experience: "15+ years",
    specialties: "Complex Cases, Appeals",
    avatar: teamPhoto.src,
  },
  {
    name: "Emily Rodriguez",
    role: "Document Specialist",
    credentials: "RCIC",
    experience: "8+ years",
    specialties: "Document Verification, Translation",
    avatar: teamPhoto.src,
  },
  {
    name: "David Kumar",
    role: "Business Immigration Expert",
    credentials: "RCIC, CPA",
    experience: "12+ years",
    specialties: "Investor Programs, Start-up Visas",
    avatar: teamPhoto.src,
  },
];

export const values = [
  {
    icon: Users,
    title: "Client-Centered",
    description:
      "Your success is our priority. We provide personalized solutions tailored to your unique situation.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards of professional service and stay updated with latest immigration policies.",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description:
      "Our team has extensive knowledge of immigration systems across multiple countries and jurisdictions.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We believe in honest communication, transparent processes, and ethical business practices.",
  },
];

export const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Speak with our experts",
    contact: "+1 (555) 123-4567",
    availability: "Mon-Fri 9AM-6PM EST",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us your questions",
    contact: "info@immiglobalservices.com",
    availability: "Response within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team",
    contact: "Available on website",
    availability: "Mon-Fri 9AM-6PM EST",
  },
  {
    icon: Calendar,
    title: "Book Consultation",
    description: "Schedule a meeting",
    contact: "Online booking",
    availability: "Same day appointments",
  },
];

export const offices = [
  {
    city: "Toronto",
    address: "123 Bay Street, Suite 1500\nToronto, ON M5J 2N8",
    phone: "+1 (416) 123-4567",
    email: "toronto@immiglobalservices.com",
  },
  {
    city: "Vancouver",
    address: "456 Granville Street, Suite 800\nVancouver, BC V6C 1V5",
    phone: "+1 (604) 123-4567",
    email: "vancouver@immiglobalservices.com",
  },
  {
    city: "New York",
    address: "789 Broadway, Suite 1200\nNew York, NY 10003",
    phone: "+1 (212) 123-4567",
    email: "newyork@immiglobalservices.com",
  },
];

export const services = [
  {
    title: "Express Entry",
    description:
      "Fast-track immigration to Canada through the Express Entry system",
    icon: Users,
    price: "$1,299",
    features: [
      "Comprehensive eligibility assessment",
      "Profile optimization strategies",
      "Document preparation guidance",
      "Application submission support",
      "Post-submission monitoring",
    ],
  },
  {
    title: "Work Permits",
    description: "Obtain work authorization for your target country",
    icon: Briefcase,
    price: "$899",
    features: [
      "Job offer validation",
      "LMIA application support",
      "Work permit application",
      "Family member permits",
      "Renewal assistance",
    ],
  },
  {
    title: "Study Permits",
    description: "Student visa applications for international education",
    icon: GraduationCap,
    price: "$699",
    features: [
      "Institution selection guidance",
      "Letter of acceptance review",
      "Financial documentation",
      "Study permit application",
      "Post-graduation work permits",
    ],
  },
  {
    title: "Business Immigration",
    description: "Investment and entrepreneur visa programs",
    icon: Building,
    price: "$2,499",
    features: [
      "Investment program selection",
      "Business plan development",
      "Due diligence support",
      "Application preparation",
      "Compliance monitoring",
    ],
  },
  {
    title: "Family Sponsorship",
    description: "Reunite with your loved ones through family sponsorship",
    icon: Heart,
    price: "$1,199",
    features: [
      "Sponsorship eligibility assessment",
      "Relationship documentation",
      "Financial requirement analysis",
      "Application preparation",
      "Interview preparation",
    ],
  },
  {
    title: "Document Services",
    description: "Professional document preparation and translation",
    icon: FileText,
    price: "$299",
    features: [
      "Document authentication",
      "Certified translations",
      "Notarization services",
      "Educational credential assessment",
      "Police clearance assistance",
    ],
  },
  {
    title: "Legal Representation",
    description: "Professional legal support for complex cases",
    icon: Scale,
    price: "$1,999",
    features: [
      "Immigration appeals",
      "Judicial reviews",
      "Complex case analysis",
      "Court representation",
      "Legal consultation",
    ],
  },
  {
    title: "Urgent Processing",
    description: "Fast-track services for time-sensitive applications",
    icon: Clock,
    price: "$599",
    features: [
      "Priority case handling",
      "Expedited document review",
      "24/7 support availability",
      "Rush application submission",
      "Emergency consultation",
    ],
  },
];

export const testimonialSecond = [
  {
    name: "Sarah Johnson",
    country: "Canada",
    service: "Canada PR",
    rating: 5,
    testimonial:
      "Immiglobal made my dream of moving to Canada a reality. Their expert guidance through the Express Entry process was invaluable.",
  },
  {
    name: "Michael Chen",
    country: "Australia",
    service: "Study Abroad",
    rating: 5,
    testimonial:
      "Outstanding service for my student visa application. They helped me choose the right university and guided me through every step.",
  },
  {
    name: "Priya Sharma",
    country: "United Kingdom",
    service: "Work Visa",
    rating: 5,
    testimonial:
      "The team at Immiglobal secured my UK work visa efficiently. Their attention to detail gave me confidence throughout the process.",
  },
  {
    name: "Sarah Johnson",
    country: "Canada",
    service: "Canada PR",
    rating: 5,
    testimonial:
      "Immiglobal made my dream of moving to Canada a reality. Their expert guidance through the Express Entry process was invaluable.",
  },
  {
    name: "Michael Chen",
    country: "Australia",
    service: "Study Abroad",
    rating: 5,
    testimonial:
      "Outstanding service for my student visa application. They helped me choose the right university and guided me through every step.",
  },
  {
    name: "Priya Sharma",
    country: "United Kingdom",
    service: "Work Visa",
    rating: 5,
    testimonial:
      "The team at Immiglobal secured my UK work visa efficiently. Their attention to detail gave me confidence throughout the process.",
  },
];
