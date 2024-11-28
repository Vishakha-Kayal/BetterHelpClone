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
export const postReviewDisLikes = async ({userId, userType,reviewId}) => {
  try {
    const data = {
      userId,
      userType,
      reviewId
    }
    const response = await axios.post(`${url}/api/groups/review/dislikes`, data);
    return response;
  } catch (error) {
    console.error("Error fetching groups:", error);
  }
}

export const postReviewLikes = async ({userId, userType,reviewId}) => {
  try {
    const data = {
      userId,
      userType,
      reviewId
    }
    const response = await axios.post(`${url}/api/groups/review/likes`, data);
    return response;
  } catch (error) {
    console.error("Error fetching groups:", error);
  }
}
export const postCommentLikes = async ({userId, formattedUsertype,reviewId,commentId}) => {
  try {
    const data = {
      userId,
      userType:formattedUsertype,
      reviewId,
      commentId
    }
    console.log("data=",data)
    const response = await axios.post(`${url}/api/groups/review/comment/likes`, data);
    return response;
  } catch (error) {
    console.error("Error fetching groups:", error);
  }
}

export const postCommentDisLikes = async ({userId, formattedUsertype,reviewId,commentId}) => {
  try {
    const data = {
      userId,
      userType:formattedUsertype,
      reviewId,commentId
    }
    const response = await axios.post(`${url}/api/groups/review/comment/dislikes`, data);
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
export const getMembers = async ({groupId}) => {
  try {
    const response = await axios.post(`${url}/api/groups/allMembers`,{groupId});
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

