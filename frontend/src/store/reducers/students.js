import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

const initialState = {
  isLoading: false,
  error: "",
  students: [],
};

export const getAllStudents = createAsyncThunk("students/get", async () => {
  try {
    const { data, status } = await API.getAllStudents();
    if (status == 400 || status == 500) return "err";
    else return data;
  } catch (err) {
    throw new Error("Error while fetching students..", err);
  }
});

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducer: {
    resetStudents() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllStudents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllStudents.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getAllStudents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.students = action.payload;
    });
  },
});

export const { resetStudents } = studentSlice.actions;

export default studentSlice.reducer;
