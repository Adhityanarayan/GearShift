import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Search Smarter, Not Harder with Selectify"
        />

        <div className="flex flex-wrap gap-5 mb-5">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[18rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[8.5rem] p-[1.5rem] pointer-events-none">
                <h5 className="mb-5">{item.title}</h5>
                {/* <p className="body-2 mb-6 text-n-3">{item.text}</p> */}
                <div className="flex items-center mt-1">
                  <img
                    src={item.iconUrl}
                    width={36}
                    height={36}
                    alt={item.title}
                  />
                  <p className="ml-auto pl-3 font-code text-[0.75rem] font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  {/* <Arrow className="p-0" /> */}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
