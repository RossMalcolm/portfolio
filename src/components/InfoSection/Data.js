export const homeObjOne = {
  id: "about",
  lightBg: false,
  topLine: "About",
  titles: [
    {
      headline: "I am a Recent Laurier Grad",
      description:
        "I am currently looking for work as a web developer or FullStack Developer",
      lightText: true,
      darkText: false,
      imgStart: false,
      img: require("../../images/LinkedInPicture.jpg").default,
      alt: "Picture of myself",
    },
  ],
  dark: true,
  primary: true,
};

export const workObj = {
  id: "work",
  lightBg: true,
  topLine: "Work Experiences",
  titles: [
    {
      headline: "Business System Analyst",
      description:
        "Business System Analyst Co-op at Wilfrid Laurier University",
      lightText: false,
      darkText: true,
      imgStart: true,
      img: require("../../images/laurierSign.jpeg").default,
      alt: "Picture of Laurier Sign",
    },
    {
      headline: "Data Analyst",
      description: "Data Analyst Co-op at Wilfrid Laurier University",
      lightText: false,
      darkText: true,
      imgStart: false,
      img: require("../../images/LaurierSign2.jpeg").default,
      alt: "Picture of Laurier Campus",
    },
    {
      headline: "Produce Clerk",
      description: "Produce Clerk at Zehrs Markets",
      lightText: false,
      darkText: true,
      imgStart: true,
      img: require("../../images/ZehrsMarkets.jpeg").default,
      alt: "Picture of Zehrs Logo",
    },
  ],
  dark: false,
  primary: false,
};
