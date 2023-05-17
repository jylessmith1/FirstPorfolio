import React from "react";
import { Component } from "react";

const Header = () => {
    const styles = {
        header: {
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "lightBlue"
        }
    }


    return (
        <>
            <header style={styles.header}>
                <h1>My First Portfiolio</h1>
                <h4>📱 📥 🔗 💬 </h4>
            </header>
        </>

    )
}


export default Header