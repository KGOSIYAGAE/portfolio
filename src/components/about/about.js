import React from "react";
import "./about.css"
/*import Me from "../../img/me.jpg"*/

const About = () =>{

return(
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://ia802602.us.archive.org/11/items/kgosi2/me.jpg" alt="" className="a-img"></img>
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
            I'm a driven and passionate software developer and web designer with a strong foundation in programming languages such as Java, 
            Javascript and Python.
            </p>
            <p className="a-desc">
            I have gained experience working on various projects, collaborating with cross-functional teams, 
            and developing innovative solutions to challenging problems. My strong analytical skills, attention to detail, 
            and ability to learn quickly allow me to thrive under pressure.<br/><br/>
            I'm eager to start my career as a software engineer/ web designer and make a positive impact on the technology industry.
            </p>
        </div>
    </div>
)

}


export default About