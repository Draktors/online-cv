export type TimelineDataProps = {
  title: string;
  date: string;
  description: string;
};

export const TIMELINES_DATA = [
  {
    category: "Experience",
    data: [
      {
        title: "Quitoque",
        date: "2021-2022",
        description:
          "Set up, launched and maintained hybrid application in react native to replace native applications.\n\nReviewed and enhanced user experience on the website.\n\nAdding and maintaining features on the main website used by a thousand daily users.",
      },
      {
        title: "Matera",
        date: "2020",
        description:
          "Learning to work with micro-services (library component, utils package).",
      },
      {
        title: "Ouihelp",
        date: "2017-2020",
        description:
          "Building stable and maintainable codebases using react / typescript.\n\nIntroducing a mobile first approach to an existing website powered by Gatsby.\n\nCreating modular responsive template component using modern css techniques and javascript librairies.\n\nEnhancement of continuous integration testing with CircleCi.",
      },
    ],
  },
  {
    category: "Education",
    data: [
      {
        title: "Hetic",
        date: "2017-2020",
        description:
          "Studies included fundamental computer science subjects such as software & hardware architecture and development. Also an emphasis on automation techniques.",
      },
      {
        title: "Lycée Alexis-Tocqueville",
        date: "2013-2017",
        description: "Baccalaureat Scientifique",
      },
    ],
  },
];
