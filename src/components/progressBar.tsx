import { useEffect, useState, FC } from "react";

type ProgressBarType = {
  onFinish: () => void;
};

export const ProgressBar: FC<ProgressBarType> = ({ onFinish }) => {
  let progress: ReturnType<typeof setInterval>;
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const updateProgressBar = () => {
    progress = setInterval(() => {
      setProgressBarWidth((prev) => prev + 1);
    }, 50);

    if (progressBarWidth === 100) {
      onFinish();
      setProgressBarWidth(0);
    }
  };

  useEffect(() => {
    updateProgressBar();
    return () => {
      clearInterval(progress);
    };
  }, [progressBarWidth]);

  return (
    <div className="w-full bg-yellowOpacity rounded-sm h-1.5  mb-2">
      <div
        className="bg-yellow h-1.5 rounded-sm transition ease-in-out delay-1000"
        style={{
          width: `${progressBarWidth}%`,
          transition: "ease 0.05s",
        }}
      ></div>
    </div>
  );
};
