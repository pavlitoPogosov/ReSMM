"use client";
import SectionTitle from "../Common/SectionTitle";
import { PricingCard } from "./PricingCard";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-dark:2 relative z-20 overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            // subtitle="Pricing"
            title="Pricing"
            paragraph="Join the Waitlist now to get the first month for free!"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <PricingCard />
        </div>

        {/* <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}     
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;
