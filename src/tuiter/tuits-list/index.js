import React from "react";
import {useSelector} from "react-redux";
import TuitsListItem
  from "./tuits-list-item";

const TuitsList = () => {
  const tuitsArray = useSelector(state => state.tuits);
  return (
      <ul className="list-group">
        {tuitsArray.map(tuit =>
            <TuitsListItem
                key={tuit._id}
                tuit={tuit}/>)}
      </ul>
  )
}

export default TuitsList;