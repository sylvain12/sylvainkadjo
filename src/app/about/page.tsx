import { Metadata } from "next";
import React from "react";
import AboutContactComponent from "./components/about-contact";
import AboutInfoComponent from "./components/about-info";
import NewsletterComponent from "@/components/newsletter";

export const metadata: Metadata = {
  title: "About - SK",
};

export default function AboutPage() {
  return (
    <div className="about">
      <AboutInfoComponent />
      <AboutContactComponent />
      <NewsletterComponent />
    </div>
  );
}
