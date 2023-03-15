import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit, likeTuit} from "../tuits/tuits-reducer";
const TuitsListItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  const likeCountTuitHandler = (id) =>{
    dispatch(likeTuit(id));
  }

  const toggleLikeHandler = () => {
    const isLiked = !tuit.liked;
    dispatch(likeTuit({ tuitId: tuit._id, isLiked }));
  };

  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <img className="float-end rounded-circle" src={tuit.image} width={50} height={50} alt="user_avatar"/>
          </div>

          <div className="col-10">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}/>
            <div className="fw-bolder">
              {tuit.userName} <i className="bi bi-patch-check-fill text-primary px-2"/>
              <span className="fw-normal">{tuit.handle} · {tuit.time}</span>
            </div>

            <div className="mb-3 pe-2">{tuit.tuit}</div>

            <div className="row">
              <div className="col">
                <i className="bi bi-chat pe-2"/>{tuit.replies}
              </div>
              <div className="col">
                <i className="bi bi-repeat pe-2"/>{tuit.retuits}
              </div>
              <div className="col" onClick={() => {
                toggleLikeHandler();
                likeCountTuitHandler();
              }}>
                {tuit.liked ?
                    <i className="bi bi-heart-fill text-danger pe-2"/> : <i className="bi bi-heart pe-2"/> }
                {tuit.likes}
              </div>
              <div className="col">
                <i className="bi bi-share"/>
              </div>
            </div>
          </div>

        </div>
      </li>
  )
}

export default TuitsListItem;