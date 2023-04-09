import React from "react";


const bookFirst =  {
    title: "this is the thet title of the book",
    aurthur: "naseem",
    img: "./logo192.png",
};
const bookSecond =  {
    title: "this is the thet title of the second  book",
    aurthur: "naseem",
    image: "./logo512.png",
};
const Book = (props) => {

    return(
      <article>
        <img src={props.img} alt= {props.title} />
        <h3>{props.title}</h3>
        <h3>{props.aurthur}</h3>
      </article>
        )
        
}
export default Book;