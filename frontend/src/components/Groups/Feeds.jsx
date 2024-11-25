import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineComment } from "react-icons/md";

const Feeds = ({ onHandleShowComments, data }) => {
  return (
    <section className="bg-[#f9f6f3] mx-4 w-[93%] flex p-4 gap-5">
      <div className="">
        <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden">
          <img
            src={data.createdBy.profileImage}
            alt=""
            className="w-full h-full "
          />
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex items-center gap-3">
          <h3 className="text-xl">{data.createdBy?.email || "Anonymous"}</h3>
          <h3 className="text-lg">3 hours ago</h3>
        </div>
        <div>
          <p className="text-xl">
            {data.content || "No review available"}
          </p>
        </div>
        <div className="flex gap-6 text-4xl items-center w-full mt-5">
          <div className="flex items-center gap-2">
            <AiOutlineLike />
            <span className="text-xl">{data.likes.length}</span>
          </div>
          <AiOutlineDislike />
          {/* <RiShareForwardLine /> */}
          <div
            className="flex items-center gap-2 hover:bg-[#e5e5e5] cursor-pointer rounded-full px-3 py-2"
            onClick={onHandleShowComments}
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