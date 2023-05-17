import React from "react";
import { Component } from "react";

const MainBody = () => {
    const styles = {
        article: {
            justifyContent: "space-evenly",
            backgroundColor: "lightgreen",
            alignItems: "center"
        }
    }

    return (

        <article style={styles.article}>
                                                <p>image</p>
            <p>Welcome to my Portfolio pagehere you will find a little about me my journey and links to my various work throughout my time brcoming a software engineer and journey thus far, Welcome and Enjoy. </p>
                                            <p>Random Design</p>
            <h2> Student 🔸 Web Developer 🔸 Software Engineer </h2>
        </article>

    )
}




export default MainBody