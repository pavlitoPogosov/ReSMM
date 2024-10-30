import { Advantages } from "@/components/Advantages";
import { AllFeatures } from "@/components/AllFeatures";
import CallToAction from "@/components/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import { Feature } from "@/components/Feature";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { WaitListModal } from "@/components/WaitListModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReSMM - Create High-Quality Posts for Social Media Fast!",
  description:
    "Transform any web page or YouTube video into ready-to-publish content for Twitter, Facebook, Reddit, and more.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <WaitListModal />
        <ScrollUp />
        <Hero />
        <Feature
          imageSrc="/images/features/web.png"
          title="Turn Any Web Page into Social Media Content"
          description="Simply paste a link to a web page your audience will love and instantly get ready-to-share posts for Twitter, Facebook, Reddit, and more."
        />
        <Feature
          imageSrc="/images/features/youtube.png"
          imagePosition="left"
          title="Turn YouTube Videos into Social Media Content"
          description="Just drop a YouTube link, and effortlessly transform any video into engaging posts for Twitter, Facebook, Reddit, and more."
        />
        <Feature
          imageSrc="/images/features/scheduler.png"
          imagePosition="right"
          title="Schedule and Post Content in One-Click"
          description="Schedule and publish your content across multiple platforms with a single click, saving time and ensuring your posts reach your audience at the perfect moment."
        />
        <CallToAction />
        <AllFeatures />
        <Advantages />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
