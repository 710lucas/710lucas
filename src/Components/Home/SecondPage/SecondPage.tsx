import { useContext } from "react"
import { Project } from "./Project/Project"
import "./SecondPage.css"
import { LangContext } from "../../../Contexts/LangContext"

export function SecondPage(){

    const {lang} = useContext(LangContext)

    const translations ={
        en : {

            projectTitle: "Projects",

            project1title: "RISC-I Emulator",
            project1description: "An emulator inspired by RISC-I/Berkeley RISC architecture proposed by David A. Patterson. Written in C++",


            project2title: "RISC-I Compiler",
            project2description: "A compiler written for the RISC-I emulator. It takes a simplified assembly language and turns into binary code that can run on the emulator.",

            project3title: "Me ajude! (Help me!)",
            project3description: "A fullstack program written in Java (using Spring Boot) and Angular. Its a crowfunding platform designed to help individuals raise funds.",

            moreProjects: "Check out more projects!"

        },
        pt : {

            projectTitle: "Projetos",

            project1title: "Emulador de RISC-I",
            project1description: "Um emulador inspirado pela arquitetura RISC-I/Berkeley RISC proposta por David A. Patterson. Escrito em C++.",


            project2title: "Compilador RISC-I",
            project2description: "Um compilador escrito para o emulador de RISC-I. Recebe como input um código assembly simplificado e transforma em código binário para ser executado no emulador.",

            project3title: "Me ajude! (Help me!)",
            project3description: "Um programa fullstack escrito em Java (usando Spring Boot) e Angular. É uma plataforma de financiamento coletivo.",

            moreProjects: "Confira mais projetos!"

        }
    }

    const translation = lang == 'en' ? translations.en : translations.pt

    return(
        <div className="second-page-container">
            <div className="projects-container">
                <div className="project-title">
                    {translation.projectTitle}
                </div>
                <div className="title-highlighter"></div>
                {
                    Project({
                        title: translation.project1title,
                        description: translation.project1description,
                        link: "https://github.com/710lucas/risc-i-emu"
                    })
                }
                {
                    Project({
                        title: translation.project2title,
                        description: translation.project2description,
                        link: "https://github.com/710lucas/risc-i-compiler"
                    })
                }
                {
                    Project({
                        title: translation.project3title,
                        description: translation.project3description,
                        link: "https://github.com/710lucas/MeAjude-front"
                    })
                }

            </div>
            <div className="projects-container">

                <a href="https://github.com/710lucas" target="_blank">
                    <div className="more-projects-link">
                        <i className="bi bi-github"></i>
                        {translation.moreProjects}
                        <i className="bi bi-arrow-right-short"></i>
                    </div>
                </a>


            </div>
        </div>
    )
}