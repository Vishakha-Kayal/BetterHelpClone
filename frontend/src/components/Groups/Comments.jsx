import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { formatDistanceToNow } from "date-fns";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineComment } from "react-icons/md";

const Comments = ({comment,id}) => {
  return (
    <section className="w-[93%] flex py-9 gap-5">
      <div className="">
        {" "}
        <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden">
          <img
            src={comment.createdBy.profileImage}
            alt=""
            className="w-full h-full "
          />
        </div>
      </div>

      <div className="flex flex-col">
      <div className="flex flex-col ">
        <div className="flex items-center gap-3">
          <h3 className="text-xl">@{comment.createdBy?.email || comment.createdBy?.fullName || "Anonymous"}</h3>
          <h3 className="text-lg">
            {formatDistanceToNow(new Date(comment?.createdBy?.createdAt), { addSuffix: true })}
          </h3>
        </div>
        <div>
          <p className="text-xl">
         {comment.content}
          </p>
        </div>
      </div>
      <div className="flex gap-6 text-4xl items-center w-full mt-5">
        <div className="flex items-center gap-2">
          <AiOutlineLike />
          <span className="text-xl">{comment.likes.length}</span>
        </div>
        <AiOutlineDislike />
      </div>

      </div>
    </section>
  );
};

export default Comments;
