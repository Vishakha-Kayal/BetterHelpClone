import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { formatDistanceToNow } from "date-fns";
import { useState, useEffect } from "react";

const Comments = ({ comment, id, postCommentLike, postCommentDislike, userId }) => {
  const [isUserLiked, setUserLiked] = useState(false);
  const [isUserDisliked, setUserDisliked] = useState(false);

  // Check if the user has liked or disliked the comment when the component mounts or when comment changes
  useEffect(() => {
    setUserLiked(comment.likes.includes(userId));
    setUserDisliked(comment.disLikes.includes(userId));
  }, [userId,comment.likes]);

  const handleLikeClick = () => {
    postCommentLike(comment.reviewId, comment._id);
    setUserLiked(!isUserLiked);
    if (isUserDisliked) {
      setUserDisliked(false); // Remove dislike if it was previously disliked
    }
  };

  const handleDislikeClick = () => {
    postCommentDislike(comment.reviewId, comment._id);
    setUserDisliked(!isUserDisliked);
    if (isUserLiked) {
      setUserLiked(false); // Remove like if it was previously liked
    }
  };

  return (
    <section className="w-[93%] flex py-9 gap-5">
      <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden">
        <img
          src={comment.createdBy.profileImage}
          alt=""
          className="w-full h-full"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <h3 className="text-xl">@{comment.createdBy?.email || comment.createdBy?.fullName || "Anonymous"}</h3>
          <h3 className="text-lg">
            {formatDistanceToNow(new Date(comment?.createdAt), { addSuffix: true })}
          </h3>
        </div>
        <div>
          <p className="text-xl">{comment.content}</p>
        </div>
        <div className="flex gap-6 text-4xl items-center w-full mt-5">
          <div className="flex items-center gap-2">
            <AiOutlineLike
              onClick={handleLikeClick}
              className={isUserLiked ? 'text-blue-500' : ''}
            />
            <span className="text-xl">{comment.likes.length}</span>
          </div>
          <AiOutlineDislike
            onClick={handleDislikeClick}
            className={isUserDisliked ? 'text-red-500' : ''}
          />
        </div>
      </div>
    </section>
  );
};

export default Comments;