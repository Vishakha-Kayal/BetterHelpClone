import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";

const Feeds = ({ onHandleShowComments, data, postLike, postDislike, userId }) => {
  const [isUserLiked, setUserLiked] = useState(false);

  // Check if the user has liked the review when the component mounts or when data changes
  useEffect(() => {
    setUserLiked(data.likes.includes(userId));
  }, [data.likes, userId]);

  const handleLikeClick = () => {
    postLike(data._id);
    setUserLiked(!isUserLiked); // Toggle the like state
  };

  return (
    <section className="bg-[#f9f6f3] mx-4 w-[93%] flex p-4 gap-5">
      <div className="">
        <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden">
          <img
            src={data.createdBy?.profileImage}
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex items-center gap-3">
          <h3 className="text-xl">{data.createdBy?.email || data.createdBy?.fullName || "Anonymous"}</h3>
          <h3 className="text-lg"> {formatDistanceToNow(new Date(data.createdAt), { addSuffix: true })}</h3>
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
          <AiOutlineDislike onClick={() => { postDislike(data._id); }} />
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