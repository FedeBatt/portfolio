import coding from "../../assets/programming.svg";
import skills from "../../assets/progressive_app.svg";

export const homeObjOne = {
    id: "about",
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: "Federico Battcock",
    headLine: "Dev Front-End",
    description:
        "Oriundo de Rosario, Santa Fe, Argentina. Me desempeño como desarrollador front-end desde 2021, manejando diversos lenguajes de programación y herramientas para el desarrollo de aplicaciones tanto web como mobile.",
    buttonLabel: "Contactame!",
    imgStart: false,
    img: coding,
    alt: "Computer",
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTwo = {
    id: "skills",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Habilidades",
    headLine: "React | React Native | Angular | Vue | JavaScript | TypeScript | HTML | CSS | SCSS | Styled Components",
    description: "",
    // buttonLabel: "Contactame!",
    imgStart: true,
    img: skills,
    alt: "Computer",
    dark: true,
    primary: true,
    darkText: false,
};
