import SectionTitle from "../Common/SectionTitle";
import featuresData from "./featuresData";

export const Advantages = () => {
  return (
    <section
      id="advantages"
      className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <SectionTitle subtitle="Advantages" title="Why You Should Use ReSMM?" />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <div key={i} className="w-full px-6 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
                <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
                  <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                  {feature.title}
                </h3>
                <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
                  {feature.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
