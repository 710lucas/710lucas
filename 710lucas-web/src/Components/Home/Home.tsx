import "./Home.css"
import "../../css/colors.css"
import { FirstPage } from "./FirstPage/FIrstPage"
import { SecondPage } from "./SecondPage/SecondPage"
import { ThirdPage } from "./ThirdPage/ThirdPage"

export function Home(){

    return(
        <div className="home-page">
            
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