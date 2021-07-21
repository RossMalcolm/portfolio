export const homeObjOne = {
  id: "about",
  lightBg: false,
  topLine: "About",
  titles: [
    {
      headline:
        "I am a Recent Computer Science Graduate from Wilfrid Laurier University ",
      description:
        "I am a highly motivated software developer currently looking for work in web development. \n\nThroughout my degree I learned a wide variety of programming languages but I always felt the most fulfilled from making clean and responsive websites.",
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
        "- Extracted data to test statistical significance and identify meaningful trends in admissions \n\n- Documented business needs and research new functionality of business systems and tools \n\n- Developed apps and flows for automation within the Microsoft stack",
      lightText: false,
      darkText: true,
      imgStart: true,
      img: require("../../images/laurierSign.jpeg").default,
      alt: "Picture of Laurier Sign",
    },
    {
      headline: "Data Analyst",
      description:
        "- Automated Laurier’s residence availability process by writing queries in SQL \n\n- Condensed all applications, offers, and acceptances from previous years into a data summary \n\n- Coded Excel macros to simplify campus tour booking and high school visiting processes",
      lightText: false,
      darkText: true,
      imgStart: false,
      img: require("../../images/LaurierSign2.jpeg").default,
      alt: "Picture of Laurier Campus",
    },
    {
      headline: "Produce Clerk",
      description:
        "- Worked and trained employees in multiple departments to complete their tasks efficiently \n\n- Collaborated an efficient team of employees to divide responsibilities throughout the store",
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
