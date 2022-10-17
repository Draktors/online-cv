import { FC, useState } from "react";

import { IntoductionType } from "../data/introduction";
import { ProgressBar } from "./progressBar";

type AnimateIntroductionProps = {
  data: IntoductionType[];
};
export const AnimateIntroduction: FC<AnimateIntroductionProps> = ({ data }) => {
  const [introductionIndex, setIntroductionIndex] = useState(0);

  const updateDataIndex = () => {
    if (introductionIndex < data.length - 1) {
      setIntroductionIndex((prev) => prev + 1);
    } else {
      setIntroductionIndex(0);
    }
  };

  return (
    <div
      className="w-full sm:w-3/5 lg:w-2/6 mb-8 lg:mb-10"
      key={data[introductionIndex].title}
    >
      <h2 className="mb-1">
        <div
          className="animate-appear text-2xl font-bold mb-1"
          style={{ transformOrigin: "left center" }}
        >
          {data[introductionIndex].title}
        </div>
        <div
          className="text-4xl font-bold animate-appearSlow"
          style={{ transformOrigin: "left center" }}
        >
          {data[introductionIndex].subtitle}
        </div>
      </h2>

      <ProgressBar onFinish={updateDataIndex} />
      <p className="text-md md:text-lg">{data[introductionIndex].text}</p>
    </div>
  );
};
