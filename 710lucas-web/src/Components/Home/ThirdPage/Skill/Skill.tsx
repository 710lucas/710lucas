import "./Skill.css"

export type SkillInfo = {
    name : string,
    percentage: string
}

export function Skill(skill : SkillInfo){
    return(
        <div className="skill">
            <div className="skill-name">
                {skill.name}
            </div>
            <div className="progress-container">
                <div className="progress-bar" style={{width: skill.percentage}}></div>
            </div>
            {skill.percentage}
        </div>
    )
}