import { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { IoShareSocialOutline } from "react-icons/io5";
import GroupItems from "./GroupItems";
import Header from "../Header";
import Footer from "../Footer/Footer";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroups } from "../../store/slice/GroupSlice";
import { useVerification } from "../../context/verifyToken";
import { addMember } from "../../api/groupApi";
import { jwtDecode } from "jwt-decode";

const AboutGroup = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token ,userType} = useVerification();
  const { groups } = useSelector((state) => state.groups);
  // const [memberToken, setMemberToken] = useState(null);
  const [memberId, setMemberId] = useState(null);
  const [group, setGroup] = useState(null);
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    dispatch(fetchGroups());
  }, [dispatch]);

  useEffect(() => {
    const foundGroup = groups.find((g) => g._id === id);
    if (foundGroup) {
      setGroup(foundGroup);
    }
    const storedMemberToken = localStorage.getItem("memberToken");
    // setMemberToken(storedMemberToken);
    if (storedMemberToken) {
      const mem = jwtDecode(storedMemberToken);
      setMemberId(mem._id);
      // console.log(foundGroup);
      setIsMember(
        foundGroup
          ? foundGroup.members.some((member) => member === memberId)
          : false
      );
      // console.log(memberId);
    }
  }, [groups, id]);

  const onHandleJoin = async () => {
    if (!token) {
      // console.log(token);
      navigate("/login");
      return; // Exit if not logged in
    }
    if (isMember) {
      navigate(`/groups/join/${id}`);
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken._id;

      const result = await addMember(userId, userType, id);
      if (result.data.success) {
        localStorage.setItem("memberToken", result.data.memberToken);
        setIsMember(true);
        toast.success("Successfully joined the group!");
      }
    } catch (error) {
      console.error("Error adding member:", error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  if (!group) {
    return <div className="text-4xl text-center pt-5">Group not found</div>;
  }

  return (
    <>
      <ToastContainer className="text-2xl font-semibold" />
      <Header customBG="true" />
      <section className="w-full min-h-screen bg-[#f0e9e0] flex pt-[9rem] pb-24 ">
        <section
          className="w-[15%] h-full flex justify-center text-6xl cursor-pointer"
          onClick={() => {
            navigate("/groups");
          }}
        >
          <GoArrowLeft />
        </section>
        <section className="w-[76%] h-full flex flex-col relative">
          <aside className="h-[40vh] relative rounded-[1rem] overflow-hidden">
            <img
              src={group.image_url}
              alt={group.title}
              className="w-full h-full"
            />
            <div className="absolute top-0 w-full h-full bg-[#1c1c1c] opacity-[40%] flex justify-center items-center"></div>
          </aside>
          <aside className="py-12 px-6 flex flex-col justify-center gap-4">
            <h1 className="capitalize font-light font-inter text-[#27393a] text-3xl text-center md:text-[4rem] underline">
              {group.title}
            </h1>
            <div className="flex justify-between text-[#2c5724] font-semibold">
              <h1 className="capitalize tracking-tighter font-tertiary text-3xl md:text-[2rem]">
                {group.isPublic ? "public" : "private"}
              </h1>
              <div className="hidden md:flex items-center gap-4 text-3xl">
                <h1 className="capitalize tracking-tighter font-tertiary text-2xl md:text-[1.8rem]">
                  {group.members.length} members
                </h1>
                <IoShareSocialOutline className="text-2xl" />
              </div>
            </div>
            <div className="mx-auto w-[12.1%]">
              <Button
                bg="bg-[#4d9a61]"
                paddingY="py-[0.8rem]"
                text="text-[2rem]"
                borderColor="shadow-[2px_2px_2px_1.3px_#2b5035]"
                hoverbg="hover:bg-[#f0e9e0] hover:text-[#21332a]"
                font="font-bold"
                color="text-textPrimary"
                content={`${isMember ? "Visit" : "Join Group"}`}
                onClick={onHandleJoin}
                isScrolled="true"
              />
            </div>
          </aside>
          {/* Additional content sections */}
          <aside className="mb-4">
            <div className="flex gap-7 mb-7">
              <section className="w-[50%] flex flex-col justify-between col-span-2 px-3 py-4 my-4 bg-hero-texture bg-[#a75d00] rounded-md">
                <h5 className="text-[3.5rem] text-[#efefef] tracking-tight font-overpass font-light mb-4 lg:leading-[5.6rem] lg:text-[4rem]">
                  Overview :
                </h5>
                <p className="text-[1.9rem] text-[#efefef]">
                  {group.groupDescription}
                </p>
              </section>
              <section className="w-[50%] px-3 py-4 bg-hero-texture bg-[#457777] rounded-md my-4">
                <h5 className="text-[3.5rem] text-[#efefef] tracking-tight font-overpass font-light mb-4 lg:leading-[5.6rem] lg:text-[4rem]">
                  Purpose :
                </h5>
                <p className="text-[1.9rem] text-[#efefef]">{group.groupFor}</p>
              </section>
            </div>
            <section className="px-3 py-4 bg-hero-texture bg-[#397a4a] rounded-md flex flex-col my-7">
              <p className="text-[3.5rem] text-[#efefef] tracking-tight font-overpass font-light lg:leading-[5.6rem] lg:text-[4rem]">
                {group.groupFocus.name}
              </p>
              <dl className="my-4">
                {group["groupFocus"]["points"].map((groups) => {
                  return (
                    <GroupItems
                      title={groups.heading}
                      colort="text-[#a6de9b]"
                      colord="text-[#efefef]"
                      key={groups.heading}
                    >
                      {groups.description}
                    </GroupItems>
                  );
                })}
              </dl>
            </section>
            <section className="my-14">
              <h5 className="text-[3.5rem] text-[#21332a] tracking-tight font-overpass font-light mb-4 lg:leading-[5.6rem] lg:text-[4rem]">
                Having A Question 🤔 Who Can Join ??
              </h5>
              <dl className="my-4 flex gap-1">
                {group["whoCanJoin"].map((groups) => {
                  return (
                    <GroupItems
                      title={groups.category}
                      colort="text-[#21332a]"
                      colord="text-[#3b604d] font-semibold"
                      key={groups.category}
                    >
                      {groups.description}
                    </GroupItems>
                  );
                })}
              </dl>
            </section>
            <section className="bg-[#397a4a] px-3 py-4 bg-hero-texture rounded-md my-7">
              <h5 className="text-[3.5rem] text-[#efefef] tracking-tight font-overpass font-light mb-4 lg:leading-[5.6rem] lg:text-[4rem]">
                Meeting Structure
              </h5>
              <dl className="my-4 ">
                {
                  <>
                    <GroupItems
                      title="Weekly Discussions"
                      colort="text-[#ffca0b]"
                      colord="text-[#efefef] font-semibold"
                    >
                      {group["meetingStructure"].weeklyDiscussions}
                    </GroupItems>
                    <GroupItems
                      title="Expert Sessions"
                      colort="text-[#ffca0b]"
                      colord="text-[#efefef] font-semibold"
                    >
                      {group["meetingStructure"].expertSessions}
                    </GroupItems>
                  </>
                }
              </dl>
            </section>
            <div className="absolute right-0 w-[12.1%]">
              <Button
                bg="bg-[#a65d00] text-textPrimary"
                paddingY="py-[0.8rem]"
                isScrolled="true"
                text="text-[2rem]"
                borderColor="shadow-[2px_2px_2px_1.3px_#000]"
                hoverbg="hover:bg-[#f0e9e0] hover:text-[#8a4909]"
                font="font-bold"
                color="text-primary"
                content={`${isMember ? "Visit" : "Join Group"}`}
                navigateTo={`/groups/join/${id}`}
              />
            </div>
          </aside>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default AboutGroup;
