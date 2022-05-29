import './Card.css';
import { useEffect, useState } from 'react';

function Card(props) {
    const [front, setFront] = useState(props.front ? props.front : "Front");
    const [back, setBack] = useState(props.back ? props.back : "Back");
    const [currFace, setCurrFace] = useState(true);
    const d = new Date();

    return (
        <button 
            id={front + "-card" + d.getTime.toString} 
            onClick={() => { setCurrFace( !currFace ); }}
            className="card-body"
        >
            <div className="card-title">
                {currFace ? front : back }
            </div>
        </button>
    );
}

export default Card;