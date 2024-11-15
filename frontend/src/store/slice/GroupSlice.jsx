import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { fetchAllGroups } from "../../api/groupApi";

const initialState = {
  groups: [
    {
      title: "",
      groupDescription: "",
      goals: "",
      groupFor: "",
      topics: "",
      groupFocus: { points: [{ heading: "", description: "" }] },
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
    },
  ],
  selectedGroup: null,
  loading: false,
  error: null,
};

export const fetchGroups = createAsyncThunk(
  "groups/fetchGroups",
  async (_, { rejectWithValue }) => {
    try {
       const groups=await fetchAllGroups();
    //    console.log(groups);
       return groups
       
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    addGroup(state, action) {},
    editGroup(state, action) {},
    deleteGroup(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroups.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.loading = false;
        state.groups = action.payload;
      })
      .addCase(fetchGroups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
// console.log(groupSlice);
export default groupSlice.reducer;
// export {addGroup,editGroup,deleteGroup}=groupSlice.actions
