import "./Lottery.css";
import { genTicket, sum } from "./helper.js";
import { useState } from "react";
import Ticket from "./Ticket.jsx";

export default function Lottery({ n = 3, winSum = 15 }){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winSum;

    let buyNewTicket = () => {
        setTicket(genTicket(n));
    }

      return(
        <div className="Lottery">
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket} />
            <button onClick={() => buyNewTicket()}>Buy New Ticket</button>
            <h2>{isWinning && "Congratulations! You won!"}</h2> 
    
        </div>
    )
}