import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const List = (props) => {
    const [line, setline] = useState(false);
    const cutIt = () => {
        setline(true);
    }
    return (
        <>


            <div id="ListDiv">
                <span onClick={cutIt}>
                    <DeleteIcon id="Delbtn" />
                </span>
                <li id="list" style={{ textDecoration: line ? "line-through" : "none" }} >
                    {props.text}</li>
            </div>

        </>

    );


};

export default List;