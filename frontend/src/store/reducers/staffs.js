import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  coaches: [],
};

export const getAllCoaches = createAsyncThunk("coaches/get", async () => {
  try {
    const { data, status } = await API.getAllCoaches();
    if (status == 400 || status == 500) return "error";
    else return data;
  } catch (err) {
    throw new Error("Error while fetching students..", err);
  }
});

export const staffSlice = createSlice({
  name: "coaches",
  initialState,
  reducers: {
    resetStaffs() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCoaches.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCoaches.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getAllCoaches.fulfilled, (state, action) => {
      state.isLoading = false;
      state.coaches = action.payload;
    });
  },
});

export const { resetStaffs } = staffSlice.actions;

export default staffSlice.reducer;
