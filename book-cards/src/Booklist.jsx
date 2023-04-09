import React from "react";
import Book from "./Twoobjects.jsx";
// import Book from './Book';
// import Image from "./Image.jsx";



const Booklist = () => {
    return(
        <section className='booklist'>
            {/* <Book number = {25}/>
            <Book number = {26}/> */}
            <Book 
                img = {bookFirst.img}
                title = {bookFirst.title}
                aurthur = {bookFirst.aurthur}

            />
            <Book
                img = {bookSecond.img}
                title = {bookSecond.title}
                aurthur = {bookSecond.aurthur}
            
            />
            {/* <Book/> */}
        </section>

    )
    
}

export default Booklist;