
import React, { useState } from "react";

function Home (){

    return (
        <Comment username="Tai">
            {/* <h1> YO CHIasdasfdaLDREN</h1> */}
        </Comment>
    )

}

function Comment (props){
    return (
        <section>
            <p> {props.username} this is username </p>
            {props.children}
        </section>
    )
}
export default Home;