import React from "react";
// import Image from "./Image.jsx";


const Book = () => {
    return(
        <article className="book">
            <Image/>
            <Title/>
            <Aurthur/>

        </article>
    )
    
}

const Image = () => {
    return (
        <img src="http://placekitten.com/300/200" alt=" this is a standby" />
    )
}
const Title = () => {
    return(
        <h3>this is the thet title of the book</h3>
    )
}
const Aurthur = () => {
    return(
        <h3>Ibrahim</h3>
    )
}


export default Book;