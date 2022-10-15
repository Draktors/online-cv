import { FC } from "react";

import { IntroInfoType } from "../data/textIntro";
import { ProgressBar } from "./progressBar";

type updateDataIndexType = { updateDataIndex: () => void };

export const AnimateIntroduction: FC<IntroInfoType & updateDataIndexType> = ({
  title,
  subtitle,
  text,
  updateDataIndex,
}) => (
  <div className="w-full lg:w-1/3 mb-8 lg:mb-10" key={title}>
    <h2 className="mb-1">
      <div
        className="animate-wiggle text-2xl font-bold mb-1"
        style={{ transformOrigin: "left center" }}
      >
        {title}
      </div>
      <div
        className="text-4xl font-bold animate-wiggleSlow"
        style={{ transformOrigin: "left center" }}
      >
        {subtitle}
      </div>
    </h2>

    <ProgressBar onFinish={updateDataIndex} />
    <p className="text-md md:text-lg">{text}</p>
  </div>
);
