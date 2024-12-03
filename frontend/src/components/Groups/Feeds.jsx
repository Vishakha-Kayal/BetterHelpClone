import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState, useCallback } from "react";
import { useVerification } from "../../context/verifyToken";

const Feeds = ({ onHandleShowComments, data, postLike, postDislike, userId }) => {
  const [isUserLiked, setUserLiked] = useState(false);
  const { isPrivate, getPrivateFromServer } = useVerification();
  const [visibilityFetched, setVisibilityFetched] = useState(false); // State to track if visibility has been fetched

  useEffect(() => {
    const fetchVisibility = async () => {
      if (!visibilityFetched) {
        await getPrivateFromServer();
        setVisibilityFetched(true);
      }
    };
    fetchVisibility();
  }, [getPrivateFromServer, visibilityFetched]);
  useEffect(() => {
    setUserLiked(data.likes.includes(userId));
  }, [data.likes, userId]);

  const handleLikeClick = useCallback(() => {
    postLike(data._id);
    setUserLiked((prev) => !prev);
  }, [data._id, postLike]);

  return (
    <section className="bg-[#f9f6f3] w-[93%] flex p-4 gap-5">
      <div>
        <div className="w-[6rem] h-[6rem] bg-slate-500 rounded-full overflow-hidden">
          <img
            src={data.createdBy?.profileImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <h3 className="text-xl lowercase">
            {data.createdBy._id === userId && isPrivate ? "Anonymous" : data.createdBy?.email || data.createdBy?.fullName}
          </h3>
          <h3 className="text-lg">
            {formatDistanceToNow(new Date(data.createdAt), { addSuffix: true })}
          </h3>
        </div>
        <div>
          <p className="text-xl">
            {data.content || "No review available"}
          </p>
        </div>
        <div className="flex gap-6 text-4xl items-center w-full mt-5">
          <div className="flex items-center gap-2">
            <AiOutlineLike
              onClick={handleLikeClick}
              className={isUserLiked ? 'text-blue-500' : ''}
            />
            <span className="text-xl">{data.likes.length}</span>
          </div>
          <AiOutlineDislike onClick={() => postDislike(data._id)} />
          <div
            className="flex items-center gap-2 hover:bg-[#e5e5e5] cursor-pointer rounded-full px-3 py-2"
            onClick={() => onHandleShowComments(data._id)}
          >
            <MdOutlineComment className="text-[1.6rem]" />
            <span className="text-lg">{data.comments.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feeds;