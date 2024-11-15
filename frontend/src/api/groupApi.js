import axios from "axios";
import { url } from "../App";

export const fetchAllGroups=async()=>{
    try {
        const response = await axios.get(`${url}/api/groups`);
        return response.data.groups
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
}

export const addMember=async(userId,userType,groupId)=>{
  const data={
    userId,userType,groupId
  }
  const response = await axios.post(`${url}/api/groups/members`,data)
  if(response){
    return response;
  }

}

export const postReview=async(memId, id, review)=>{
  try {
    const data={
      createdBy:memId,
      content:review,
      group:id
    }
    const response = await axios.post(`${url}/api/groups/review`,data);
    return response.data.groups
  } catch (error) {
    console.error("Error fetching groups:", error);
  }
}

export const getReviews = async()=>{
  
}