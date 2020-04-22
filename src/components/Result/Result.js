import React from 'react';
import './Result.css';

const Result = ({ imgUrl, boxArray }) => {
        const boundingComponent = boxArray.map(each => {
            return <div className="bounding-box" style={{top: each.topRow, right: each.rightCol, bottom: each.bottomRow, left: each.leftCol}}></div> 
        })

    return (
        <div className="result-main-div">
               <img id="inputImg" alt="" src={imgUrl} width='500px' height='auto'/>
               {boundingComponent}
        </div>
    )

}
export default Result;
