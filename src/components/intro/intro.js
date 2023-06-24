import React from "react"
import "./intro.css"
/*import kg from "../../img/kgosi2.png"*/


const Intro = () =>{

    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Kgosi Motabogi</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">App Developer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I am a Sol Plaatje University graduate, with advanced diploma in application development. 
                    </p>
                </div>

            </div>

            
            <div className="i-right">
                <div className="i-bg"></div>
            <img src="https://archive.org/download/kgosi2/kgosi2.png" alt="" className="i-img"/>
            </div>
           
        </div>
    )
}

export default Intro