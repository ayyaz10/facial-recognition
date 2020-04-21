import React from 'react';
import './Result.css';

const Result = ({ imgUrl, box }) => {
    return (
        <div className="ma center">
            <div className="absolute mt2">
               <img id="inputImg" alt="" src={imgUrl} width='500px' height='auto'/>
             <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}
export default Result;
