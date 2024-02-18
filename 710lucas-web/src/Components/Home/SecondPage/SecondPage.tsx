import { Project } from "./Project/Project"
import "./SecondPage.css"

export function SecondPage(){
    return(
        <div className="second-page-container">
            <div className="projects-container">
                <div className="project-title">
                    Projects
                </div>
                <div className="title-highlighter"></div>
                {
                    Project({
                        title: "RISC-I Emulator",
                        description: "An emulator inspired by RISC-I/Berkeley RISC architecture proposed by David A. Patterson. Written in C++",
                        link: "https://github.com/710lucas/risc-i-emu"
                    })
                }
                {
                    Project({
                        title: "RISC-I Compiler",
                        description: "A compiler written for the RISC-I emulator. It takes a simplified assembly language and turns into binary code that can run on the emulator.",
                        link: "https://github.com/710lucas/risc-i-compiler"
                    })
                }
                {
                    Project({
                        title: "Me ajude! (Help me!)",
                        description: "A fullstack program written in Java (using Spring Boot) and Angular. Its a crowfunding platform designed to help individuals raise funds.",
                        link: "https://github.com/710lucas/MeAjude-front"
                    })
                }

            </div>
            <div className="projects-container">

                <a href="https://github.com/710lucas" target="_blank">
                    <div className="more-projects-link">
                        <i className="bi bi-github"></i>
                        Check out more projects!
                        <i className="bi bi-arrow-right-short"></i>
                    </div>
                </a>


            </div>
        </div>
    )
}