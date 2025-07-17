import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  cpr: [],
};

export const getAllCPRs = createAsyncThunk("cpr/get", async () => {
  try {
    const { data, status } = await API.getAllCPRs();
    if (status == 400 || status == 500) return "err";
    else return data;
  } catch (err) {
    throw new Error("Error while fetching CPRs..", err);
  }
});

export const cprSlice = createSlice({
  name: "cpr",
  initialState,
  reducers: {
    resetCpr() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCPRs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCPRs.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getAllCPRs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cpr = action.payload;
    });
  },
});

export const { resetCpr } = cprSlice.actions;

export default cprSlice.reducer;
