import { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../../App";
import { IoIosAddCircleOutline } from "react-icons/io";
import EditPoint from "./EditPoint";
import { assets } from "../../../assets/assets";
import { fetchGroups } from "../../../store/slice/GroupSlice";
import { useDispatch, useSelector } from "react-redux";

const EditGroup = () => {
  const navigate = useNavigate();
  const { id } = useParams()

  const [formData, setFormData] = useState({
    title: "",
    groupDescription: "",
    goals: "",
    groupFor: "",
    topics: "",
    groupFocus: {
      points: [
        {
          heading: "",
          description: "",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "",
        description: "",
      },
    ],
    meetingStructure: {
      weeklyDiscussions: "",
      expertSessions: "",
    },
    isPublic: true,
    image_url: "",
  });
  const [EditPoints, setEditPoints] = useState([{ id: 1 }]);
  const [whoCanJoinPoints, setwhoCanJoinPoints] = useState([{ id: 1 }]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { groups, loading } = useSelector((state) => state.groups);
  const group = useMemo(() => groups.find(g => g._id === id), [groups, id]);
  const [isPublicChecked, setIsPublicChecked] = useState(true);


  console.log("is public",isPublicChecked)
  useEffect(() => {
    setIsPublicChecked(group.isPublic);
  }, [group.isPublic]);
  useEffect(() => {
    dispatch(fetchGroups());
  }, [dispatch]);
  const handleCheckboxChange = () => {
    setIsPublicChecked((prev) => !prev);
    setFormData((prev) => ({
      ...prev,
      isPublic: !prev.isPublic,
    }));
  };
  const handleAddPoint = () => {
    setEditPoints((prev) => [...prev, { id: prev.length + 1 }]);
    setFormData((prev) => ({
      ...prev,
      groupFocus: {
        ...prev.groupFocus,
        points: [...prev.groupFocus.points, { heading: "", description: "" }],
      },
    }));
  };

  const handleAddwhoCanJoinPoint = () => {
    setwhoCanJoinPoints((prev) => [...prev, { id: prev.length + 1 }]);
    setFormData((prev) => ({
      ...prev,
      whoCanJoin: [...prev.whoCanJoin, { category: "", description: "" }],
    }));
  };

  useEffect(() => {
    if (!token) {
      navigate("/adminlogin");
    }
  }, [token, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("groupFocus-")) {
      const index = parseInt(name.split("-")[1]);
      const field = name.split("-")[2];

      setFormData((prev) => {
        const updatedPoints = [...prev.groupFocus.points];
        updatedPoints[index][field] = value;
        return {
          ...prev,
          groupFocus: {
            ...prev.groupFocus,
            points: updatedPoints,
          },
        };
      });
    } else if (name.startsWith("whoCanJoin-")) {
      const index = parseInt(name.split("-")[1]);
      const field = name.split("-")[2];

      setFormData((prev) => {
        const updatedWhoCanJoin = [...prev.whoCanJoin];
        updatedWhoCanJoin[index][field] = value;
        return {
          ...prev,
          whoCanJoin: updatedWhoCanJoin,
        };
      });
    } else if (name in formData.meetingStructure) {
      setFormData((prev) => ({
        ...prev,
        meetingStructure: {
          ...prev.meetingStructure,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleGroupEdit = useCallback(
    async (e) => {
      e.preventDefault();

      const {
        title,
        groupDescription,
        goals,
        groupFor,
        topics,
        meetingStructure,
        image_url,
      } = formData;

      const data = {};

      if (title) data.title = title;
      if (groupDescription) data.groupDescription = groupDescription;
      if (goals) data.goals = goals;
      if (groupFor) data.groupFor = groupFor;
      if (topics) data.topics = topics;
      if (image_url) data.image_url = image_url;
      if (typeof formData.isPublic === "boolean") {
        data.isPublic = isPublicChecked;
      }

      if (meetingStructure.weeklyDiscussions) {
        data.meetingStructure = data.meetingStructure || {};
        data.meetingStructure.weeklyDiscussions =
          meetingStructure.weeklyDiscussions;
      }

      if (formData.groupFocus.points.length > 0) {
        const validPoints = formData.groupFocus.points.filter(
          (point) => point.heading && point.description
        );

        if (validPoints.length > 0) {
          data.groupFocus = {
            points: validPoints.map((point) => ({
              heading: point.heading,
              description: point.description,
            })),
          };
        }
      }


      if (formData.whoCanJoin.length > 0) {
        const validWhoCanJoin = formData.whoCanJoin.filter(
          (points) => points.category && points.description
        );

        if (validWhoCanJoin.length > 0) {
          data.whoCanJoin = validWhoCanJoin.map((points) => ({
            category: points.category,
            description: points.description,
          }));
        }
      }
      console.log("data=", data);

      try {
        await axios.put(`${url}/api/groups/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSuccess("Group edited successfully!");
        setError("");
        setFormData({
          title: "",
          groupDescription: "",
          goals: "",
          groupFor: "",
          topics: "",
          groupFocus: { points: [] },
          meetingStructure: { weeklyDiscussions: "", expertSessions: "" },
          isPublic: true,
          image_url: "",
        });
        setEditPoints([{ id: 1 }]);
      } catch (error) {
        console.error("Error creating group:", error);
        setError(error.response?.data?.message || "Failed to create group");
        setSuccess("");
      }
    },
    [formData, token, EditPoints]
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[70%] p-8 space-y-6 bg-[#d0ded9] rounded-lg shadow">
        <h2 className="font-bold text-center text-5xl">Edit Group</h2>
        {error && <p className="text-red-500 text-xl">{error}</p>}
        {success && <p className="text-green-500 text-xl">{success}</p>}
        <form className="w-full flex flex-col" onSubmit={handleGroupEdit}>
          <section className="flex w-full gap-12">
            {" "}
            <section className="w-[50%] min-h-[60vh] pb-4">
              <div className="flex items-center gap-5">
                <h2 className="text-xl font-bold">Private</h2>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={!isPublicChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div>
                <label
                  className="block my-2 text-xl font-medium text-gray-700"
                  htmlFor="title"
                >
                  Group Name
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  className="block my-2 text-xl font-medium text-gray-700"
                  htmlFor="description"
                >
                  Group Description
                </label>
                <textarea
                  id="groupDescription"
                  name="groupDescription"
                  className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                  value={formData.groupDescription}
                  onChange={handleInputChange}
                  rows={2}
                ></textarea>
              </div>
              <div>
                <label
                  className="block my-2 text-xl font-medium text-gray-700"
                  htmlFor="question"
                >
                  Write the goals of this group
                </label>
                <input
                  id="goals"
                  name="goals"
                  type="text"
                  className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                  value={formData.goals}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  className="block my-2 text-xl font-medium text-gray-700"
                  htmlFor="groupFor"
                >
                  Write who is this group for
                </label>
                <input
                  id="groupFor"
                  name="groupFor"
                  type="text"
                  className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                  value={formData.groupFor}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  className="block my-2 text-xl font-medium text-gray-700"
                  htmlFor="topics"
                >
                  Mention some of the topics the group will have
                </label>
                <input
                  id="topics"
                  name="topics"
                  type="text"
                  className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                  value={formData.topics}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  className="block my-2 text-xl font-medium text-gray-700"
                  htmlFor="thumbnail"
                >
                  Thumbnail Image
                </label>
                <input
                  id="image_url"
                  name="image_url"
                  type="text"
                  className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                  value={formData.image_url}
                  onChange={handleInputChange}
                />
                {/* <input
                id="thumbnail"
                name="thumbnail"
                type="file"
                className="w-full p-6 border border-gray-300 bg-[#039a77] rounded-lg text-xl"
                onChange={handleInputChange}
            
              /> */}
              </div>
            </section>
            <section className="w-[50%] h-[65vh] flex justify-start items-start">
              <img
                src={assets.formImage}
                alt=""
                className="w-full object-cover h-full"
              />
            </section>
          </section>
          <section className="flex gap-12">
            <section className="w-[50%] h-[60%]">
              <aside>
                <h2 className="text-xl font-semibold">Meeting Structure</h2>
                <div>
                  <label
                    className="block my-2 text-xl font-medium text-gray-700"
                    htmlFor="title"
                  >
                    Weekly Discussions
                  </label>
                  <textarea
                    type="text"
                    name="weeklyDiscussions"
                    className="rounded-md p-4 mt-3 w-full  border text-xl"
                    value={formData.meetingStructure.weeklyDiscussions}
                    onChange={handleInputChange}
                  />
                </div>
              </aside>
              <div className="w-full  studentInfo">
                <div className="w-full">
                  <h1 className=" my-2 text-xl font-medium text-gray-700">
                    Group Focus
                  </h1>

                  {Array.isArray(formData.groupFocus.points) &&
                    formData.groupFocus.points.map((point, index) => (
                      <EditPoint
                        key={index}
                        id={index + 1}
                        heading={point.heading}
                        description={point.description}
                        handleInputChange={handleInputChange}
                        inputHeadingName={`groupFocus-${index}-heading`}
                        inputDescName={`groupFocus-${index}-description`}
                      />
                    ))}
                </div>
              </div>
              <div
                className="w-[50%] mb-2 mt-4 flex  gap-2 cursor-pointer"
                onClick={handleAddPoint}
              >
                <IoIosAddCircleOutline className="text-[#018B75] font-bold text-2xl point-cursor mb-[0.1rem]" />
                <h1 className="text-[#018B75] mb-[0.2rem] font-bold point-cursor text-xl">
                  Add another point
                </h1>
              </div>
            </section>
            <section className="w-[50%] h-[60%]">
              <h2 className="text-xl font-semibold">Meeting Structure</h2>
              <div>
                <label
                  className="block my-2 text-xl font-medium text-gray-700"
                  htmlFor="title"
                >
                  Expert Sessions
                </label>
                <textarea
                  type="text"
                  name="expertSessions"
                  className="rounded-md p-4 mt-3 w-full  border text-xl"
                  value={formData["meetingStructure"]["expertSessions"]}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full  studentInfo">
                <div className="w-full">
                  <h1 className=" my-2 text-xl font-medium text-gray-700">
                    Who Can Join
                  </h1>

                  {Array.isArray(formData.whoCanJoin) &&
                    formData.whoCanJoin.map((point, index) => (
                      <EditPoint
                        key={index}
                        id={index + 1}
                        heading={point.category}
                        description={point.description}
                        handleInputChange={handleInputChange}
                        inputHeadingName={`whoCanJoin-${index}-category`}
                        inputDescName={`whoCanJoin-${index}-description`}
                      />
                    ))}
                </div>
              </div>
              <div
                className="w-[50%] mb-2 mt-4 flex  gap-2 cursor-pointer"
                onClick={handleAddwhoCanJoinPoint}
              >
                <IoIosAddCircleOutline className="text-[#018B75] font-bold text-2xl point-cursor mb-[0.1rem]" />
                <h1 className="text-[#018B75] mb-[0.2rem] font-bold point-cursor text-xl">
                  Add another point
                </h1>
              </div>
            </section>
          </section>

          <button
            type="submit"
            className="w-full py-6 text-white bg-[#039a77] rounded-lg hover:bg-secondary text-2xl mt-[2rem]"
          >
            Edit Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditGroup;
