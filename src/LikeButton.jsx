import { useState } from "react"

export default function LikeButton(){
   let [isLiked, setIsLiked] = useState(false);
   let [count,setCount] = useState(0);

   let toggleLike=() =>{
  setIsLiked(!isLiked);
  setCount(count+1);
   }

   let likeStyle = {color: "red"};

    return (
        <>
        <p>Count= {count}</p>
           <p onClick={toggleLike}>
            {
               isLiked ?
                (<i className="fa-solid fa-heart " style={likeStyle}></i> ):
                ( <i className="fa-regular fa-heart"></i>)
            }
             </p>
        </>
    )
}