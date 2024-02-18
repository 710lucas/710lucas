import "./Project.css"

export type projectDetails ={
    title: string,
    description: string,
    link: string
}

export function Project(projectDetails : projectDetails){
    return (
        <div className="project">
            <div className="project-title">
                {projectDetails.title}
            </div>
            <div className="highlight"></div>
            <div className="project-description">
                {projectDetails.description}
            </div>
            <div className="link">
                <a href={projectDetails.link} target="_blank">
                    <i className="bi bi-github"></i>
                    Check it out!
                    <i className="bi bi-arrow-right-short"></i>
                </a>
            </div>
        </div>
    )
}