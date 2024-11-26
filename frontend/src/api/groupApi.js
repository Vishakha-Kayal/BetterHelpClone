import axios from "axios";
import { url } from "../App";

export const fetchAllGroups = async () => {
  try {
    const response = await axios.get(`${url}/api/groups`);
    return response.data.groups
  } catch (error) {
    console.error("Error fetching groups:", error);
  }
}

export const addMember = async (userId, userType, groupId) => {
  const data = {
    userId, userType, groupId
  }
  const response = await axios.post(`${url}/api/groups/members`, data)
  if (response) {
    return response;
  }

}

export const postReview = async (userId, userType, id, review) => {
  try {
    const data = {
      createdBy: userId,
      userType,
      content: review,
      groupId: id
    }
    const response = await axios.post(`${url}/api/groups/review`, data);
    return response;
  } catch (error) {
    console.error("Error fetching groups:", error);
  }
}

export const getReviews = async () => {
  try {
    const response = await axios.get(`${url}/api/groups/review`);
    return response
  } catch (error) {
    console.error("Error fetching groups:", error);
  }
}
export const postComment = async ({ reviewId, content, createdBy,createdByModel }) => {
  const data = {
    reviewId, content, createdBy,createdByModel
  };
  return await axios.post(`${url}/api/groups/reviews/comments`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const fetchComments = async (reviewId) => {
  return await axios.post(`${url}/api/groups/reviews/fetchComments`,{reviewId});
};

