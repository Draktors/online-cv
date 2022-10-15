import { FC } from "react";

import { TimelineDataProps } from "../data/timelineData";

type TimelineProps = {
  timelineCategory: string;
  timelineData: TimelineDataProps[];
};

export const Timeline: FC<TimelineProps> = ({
  timelineCategory,
  timelineData,
}) => (
  <section>
    <h4 className="text-3xl font-bold mb-6">{timelineCategory}</h4>
    <ul className="timeline">
      {timelineData.map((datum, i) => (
        <li key={i} className="mb-8 relative pl-12">
          <div className="flex items-center mb-2">
            <h3 className=" text-xl lg:text-2xl font-semibold mr-2">
              {datum.title}
            </h3>
            <span className="text-lg lg:text-xl text-yellow font-semibold">
              {datum.date}
            </span>
          </div>

          <p className="text-md lg:text-lg whitespace-pre-wrap">
            {datum.description}
          </p>
        </li>
      ))}
    </ul>
  </section>
);
