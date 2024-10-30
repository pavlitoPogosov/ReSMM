import React from "react";
import SectionTitle from "../Common/SectionTitle";
import { webPageFeatures, youtubeFeatures } from "./featuresData";
import { ArrowRight } from "../icons/ArrowRight";

export const AllFeatures: React.FC = () => {
  return (
    <section
      id="features"
      className="bg-dark:2 pb-8 pt-20 lg:pb-[70px] lg:pt-[120px] "
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="All Features"
          title="Explore All ReSMM Features"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-20">
          <div>
            <h4 className="mb-6 text-2xl font-bold text-white">
              Turn Webpage Into Content
            </h4>

            {webPageFeatures.map((feature, index) => (
              <div
                key={index}
                className="mt-4 rounded-lg bg-dark px-6 py-4 shadow-md"
              >
                <div className="mb-4 text-xl font-semibold text-white">
                  {feature.label}
                </div>

                <div className="flex items-center space-x-4 text-white">
                  <div className="text-white">{feature.iconStart}</div>
                  <ArrowRight />
                  <div className="text-white">{feature.iconEnd}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="mb-6 text-2xl font-bold text-white">
              Turn YouTube Video Into Content
            </h4>

            {youtubeFeatures.map((feature, index) => (
              <div
                key={index}
                className="mt-4 rounded-lg bg-dark px-6 py-4 shadow-md"
              >
                <div className="mb-4 text-xl font-semibold text-white">
                  {feature.label}
                </div>

                <div className="flex items-center space-x-4 text-white">
                  <div className="text-white">{feature.iconStart}</div>
                  <ArrowRight />
                  <div className="text-white">{feature.iconEnd}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
