import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../../App";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    question: "",
    answer: "",
    takeaway: "",
    thumbnail: null,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/adminlogin");
    }
  }, [token, navigate]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    console.log(`Name: ${name}, Value: ${value}`); 
    setFormData((prev) => ({
      ...prev,
      [name]: name === "thumbnail" ? files[0] : value,
    }));
  };

  const handleBlogCreate = useCallback(
    async (e) => {
      e.preventDefault();
      const { title, content, category, thumbnail,question,answer,takeaway } = formData;

      if (
        !title ||
        !content ||
        !category ||
        !thumbnail ||
        !question ||
        !answer
      ) {
        setError(
          "All fields are required: title, content, category, and thumbnail."
        );
        return;
      }

      const data = new FormData();
      data.append("title", title);
      data.append("content", content);
      data.append("category", category);
      data.append("thumbnail", thumbnail);
      data.append("question", question);
      data.append("answer", answer);
      data.append("takeaway", takeaway);
      console.log("data", data);

      try {
        await axios.post(`${url}/api/admin/createBlog`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSuccess("Blog created successfully!");
        setError("");
        setFormData({
          title: "",
          content: "",
          category: "",
          answer: "",
          question: "",
          takeaway: "",
          thumbnail: null,
        });
      } catch (error) {
        console.error("Error creating blog:", error);
        setError(error.response?.data?.message || "Failed to create blog");
        setSuccess("");
      }
    },
    [formData, token]
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[70%] p-8 space-y-6 bg-white rounded-lg shadow">
        <h2 className="font-bold text-center text-5xl">Create Blog</h2>
        {error && <p className="text-red-500 text-xl">{error}</p>}
        {success && <p className="text-green-500 text-xl">{success}</p>}
        <form
          className="space-y-4 grid grid-cols-2 gap-24"
          onSubmit={handleBlogCreate}
        >
          <section>
            <div>
              <label
                className="block my-2 text-xl font-medium text-gray-700"
                htmlFor="title"
              >
                Blog Title
              </label>
              <input
                id="title"
                name="title"
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
                htmlFor="content"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                value={formData.content}
                onChange={handleInputChange}
                rows={4}
                required
              ></textarea>
            </div>
            <div>
              <label
                className="block my-2 text-xl font-medium text-gray-700"
                htmlFor="question"
              >
                Question
              </label>
              <input
                id="question"
                name="question"
                type="text"
                className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                value={formData.question}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                className="block my-2 text-xl font-medium text-gray-700"
                htmlFor="answer"
              >
                Answer
              </label>
              <textarea
                id="answer"
                name="answer"
                className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                value={formData.answer}
                onChange={handleInputChange}
                rows={4}
                required
              ></textarea>
            </div>
          </section>
          <section>
            <div>
              <label
                className="block my-2 text-xl font-medium text-gray-700"
                htmlFor="category"
              >
                Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                value={formData.category}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                className="block my-2 text-xl font-medium text-gray-700"
                htmlFor="takeaway"
              >
                Any Takeaway ??
              </label>
              <textarea
                id="takeaway"
                name="takeaway"
                className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                value={formData.takeaway}
                onChange={handleInputChange}
                rows={6}
              ></textarea>
            </div>
            <div>
              <label
                className="block my-2 text-xl font-medium text-gray-700"
                htmlFor="thumbnail"
              >
                Thumbnail Image
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                type="file"
                className="w-full p-6 border border-gray-300 rounded-lg text-xl"
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-6 text-white bg-secondary rounded-lg hover:bg-primary text-xl mt-[3.6rem]"
            >
              Create Blog
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
