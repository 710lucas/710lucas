import "./Home.css"
import "../../css/colors.css"
import { FirstPage } from "./FirstPage/FirstPage"
import { SecondPage } from "./SecondPage/SecondPage"
import { ThirdPage } from "./ThirdPage/ThirdPage"
import { useLangState } from "../../Contexts/LangContext"
import { useEffect } from "react"

export function Home(){

    const {lang, setLang} = useLangState();

    const toggleLang = () => {
        if(lang == 'en')
            setLang('pt')
        else
            setLang('en')
    }
    useEffect(()=>{

        document.title = "Lucas Perônico Barbotin"

    }, [])

    return(
        <div className="home-page">
            <div className="lang-switch">
                🇬🇧 
                <div className="switch">
                    <input type="checkbox" id="switch" onClick={toggleLang}/>
                    <label htmlFor="switch"></label>
                </div>
                🇧🇷
            </div>
            
            <div className="first-page">

                <FirstPage/>
                <img className="wave" src="/public/wave.svg"/>


            </div>

            <div className="second-page">

                <SecondPage/>

            </div>

            <div className="first-page third-page">

               <ThirdPage/> 

            </div>

        </div>
    )

}