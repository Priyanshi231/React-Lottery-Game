import "./Lottery.css";
import { genTicket} from "./helper.js";
import { useState } from "react";
import Button from "./Button.jsx";
import Ticket from "./Ticket.jsx";

export default function Lottery({ n = 3, winCondition }){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyNewTicket = () => {
        setTicket(genTicket(n));
    }

      return(
        <div className="Lottery">
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket} /> 
            <Button action={buyNewTicket} />
            <h2>{isWinning && "Congratulations! You won!"}</h2> 
        </div>
    )
}