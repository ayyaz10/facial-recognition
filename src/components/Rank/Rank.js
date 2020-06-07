import React from 'react';

const Rank = ({ name, entries}) => {
    return (
        <div>
        <p className="f4 pa3 near-white">{`${name}, Your Rank: #1`}</p>
        <div className="white f1">
            {entries}
        </div>
        </div>
    )
}
export default Rank;
