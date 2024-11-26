import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../../../App";
import { IoIosAddCircleOutline } from "react-icons/io";
import GroupPoint from "./GroupPoint";
import { assets } from "../../../assets/assets";

const AddGroup = () => {
  const navigate = useNavigate();
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
  const [groupPoints, setgroupPoints] = useState([{ id: 1 }]);
  const [whoCanJoinPoints, setwhoCanJoinPoints] = useState([{ id: 1 }]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const token = localStorage.getItem("adminToken");
  const handleAddPoint = () => {
    setgroupPoints((prev) => [...prev, { id: prev.length + 1 }]);
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
      const index = parseInt(name.split("-")[1]); // Extract index from name
      const field = name.split("-")[2]; // Extract field (heading or description)

      setFormData((prev) => {
        const updatedPoints = [...prev.groupFocus.points];
        updatedPoints[index][field] = value; // Update the specific field
        return {
          ...prev,
          groupFocus: {
            ...prev.groupFocus,
            points: updatedPoints,
          },
        };
      });
    } else if (name.startsWith("whoCanJoin-")) {
      const index = parseInt(name.split("-")[1]); // Extract index from name
      const field = name.split("-")[2]; // Extract field (category or description)

      setFormData((prev) => {
        const updatedWhoCanJoin = [...prev.whoCanJoin];
        updatedWhoCanJoin[index][field] = value; // Update the specific field
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

  const handleGroupCreation = useCallback(
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

      if (
        !title ||
        !groupDescription ||
        !goals ||
        !groupFor ||
        !topics ||
        !image_url
      ) {
        setError("All fields are required.");
        return;
      }

      const data = {
        title,
        groupDescription,
        goals,
        groupFor,
        topics,
        groupFocus: {
          points: formData.groupFocus.points.map((point) => ({
            heading: point.heading,
            description: point.description,
          })),
        },
        whoCanJoin: formData.whoCanJoin.map((points) => ({
          category: points.category,
          description: points.description,
        })),
        meetingStructure,
        isPublic: formData.isPublic,
        image_url,
      };

      console.log("data=", data);

      try {
        await axios.post(`${url}/api/admin/createGroup`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSuccess("Group created successfully!");
        setError("");
        setFormData({
          title: "",
          groupDescription: "",
          goals: "",
          groupFor: "",
          topics: "",
          groupFocus: { points: [] },
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
        setgroupPoints([{ id: 1 }]); // Reset group points
      } catch (error) {
        console.error("Error creating group:", error);
        setError(error.response?.data?.message || "Failed to create group");
        setSuccess("");
      }
    },
    [formData, token, groupPoints]
  );
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="min-w-full  md:min-w-[70%] p-8 space-y-6 bg-[#d0ded9] rounded-lg shadow">
        <h2 className="font-bold text-center text-5xl">Add Group</h2>
        {error && <p className="text-red-500 text-xl">{error}</p>}
        {success && <p className="text-green-500 text-xl">{success}</p>}
        <form className="w-full flex flex-col" onSubmit={handleGroupCreation}>
          <section className="flex w-full gap-12">
            {" "}
            <section className="w-full md:w-[50%] min-h-[60vh] pb-4">
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
                  placeholder="OCD Recovery Group"
                  type="text"
                  className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
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
                  placeholder="A space for those with OCD to connect and learn new coping techniques."
                  className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                  value={formData.groupDescription}
                  onChange={handleInputChange}
                  rows={2}
                  required
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
                  placeholder="Share therapeutic approaches and reduce OCD’s impact on daily life."
                  type="text"
                  className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                  value={formData.goals}
                  onChange={handleInputChange}
                  required
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
                  placeholder="People with obsessive-compulsive disorder."
                  type="text"
                  className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                  value={formData.groupFor}
                  onChange={handleInputChange}
                  required
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
                  placeholder="Managing compulsions, thoughts, and rituals."
                  type="text"
                  className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                  value={formData.topics}
                  onChange={handleInputChange}
                  required
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
                  placeholder="Enter Image url"
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
                required
              /> */}
              </div>
            </section>
            <section className="w-[50%] h-[65vh] hidden md:flex justify-start items-start">
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
                    placeholder="Group discussions on breaking compulsive behavior patterns."
                    value={formData.meetingStructure.weeklyDiscussions}
                    onChange={handleInputChange}
                    required
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
                      <GroupPoint
                        key={index}
                        id={index + 1} // Pass the index + 1 as id
                        heading={point.heading} // Pass the heading value
                        description={point.description} // Pass the description value
                        handleInputChange={handleInputChange}
                        inputHeadingName={`groupFocus-${index}-heading`} // Unique name for heading
                        inputDescName={`groupFocus-${index}-description`} // Unique name for description
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
                  placeholder="Sessions with specialists in OCD therapy techniques."
                  value={formData["meetingStructure"]["expertSessions"]}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="w-full  studentInfo">
                <div className="w-full">
                  <h1 className=" my-2 text-xl font-medium text-gray-700">
                    Who Can Join
                  </h1>

                  {Array.isArray(formData.whoCanJoin) &&
                    formData.whoCanJoin.map((point, index) => (
                      <GroupPoint
                        key={index}
                        id={index + 1} // Pass the index + 1 as id
                        heading={point.category} // Pass the category value
                        description={point.description} // Pass the description value
                        handleInputChange={handleInputChange}
                        inputHeadingName={`whoCanJoin-${index}-category`} // Unique name for category
                        inputDescName={`whoCanJoin-${index}-description`} // Unique name for description
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
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddGroup;
