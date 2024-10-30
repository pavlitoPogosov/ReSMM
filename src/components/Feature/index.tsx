import Image from "next/image";

export const Feature = ({
  title,
  description,
  imageSrc,
  imagePosition = "right",
}: {
  title: string;
  description: string;
  imageSrc: string;
  imagePosition?: "left" | "right";
}) => {
  const backgroundColor =
    imagePosition === "left" ? "dark:bg-dark" : "dark:bg-dark-2";

  return (
    <section
      id="about"
      className={`bg-gray-1 pb-8 pt-20 ${backgroundColor} lg:pb-[70px] lg:pt-[120px]`}
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div
            className={`-mx-4 flex flex-wrap items-center ${
              imagePosition === "left" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  {title}
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  {description}
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center px-4 lg:w-1/2">
              <Image
                src={imageSrc}
                alt={title}
                width={500}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
