import React from "react";

export default function Footer(){
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p>&copy; Copyright {year}</p>
        </footer>
    );
}