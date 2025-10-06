"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export function StickyButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Reusable form fields to avoid duplication between mobile/desktop
  function FormFields() {
    return (
      <div className="space-y-4" aria-label="Free assessment form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="firstName" className="text-sm text-foreground">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              required
              className="h-11"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="lastName" className="text-sm text-foreground">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              required
              className="h-11"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className="text-sm text-foreground">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            className="h-11"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* <div className="flex flex-col gap-1">
            <Label className="text-sm text-foreground">Current Country</Label>
            <Select name="residence" required>
              <SelectTrigger
                aria-label="Select current country"
                className="h-[44px]"
                style={{ height: "44px", width: "100%" }}
              >
                <SelectValue placeholder="Where are you currently located?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in">India</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
          <div className="flex flex-col gap-1">
            <Label className="text-sm text-foreground">Dream Destination</Label>
            <Select name="destination" required>
              <SelectTrigger
                aria-label="Select dream destination"
                className="h-11"
                style={{ height: "44px", width: "100%" }}
              >
                <SelectValue placeholder="Where do you want to go?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="nz">New Zealand</SelectItem>
                <SelectItem value="us">United States</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1">
          <Label htmlFor="phone" className="text-sm text-foreground">
            Phone Number
          </Label>
          <div className="flex gap-2">
            <Input
              id="isd"
              name="isd"
              placeholder="+91"
              className="h-11 w-1/5 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
            <Input
              id="phone"
              name="phone"
              placeholder="9876543210"
              inputMode="tel"
              className="h-11"
            />
          </div>
        </div>

        <Button type="submit" className="w-full h-11 text-base">
          Get My Free Assessment
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="">
        <div className="fixed z-50 rotate-[-90deg] left-[-55px] md:top-1/2 top-[22%] -translate-y-1/2 cursor-pointer">
          <Button
            onClick={() => setIsOpen(true)}
            className="shadow-lg cursor-pointer rounded-bl-lg rounded-br-lg"
          >
            Free Assessment
          </Button>
        </div>
      </div>

      {/* <div className="md:hidden fixed bottom-4 left-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full px-6 py-3 shadow-lg"
        >
          Free Assessment
        </Button>
      </div> */}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-fit w-full p-0 overflow-hidden rounded-2xl max-h-[90vh] md:max-h-fit">
          <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] md:max-h-fit overflow-y-auto md:overflow-y-visible">
            <div className="p-6 md:p-8 space-y-4">
              {/* Updated headline with different accent emphasis */}
              <h2 className="text-2xl md:text-3xl font-bold text-pretty">
                <span className="text-foreground">Ready to Start Your</span>{" "}
                <span className="text-primary">Immigration Journey?</span>
              </h2>
              {/* <p className="text-muted-foreground">
                Share your details below and our immigration specialists will
                reach out with personalized guidance tailored to your unique
                situation.
              </p> */}

              <FormFields />
            </div>
            <div className="hidden md:flex flex-col items-center justify-center gap-4 bg-muted/30 p-8">
              {/* Use embedded illustration image */}
              <img
                src="/assets/image/dilaog.jpg"
                alt="Immigration consultant illustration"
                className="w-72 h-auto"
              />
              {/* <div className="relative bg-accent rounded-lg p-4 text-accent-foreground max-w-xs">
                <p className="text-sm">
                  Hi there! I'm Sarah, your immigration advisor. What brings you
                  here today?
                </p>
                <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-accent"></div>
              </div>
              <div className="flex flex-col gap-2 w-full max-w-xs">
                <div className="bg-muted rounded-full px-4 py-2 text-center text-sm">
                  Permanent Residency Options
                </div>
                <div className="bg-muted rounded-full px-4 py-2 text-center text-sm">
                  Partner & Family Reunification
                </div>
                <div className="bg-muted rounded-full px-4 py-2 text-center text-sm">
                  Student Visa Programs
                </div>
                <div className="bg-muted rounded-full px-4 py-2 text-center text-sm">
                  Work & Business Visas
                </div>
              </div> */}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
