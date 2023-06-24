import React from "react"
import "./productList.css"
import Product from "../product/product"
import {products} from "../../data"

const productList = () =>{

    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Kgosiyagae's Skills</h1>
                <p className="pl-desc">
                Over the years, I have acquired skills in using various programming languages and libraries, developing for different platforms.
                </p>
            </div>
            <div className="pl-list">

                {products.map((item) => (
                      <Product img={item.img} link={item.link}/>

                ))} 
             
            </div>
        </div>
    )
}

export default productList
