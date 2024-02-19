import { useContext } from "react"
import { Skill } from "./Skill/Skill"
import "./ThirdPage.css"
import { LangContext } from "../../../Contexts/LangContext"

export function ThirdPage(){


    const {lang} = useContext(LangContext)

    const translations = {
        en:{
            
            title: "Experiences and Skills",
            experiencesTitle : "Experiences",
            
            experience1title : "Ayty - Codata (2023 - Now)",
            experience1desc : "Internship at Codata through the Ayty Laboratory (UFPB - Campus IV), where I developed fullstack development skills using Spring Boot, React.js, and Flyway. Additionally, I honed soft skills through teamwork.",

            experience2title : "Introduction to Programming Monitoring (2023)",
            experience2desc : "I performed monitoring work for the Introduction to Programming course for 6 months at UFPB - Campus IV. In this experience, I was able to enhance my Python skills and soft skills by assisting students with difficulties in the course.",

            experience3title : "Portal Potiguara (2023)",
            experience3desc: "This project was carried out in collaboration with the design, anthropology, and information systems classes. We developed a website for the dissemination of materials (books, movies, interviews, and documents) about the Potiguara people in a more accessible manner.",

            skills : "Skills"

        },
        pt:{
            title: "Experiências e Habilidades",
            experiencesTitle : "Experiências",
            experience1title : "Ayty - Codata (2023 - Presente)",
            experience1desc : "Estágio na Codata através do laboratório Ayty (UFPB - Campus IV), onde desenvolvi habilidades de desenvolvimento fullstack usando Spring Boot, React.js e Flyway. Além disso, aprimorei minhas soft skills por meio do trabalho em equipe.",
            experience2title : "Monitoria de Introdução à Programação (2023)",
            experience2desc : "Realizei trabalho de monitoria para a disciplina de Introdução à Programação por 6 meses na UFPB - Campus IV. Nessa experiência, pude aprimorar minhas habilidades em Python e soft skills ajudando estudantes com dificuldades na disciplina.",
            experience3title : "Portal Potiguara (2023)",
            experience3desc: "Este projeto foi realizado em colaboração com as turmas de design, antropologia e sistemas de informação. Desenvolvemos um site para a divulgação de materiais (livros, filmes, entrevistas e documentos) sobre o povo Potiguara de forma mais acessível.",
            skills : "Habilidades"
        }
    }

    const translation = lang == 'en' ? translations.en : translations.pt;

    return (
        <div className="third-page-container">

            <div className="third-page-title">
                {translation.title}
            </div>

            <div className="experience-container">

                <div className="experiences-title">
                    {translation.experiencesTitle}
                </div>

                <div className="highlighter"></div>

                <div className="experiences">
                    <div className="experience">
                        {translation.experience1title}
                        <div className="experience-desc">
                            {translation.experience1desc}
                        </div>
                    </div>

                    <div className="experience">
                        {translation.experience2title}
                        <div className="experience-desc">
                        {translation.experience2desc}
                        </div>
                    </div>

                    <div className="experience">
                        {translation.experience3title}
                        <div className="experience-desc">
                        {translation.experience3desc}
                        </div>
                    </div>
                </div>

            </div>

            <div className="experience-container skills-container">
                <div className="experiences-title">
                    {translation.skills}
                </div>

                <div className="highlighter2"></div>

                <div className="skills">

                    {
                        Skill({name: "C++", percentage: "85%"})
                    }
                    {
                        Skill({name: "HTML", percentage: "85%"})
                    }
                    {
                        Skill({name: "Linux", percentage: "80%"})
                    }
                    {
                        Skill({name: "CSS", percentage: "80%"})
                    }
                    {
                        Skill({name: "Java", percentage: "75%"})
                    }
                    {
                        Skill({name: "Spring Boot", percentage: "70%"})
                    }
                    {
                        Skill({name: "Javascript", percentage: "70%"})
                    }
                    {
                        Skill({name: "Python", percentage: "70%"})
                    }
                    {
                        Skill({name: "React.js", percentage: "60%"})
                    }
                    {
                        Skill({name: "PostgreSQL", percentage: "40%"})
                    }

                </div>

            </div>

        </div>
    )

}