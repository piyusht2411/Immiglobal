"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactBanner() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Immigration Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance from our immigration consultants. Book your free
            consultation today and take the first step towards your new life
            abroad.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/10 hover:text-white"
              data-testid="button-free-consultation-banner"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 text-red-600 border-white hover:bg-white/10 backdrop-blur-sm hover:text-white"
              data-testid="button-email-us"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 text-red-600 border-white hover:bg-white/10 backdrop-blur-sm hover:text-white"
              data-testid="button-live-chat"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Live Chat
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 text-sm text-primary-foreground/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Available 24/7 • No obligation • Expert advice
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
