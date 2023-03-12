import { createSlice, isAnyOf } from '@reduxjs/toolkit';
//import { nanoid } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const actions = [fetchContacts, addContact, deleteContact];

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
        state.filter = action.payload;
    },
},

extraReducers: (builder) => {
  builder
  .addCase(fetchContacts.fulfilled, (state, action) => {
    state.items = action.payload;
  })
  .addCase(addContact.fulfilled, (state, action) => {
    state.items.push(action.payload);
  })
  .addCase(deleteContact.fulfilled, (state, action) => {
    const idx = state.items.findIndex(item => item.id === action.payload.id);
    state.items.splice(idx, 1);
  })
  .addMatcher(
    isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
        state.isLoading = false;
        state.error = null;
    }
)
.addMatcher(isAnyOf(...actions.map(action => action.pending)),
    state => {
    state.isLoading = true;
})
.addMatcher(
    isAnyOf(...actions.map(action => action.rejected)),
        (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    }
)
}

  // extraReducers: {
  //   [fetchContacts.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },

  //   [addContact.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = [action.payload, ...state.items];
  //   },
  //   [addContact.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },

  //   [deleteContact.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },
  //   [deleteContact.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

//export const { addNewContact, deleteContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
