import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineComment } from "react-icons/md";

const Comments = () => {
  return (
    <section className="w-[93%] flex py-9 gap-5">
      <div className="">
        {" "}
        <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3011/3011270.png"
            alt=""
            className="w-full h-full "
          />
        </div>
      </div>

      <div className="flex flex-col">
      <div className="flex flex-col ">
        <div className="flex items-center gap-3">
          <h3 className="text-xl">@sunaina</h3>
          <h3 className="text-lg">3 hours ago</h3>
        </div>
        <div>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            veritatis dolor molestiae iste aliquam ea neque aut totam quam quod,
            accusantium corrupti hic soluta doloremque incidunt consectetur
            provident? Molestias dolorum facilis at ab in quod!
          </p>
        </div>
      </div>
      <div className="flex gap-6 text-4xl items-center w-full mt-5">
        <div className="flex items-center gap-2">
          <AiOutlineLike />
          <span className="text-xl">250k</span>
        </div>
        <AiOutlineDislike />
      </div>

      </div>
    </section>
  );
};

export default Comments;
