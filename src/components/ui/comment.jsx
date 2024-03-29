import React from "react";
import PropTypes from "prop-types";
import displayPublishedDate from "../../utils/displayPublishedDate";
import { useSelector } from "react-redux";
import { getCurrentUserId, getUserById } from "../../store/users";

const Comment = ({ data, onDelete }) => {
  const user = useSelector(getUserById(data.userId));
  const currentUserId = useSelector(getCurrentUserId());
  if (!user) {
    return "Загрузка...";
  }
  return (
    <div className="bg-light card-body  mb-3">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-start ">
            <img
              src={user.image}
              className="rounded-circle shadow-1-strong me-3"
              alt="avatar"
              width="65"
              height="65"
            />
            <div className="flex-grow-1 flex-shrink-1">
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-1 ">
                    {user.name}
                    <span className="small">
                      {" "}
                      - {displayPublishedDate(data.created_at)}
                    </span>
                  </p>
                  {currentUserId === data.userId && (
                    <button
                      className="btn btn-sm text-primary d-flex align-items-center"
                      onClick={() => onDelete(data._id)}
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  )}
                </div>
                <p className="small mb-0">{data.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  data: PropTypes.object,
  onDelete: PropTypes.func
};
export default Comment;
