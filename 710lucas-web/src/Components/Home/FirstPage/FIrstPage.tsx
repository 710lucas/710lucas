
import "./FirstPage.css"

export function FirstPage(){


    return(
        <div className="elements-container">
            <div className="greetings">
                Hello,<br></br>I'm Lucas!
                <div className="description">
                    I'm a fullstack developer skilled in Spring Boot, React.js, Angular, C++ and Python.
                    <br />
                    I'm passionate about coding and always exploring new technologies.
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
        </div>
    )
}