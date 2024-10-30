import { Advantages } from "@/components/Advantages";
import { AllFeatures } from "@/components/AllFeatures";
import CallToAction from "@/components/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import { Feature } from "@/components/Feature";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play Next.js - SaaS Starter Kit and Boilerplate for Next.js",
  description:
    "Free Next.js SaaS Boilerplate and Starter Kit designed and built for SaaS startups. It comes with all necessary integrations, pages, and components you need to launch a feature-rich SaaS websites.",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Feature
        title="Turn Any Web Page into Social Media Content"
        description="Simply paste a link to a web page your audience will love and instantly get ready-to-share posts for Twitter, Facebook, Reddit, and more."
      />
      <Feature
        imagePosition="left"
        title="Turn YouTube Videos into Social Media Content"
        description="Just drop a YouTube link, and effortlessly transform any video into engaging posts for Twitter, Facebook, Reddit, and more."
      />
      <Feature
        imagePosition="right"
        title="Schedule and Post Content in One-Click"
        description="Schedule and publish your content across multiple platforms with a single click, saving time and ensuring your posts reach your audience at the perfect moment."
      />
      <CallToAction />
      <AllFeatures />
      <Advantages />
      <Pricing />
    </main>
  );
}
