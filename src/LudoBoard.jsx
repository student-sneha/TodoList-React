import { useState } from "react"

export default function LudoBoard() {

    let [moves ,setMoves] = useState({blue:0,red:0,yellow:0,grren:0});
    let [arr, SetArr] = useState(['no moves']);


    let blueCount = ()=>{
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue+1}
    });

    
    SetArr((prevArr) =>{
        return [...arr ,"Blue moves"]});
};
    let yellowCount = ()=>{
        console.log(`moves.yellow= ${moves.yellow}`)
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow+3}
    });
};

    return(
        <div>
            <p>Game Begins</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={blueCount}>+1</button>
                <p>Yellow moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={yellowCount}>+3</button>
                <p>Green moves={moves.grren}</p>
                <button style={{backgroundColor:"green"}}>+1</button>
                <p>Red moves={moves.red}</p>
                <button style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    )
}