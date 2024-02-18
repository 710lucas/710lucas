import "./ThirdPage.css"

export function ThirdPage(){

    return (
        <div className="third-page-container">

            <div className="experience-container">

                <div className="experiences-title">
                    Experiences
                </div>

                <div className="highlighter"></div>

                <div className="experiences">
                    <div className="experience">
                        Ayty - Codata
                        <div className="experience-desc">
                            Internship at Codata through the Ayty Laboratory (UFPB - Campus IV), where I developed fullstack development skills using Spring Boot, React.js, and Flyway. Additionally, I honed soft skills through teamwork.
                        </div>
                    </div>

                    <div className="experience">
                        Introduction to Programming Monitoring
                        <div className="experience-desc">
                        I performed monitoring work for the Introduction to Programming course for 6 months at UFPB - Campus IV. In this experience, I was able to enhance my Python skills and soft skills by assisting students with difficulties in the course.
                        </div>
                    </div>

                    <div className="experience">
                        Portal Potiguara
                        <div className="experience-desc">
                        This project was carried out in collaboration with the design, anthropology, and information systems classes. We developed a website for the dissemination of materials (books, movies, interviews, and documents) about the Potiguara people in a more accessible manner.
                        </div>
                    </div>
                </div>

            </div>

            <div className="experience-container skills-container">
                <div className="experiences-title">
                    Skills
                </div>

                <div className="highlighter2"></div>

                <div className="skills">
                    <div className="skill">
                        Java
                        <div className="progress-container">
                            <div className="progress-bar" style={{width: "75%"}}></div>
                        </div>
                        75%

                    </div>
                </div>

            </div>

        </div>
    )

}