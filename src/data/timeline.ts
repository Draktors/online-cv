import { format } from "date-fns";

export type TimelineDataProps = {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
};

export const TIMELINES = [
  {
    category: "Experience",
    data: [
      {
        title: "Quitoque",
        startDate: format(new Date(2021, 2, 1), "yyyy"),
        endDate: format(new Date(), "yyyy"),
        description:
          "Set up, launched and maintained hybrid application in react native to replace native applications.\n\nReviewed and enhanced user experience on the website.\n\nAdding and maintaining features on the main website used by a thousand daily users.",
      },
      {
        title: "Matera",
        startDate: format(new Date(2020, 9, 1), "yyyy"),
        endDate: format(new Date(2020, 11, 1), "yyyy"),
        description:
          "Learned to work with micro-services (library component, utils package).",
      },
      {
        title: "Ouihelp",
        startDate: format(new Date(2018, 7, 1), "yyyy"),
        endDate: format(new Date(2020, 9, 1), "yyyy"),
        description:
          "Built stable and maintainable codebases using react / typescript.\n\nIntroduced a mobile first approach to an existing website powered by Gatsby.\n\nCreated modular responsive template component using modern css techniques and javascript librairies.\n\nEnhancement of continuous integration testing with CircleCi.",
      },
    ],
  },
  {
    category: "Education",
    data: [
      {
        title: "Hetic",
        startDate: format(new Date(2017, 1, 1), "yyyy"),
        endDate: format(new Date(2020, 1, 1), "yyyy"),
        description:
          "Studies included fundamental computer science subjects such as software & hardware architecture and development. Also an emphasis on automation techniques.",
      },
      {
        title: "Lycée Alexis-Tocqueville",
        startDate: format(new Date(2013, 1, 1), "yyyy"),
        endDate: format(new Date(2017, 1, 1), "yyyy"),
        description: "Baccalaureat Scientifique",
      },
    ],
  },
];
