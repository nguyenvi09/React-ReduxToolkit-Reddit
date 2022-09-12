import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Vi",
    age: "20",
    about: "I'am a front end developper",
    avaUrl:
      "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    themeColor: "#ff9051",
    pending: false,
    error: false,
  },
  //reducers sẽ chứa những cách để làm việc với userSlice này
  // nó là những func để hành động với initialState
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },

    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },

    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
