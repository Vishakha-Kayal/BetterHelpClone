import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../../App";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/adminlogin");
    }
  }, [navigate]);

  const handleBlogCreate = async (e) => {
    e.preventDefault();
    if (!title || !content || !category || !thumbnail) {
      setError(
        "All fields are required: title, content, category, and thumbnail."
      );
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("thumbnail", thumbnail);

    try {
      await axios.post(`${url}/api/admin/createBlog`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess("Blog created successfully!");
      setError("");
      setThumbnail(null);
      setContent("");
      setTitle("");
      setCategory("");
    } catch (error) {
      console.log("error", error);
      setError(error.response?.data?.message || "Failed to create blog");
      setSuccess("");
    }
    finally{
        setSuccess("")
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-8 space-y-6 bg-white rounded-lg shadow">
        <h2 className="font-bold text-center text-5xl">Create Blog</h2>
        {error && <p className="text-red-500 text-xl">{error}</p>}
        {success && <p className="text-green-500 text-xl">{success}</p>}
        <form className="space-y-4" onSubmit={handleBlogCreate}>
          <div>
            <label
              className="block mb-2 text-xl font-medium text-gray-700"
              htmlFor="title"
            >
              Blog Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full p-6 border border-gray-300 rounded-lg text-xl"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 text-xl font-medium text-gray-700"
              htmlFor="content"
            >
              Blog Content
            </label>
            <textarea
              id="content"
              className="w-full p-6 border border-gray-300 rounded-lg text-xl"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              required
            ></textarea>
          </div>
          <div>
            <label
              className="block mb-2 text-xl font-medium text-gray-700"
              htmlFor="category"
            >
              Category
            </label>
            <input
              id="category"
              type="text"
              className="w-full p-6 border border-gray-300 rounded-lg text-xl"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 text-xl font-medium text-gray-700"
              htmlFor="thumbnail"
            >
              Thumbnail Image
            </label>
            <input
              id="thumbnail"
              type="file"
              className="w-full p-6 border border-gray-300 rounded-lg text-xl"
              onChange={(e) => setThumbnail(e.target.files[0])}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-6 text-white bg-secondary rounded-lg hover:bg-primary text-xl mt-[3.6rem]"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
