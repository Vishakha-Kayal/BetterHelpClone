import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineComment } from "react-icons/md";

const Feeds = ({onHandleShowComments}) => {
  return (
    <section className="bg-[#f9f6f3] mx-4 w-[93%] flex p-4 gap-5">
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

    <div className="flex flex-col ">
      <div className="flex items-center gap-3">
        <h3 className="text-xl">Vishakha Kayal</h3>
        <h3 className="text-lg">3 hours ago</h3>
      </div>
      <div>
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Est eveniet nostrum amet, accusantium necessitatibus impedit
          nobis debitis odio? Non incidunt natus ipsum deserunt quis.
          Repudiandae numquam consequuntur tempore sed vel minus,
          obcaecati blanditiis tempora! Dolores quasi hic numquam
          nobis exercitationem et quisquam magni ducimus distinctio a.
          Ullam, praesentium magni laboriosam illo temporibus nostrum
          sapiente architecto quas quam. Molestiae!
        </p>
      </div>
      <div className="flex gap-6 text-4xl items-center w-full mt-5">
        <div className="flex items-center gap-2">
          <AiOutlineLike />
          <span className="text-xl">250k</span>
        </div>
        <AiOutlineDislike />
        <RiShareForwardLine />
        <div className="flex items-center gap-2 hover:bg-[#e5e5e5] cursor-pointer rounded-full px-3 py-2" onClick={onHandleShowComments}>
          <MdOutlineComment className="text-[1.6rem]"/>
          <span className="text-lg">202</span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Feeds