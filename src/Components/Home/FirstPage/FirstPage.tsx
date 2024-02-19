
import { useContext } from "react";
import { LangContext} from "../../../Contexts/LangContext";
import "./FirstPage.css"

export function FirstPage(){


    const {lang} = useContext(LangContext);


    const translations = {
        en: {
          greeting: "Hello,",
          greeting_name: "I'm Lucas!",
          description_1: "I'm a fullstack developer skilled in Spring Boot, React.js, Angular, C++, and Python.",
          description_2: "I'm passionate about coding and always exploring new technologies.",
          scrollDown: "Scroll Down"
        },
        pt: {
          greeting: "Olá,",
          greeting_name: "Sou Lucas!",
          description_1: "Possuo habilidade em desenvolvimento fullstack usando Spring Boot, React.js, Angular, C++, e Python.",
          description_2: "Adoro programação e procuro sempre aprender novas tecnologias.",
          scrollDown: "Desça"
        }
      };

    const translation = lang == 'en' ? translations.en : translations.pt




    return(
        <div className="elements-container">
            <div className="greetings">
                <div className="greeting">
                    {translation.greeting}<br></br>{translation.greeting_name}
                </div>
                <div className="name-highlight"></div>
                <div className="description">
                    {translation.description_1}
                    <br />
                    {translation.description_2}
                </div>
            </div>
            <div className="info-container">

                <img src="/public/me.png" className="pfp"/>
                <div className="info">
                    Contact
                    <div className="contact-link">
                        <i className="bi bi-github"></i>
                        <a href="https://github.com/710lucas">github.com/710lucas</a>
                    </div>
                    <div className="contact-link">
                        <i className="bi bi-envelope"></i>
                        <a href="mailto:lucasperonicobarbotin@gmail.com">lucasperonicobarbotin@gmail.com</a>
                    </div>
                    <div className="contact-link">
                        <i className="bi bi-linkedin"></i>
                        <a href="https://www.linkedin.com/in/lucas-barbotin-3a4320254/">Linkedin</a>
                    </div>
                </div>
            </div>
            <div className="scroll-down">
                {translation.scrollDown}
            </div>
        </div>
    )
}