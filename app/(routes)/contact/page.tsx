"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactMethods, offices } from "@/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // TODO: Replace with actual form submission
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your immigration journey? Contact our expert
              consultants for personalized guidance and support.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Send us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                          >
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            required
                            data-testid="input-name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            required
                            data-testid="input-email"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium mb-2"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            data-testid="input-phone"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium mb-2"
                          >
                            Target Country
                          </label>
                          <Select
                            name="country"
                            value={formData.country}
                            onValueChange={(value) =>
                              handleInputChange("country", value)
                            }
                          >
                            <SelectTrigger
                              id="country"
                              className="w-full px-3 py-2 border border-input bg-background rounded-md"
                              data-testid="select-country"
                            >
                              <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="canada">Canada</SelectItem>
                              <SelectItem value="australia">
                                Australia
                              </SelectItem>
                              <SelectItem value="germany">Germany</SelectItem>
                              <SelectItem value="usa">USA</SelectItem>
                              <SelectItem value="uk">UK</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium mb-2"
                        >
                          Service Interested In
                        </label>
                        <Select
                          name="service"
                          value={formData.service}
                          onValueChange={(value) =>
                            handleInputChange("service", value)
                          }
                        >
                          <SelectTrigger
                            id="service"
                            className="w-full px-3 py-2 border border-input bg-background rounded-md"
                            data-testid="select-service"
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="express-entry">
                              Express Entry
                            </SelectItem>
                            <SelectItem value="work-permit">
                              Work Permit
                            </SelectItem>
                            <SelectItem value="study-permit">
                              Study Permit
                            </SelectItem>
                            <SelectItem value="business-immigration">
                              Business Immigration
                            </SelectItem>
                            <SelectItem value="family-sponsorship">
                              Family Sponsorship
                            </SelectItem>
                            <SelectItem value="consultation">
                              General Consultation
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          placeholder="Please describe your situation and how we can help..."
                          required
                          data-testid="textarea-message"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        data-testid="button-send-message"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="hover-elevate">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <method.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {method.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-1">
                              {method.description}
                            </p>
                            <p className="text-sm font-medium text-primary">
                              {method.contact}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {method.availability}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Office Locations */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Our Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <Card key={index} className="hover-elevate">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {office.city}
                            </h4>
                            <p className="text-sm text-muted-foreground whitespace-pre-line mb-2">
                              {office.address}
                            </p>
                            <div className="space-y-1">
                              <p className="text-sm">
                                <Phone className="h-3 w-3 inline mr-1" />
                                {office.phone}
                              </p>
                              <p className="text-sm">
                                <Mail className="h-3 w-3 inline mr-1" />
                                {office.email}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
