import { configureStore, createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'store-test',
  initialState: {
    profile: 'retail',
  },
  reducers: {
    toggleProfile: (slieState) => {
      if (slieState.profile === 'retail') {
        slieState.profile = 'business';
      } else {
        slieState.profile = 'retail';
      }
    },
  },
});

export const { toggleProfile } = testSlice.actions;

export const store = configureStore({
  reducer: {
    testReducer: testSlice.reducer,
  },
});
