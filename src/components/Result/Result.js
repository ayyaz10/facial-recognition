import React from 'react';
import './Result.css';

const Result = ({ imgUrl, box }) => {
    // console.log(box)
        // let boxArray = [];
        // boxArray.push(box)
        // console.log(box)
        const boundingComponent = box.map((each, i)=>{
            console.log(each)
            return <div className="bounding-box" style={{top: each.topRow, right: each.rightCol, bottom: each.bottomRow, left: each.leftCol}}></div> 
        })


    return (
        <div className="result-main-div">
            {/* <div className=""> */}
               <img id="inputImg" alt="" src={imgUrl} width='500px' height='auto'/>
               {boundingComponent}
               {/* <div className="bounding-box" style={{top: box2.topRow, right: box2.rightCol, bottom: box2.bottomRow, left: box2.leftCol}}></div> */}
            {/* </div> */}
        </div>
    )

}
export default Result;
