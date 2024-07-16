import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contactBook",
  initialState: {
    contacts: [],
  },
  reducers: {
    addToContacts: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
});

export const { addToContacts } = contactSlice.actions;
