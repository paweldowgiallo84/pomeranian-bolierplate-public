import { createSlice } from '@reduxjs/toolkit';

const initialValue = 0;

const saveToLocalStorage = (value) => {
  localStorage.setItem('reduxCounterSlicevalue', JSON.stringify(value));
};

const getFromLocalStorage = (value) => {
  const storedValue = localStorage.getItem('reduxCounterSlicevalue');
  return !storedValue ? initialValue : JSON.parse(storedValue);
};

export const counterSlice = createSlice({
  name: 'store-counter',
  initialState: {
    value: getFromLocalStorage(),
    errorMessage: '',
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      saveToLocalStorage(state.value);
    },
    incrementBy: (state, actions) => {
      state.value += actions.payload;
      saveToLocalStorage(state.value);
    },
    decrementBy: (state, actions) => {
      if (state.value < actions.payload)
        state.errorMessage = 'Wartość od której chcesz odjąć jest za niska';
      else state.value -= actions.payload;
      saveToLocalStorage(state.value);
    },
    resetErrorMessage: (state) => {
      state.errorMessage = '';
    },
  },
});

export const { increment, incrementBy, decrementBy, resetErrorMessage } =
  counterSlice.actions;
