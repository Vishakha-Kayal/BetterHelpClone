import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MembersUi from "./MembersUi";
import Feeds from "./Feeds";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroups } from "../../store/slice/GroupSlice";
import { getReviews, postReview, postComment } from "../../api/groupApi";
import { decodeToken } from "../../utils/decodeToken";
import { useVerification } from "../../context/verifyToken";

const GroupJoined = () => {
  const [reviews, setReviews] = useState([]);
  const [commentid, setcommentid] = useState(null)
  const [commentInput, setcommentinput] = useState("")
  const { id } = useParams();
  const { token, userType, logout } = useVerification();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const { groups, error, loading } = useSelector((state) => state.groups);
  const onHandleCommentPost = async () => {
    if(token){
      const createdBy=decodeToken(token)._id
      console.log(commentid, commentInput,createdBy)
      const result = await postComment(commentid, commentInput,createdBy)
    }
  }
  useEffect(() => {
    dispatch(fetchGroups());
  }, [dispatch]);

  const [showCommentDiv, setshowCommentDiv] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const resp = await getReviews();
        const reviews = resp.data.reviews.filter((r) => r.group === id);
        setReviews(reviews);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };
    fetchReviews();
  }, [id]);

  const onHandleShowComments = (reviewid) => {
    setshowCommentDiv(!showCommentDiv);
    setcommentid(reviewid)
  };

  const [isInputClicked, setIsInputClicked] = useState(false);

  const group = groups.find((group) => group._id === id);

  if (!group) {
    return <div>Group not found</div>;
  }

  const { image_url, title, description, members } = group;

  const onCheckUserLoggedin = async (e) => {
    e.preventDefault();
    let memId;
    if (token) {
      memId = decodeToken(token);
    }
    try {
      if (!review) {
        return;
      }
      const userId = memId._id;

      const result = await postReview(userId, userType, id, review);
      console.log("result", result);
      if (result.data.success) {
        setReview("");
        // Refresh reviews after posting a new one
        const resp = await getReviews();
        const updatedReviews = resp.data.reviews.filter((r) => r.group === id);
        setReviews(updatedReviews);
      }
    } catch (error) {
      console.error("Token decode error:", error);
      // logout()
      // navigate("/login");
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#f0e9e0] pb-24">
      <section className="w-full h-[53vh] relative">
        <img src={image_url} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 w-full h-full bg-[#000] opacity-[70%] flex justify-center items-center"></div>
        <section className="w-full h-full flex flex-col items-center justify-center absolute top-0 gap-3">
          <div
            className="w-36 h-36 text-[#102316] rounded-full flex justify-center items-center"
            style={{
              background:
                "linear-gradient(90deg, rgba(50,82,66,1) 0%, rgba(57,122,74,1) 35%, rgba(113,183,130,1) 74%, rgba(50,82,66,1) 100%)",
            }}
          >
            <p className="font-samurai text-[5.5rem]">{title.slice(0, 1)}</p>
          </div>
          <h1 className="capitalize text-[#efefef] opacity-[60%] text-5xl text-center md:text-[4rem] mt-4">
            {title}
          </h1>
          <p className="text-center w-[90%] text-[1.9rem] text-[#efefef] opacity-[60%]">
            {description}
          </p>
        </section>
      </section>
      <section className="min-h-screen">
        <aside className="flex justify-between bg-[#fdfdff] border-b-[2.5px] border-[#9797967b] text-[#102316] font-semibold">
          <div className="flex gap-4">
            <h3 className="text-[1.6rem] py-3 px-8 border-r-[#e5e5e3] border-r-[2px] border-b-[3.3px] border-b-[#457777]">
              Feed
            </h3>
            <h3 className="text-[1.6rem] py-3 px-8 border-[#e5e5e3] border-r-[2px]">
              Members
            </h3>
            <h3 className="text-[1.6rem] py-3 px-8 border-[#e5e5e3] border-r-[2px]">
              Files
            </h3>
          </div>
          <div className="flex gap-4 items-center">
            <h3 className="text-[1.6rem] py-3 px-5 border-x-[2px] ">Public</h3>
            <h3 className="text-[1.6rem] py-3 px-5 border-r-[2px]">
              {members?.length} Members
            </h3>
          </div>
        </aside>
        <section className="flex px-8 py-5 gap-12">
          <aside
            className={`${showCommentDiv
              ? "hidden"
              : "block w-[70%] h-full border-r-[1.5px] border-[#9797967b] ml-2"
              }`}
          >
            <section className="text-2xl w-[100%] px-4 py-5 flex gap-4">
              <input
                type="text"
                placeholder="Write Something to the group ✍️"
                className="px-4 py-8 w-[85%] outline-none bg-[#f9f6f3]"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <button
                type="submit"
                className="bg-secondary px-11 text-textPrimary cursor-pointer"
                onClick={onCheckUserLoggedin}
              >
                Send
              </button>
            </section>
            <div className="flex flex-col gap-6">
              {reviews.map((data) => (
                <Feeds
                  key={data._id}
                  onHandleShowComments={onHandleShowComments}
                  data={data}
                />
              ))}
            </div>
          </aside>
          <aside
            className={`${showCommentDiv
              ? "block w-[70%] h-full border-r-[1.5px] border-[#9797967b]"
              : "hidden"
              }`}
          >
            <section className="text-2xl w-[100%] px-4 py-5">
              <p className="text-3xl font-bold mb-4">356 Comments</p>
              <div className="flex gap-5 items-center">
                <div className="bg-[#db8200] w-24 h-24 flex justify-center items-center rounded-full">
                  <span className="text-5xl text-white">V</span>
                </div>
                <div className="w-[80%] flex flex-col gap-4 items-end">
                  <div
                    className={`${isInputClicked
                      ? "w-full border-b-[2px] border-[#000000e3]"
                      : "w-full border-b-[1.5px] border-[#9797967b]"
                      }`}
                  >
                    <input
                      onClick={() => {
                        setIsInputClicked(!isInputClicked);
                      }}
                      type="text"
                      placeholder="Add a comment"
                      className="w-full outline-none bg-[#f0e9e0] p-2"
                      value={commentInput}
                      onChange={(e) => { setcommentinput(e.target.value) }}
                    />
                  </div>
                  {isInputClicked && (
                    <div className="flex items-center gap-5">
                      <div
                        onClick={() => setIsInputClicked(false)}
                        className="cursor-pointer"
                      >
                        Cancel
                      </div>
                      <div className="bg-[#397a4a] text-textPrimary px-5 py-3 rounded-full"
                        onClick={onHandleCommentPost}
                      >
                        Comment
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <Comments />
              <Comments />
              <Comments />
              <Comments />
            </section>
          </aside>
          <aside className="w-[30%]">
            <div className="border-b-[1.5px] border-[#9797967b] flex justify-between items-center">
              <h3 className="text-[1.6rem] py-3 px-5 font-bold">
                {members?.length} Members
              </h3>
              <p className="text-[1.6rem] py-3 px-5 text-[#457777] font-bold">
                See All
              </p>
            </div>
            <div className="py-12 flex gap-4 flex-wrap">
              <MembersUi name="therapistOne" />
              <MembersUi name="therapistTwo" />
              <MembersUi name="therapistThree" />
              <MembersUi name="therapistFour" />
              <MembersUi name="therapistFive" />
              <MembersUi name="therapistSix" />
              <MembersUi name="therapistOne" />
              <MembersUi name="therapistTwo" />
              <MembersUi name="therapistThree" />
              <MembersUi name="therapistFour" />
            </div>
            <div className="border-b-[1.5px] border-[#9797967b] flex justify-between items-center">
              <h3 className="text-[1.6rem] py-3 px-5 uppercase font-bold">
                Upcoming Events
              </h3>
              <p className="text-[1.6rem] py-3 px-5 text-[#457777] font-bold">
                See All
              </p>
            </div>

            <div className="px-5 py-3 grid grid-cols-[70%_30%] gap-2">
              <h2 className="text-[1.55rem]">Dr. Imxfg Meeting</h2>
              <h4 className="text-[1.55rem]">Today</h4>

              <h2 className="text-[1.55rem]">Developers Assembly in the R.</h2>
              <h4 className="text-[1.55rem]">Tomorrow</h4>
              <h2 className="text-[1.55rem]">Reviewing The New UX.</h2>
              <h4 className="text-[1.55rem]">07/21/14</h4>
              <h2 className="text-[1.55rem]">Product Presention to Team</h2>
              <h4 className="text-[1.55rem]">08/02/14</h4>
            </div>
            <div className="border-b-[1.5px] border-[#9797967b]">
              <h3 className="text-[1.6rem] py-3 px-5 uppercase font-bold">
                DESCRIPTION
              </h3>{" "}
            </div>
            <p className="px-5 py-3 text-[1.55rem]">{description}</p>
          </aside>
        </section>
      </section>
    </main>
  );
};

export default GroupJoined;