//import { ActionTypes } from '@mui/base';
import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

//const actions = [register, logIn, logOut, refreshUser];

const initialState = {
  user: { name: null, email: null },
  token: null,
  // user: {},
  // token: '',
  isLoggedIn: false,
  isRefreshing: false,
  authIsLoading: false,
  authError: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,

  // reducers: {
  //   setCredentials: (state, action) => {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token
  //     state.isLoggedIn = true;
  //   },
  //   unsetCredentials: (state, _) => {
  //     state.user = { name: null, email: null };
  //     state.token = null;
  //     state.isLoggedIn = false;
  //   },
  // },

  // extraReducers: {
  //   [actions.register.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [actions.logIn.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [actions.logOut.fulfilled](state, action) {
  //     state.user = { name: null, email: null };
  //     state.token = null;
  //     state.isLoggedIn = false;
  //   },
  //   [actions.refreshUser.fulfilled](state, action) {
  //     state.user = action.payload;
  //     state.isLoggedIn = true;
  //   },
  // },

  // extraReducers: builder => {
  //   builder
  //     .addCase(register.pending, state => {
  //       state.authIsLoading = true;
  //       state.authError = null;
  //     })
  //     .addCase(register.fulfilled, (state, action) => {
  //       state.user = action.payload.user;
  //       state.token = action.payload.token;
  //       state.authIsLoading = false;
  //       state.isLoggedIn = true;
  //     })
  //     .addCase(register.rejected, (state, action) => {
  //       state.authIsLoading = false;
  //       state.authError = action.payload;
  //     })

  //     .addCase(logIn.pending, state => {
  //       state.authIsLoading = true;
  //       state.authError = null;
  //     })
  //     .addCase(logIn.fulfilled, (state, action) => {
  //       state.user = action.payload.user;
  //       state.token = action.payload.token;
  //       state.authIsLoading = false;
  //       state.isLoggedIn = true;
  //     })
  //     .addCase(logIn.rejected, (state, action) => {
  //       state.authIsLoading = false;
  //       state.authError = action.payload;
  //     })

  //     .addCase(logOut.pending, state => {
  //       state.authIsLoading = true;
  //       state.authError = null;
  //     })
  //     .addCase(logOut.fulfilled, state => {
  //       state.user = {};
  //       state.token = '';
  //       state.authIsLoading = false;
  //       state.authIsLoading = false;
  //     })
  //     .addCase(logOut.rejected, (state, action) => {
  //       state.authIsLoading = false;
  //       state.authError = action.payload;
  //     })

  //     .addCase(refreshUser.pending, state => {
  //       state.isRefreshing = true;
  //       state.authIsLoading = true;
  //       state.authError = null;
  //     })
  //     .addCase(refreshUser.fulfilled, (state, action) => {
  //       state.user = action.payload;
  //       state.authIsLoading = false;
  //       state.isLoggedIn = true;
  //       state.isRefreshing = false;
  //     })
  //     .addCase(refreshUser.rejected, (state, action) => {
  //       state.authIsLoading = false;
  //       state.isRefreshing = false;
  //       state.token = '';
  //       state.authError = action.payload;
  //     })
      
    // .addMatcher(isAnyOf(...actions.map(action => action.fulfilled)), state => {
    //   state.isLoggedIn = true;
    //   state.authIsLoading = false;
    //    state.authError = null;
    //  })
    // .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
    //    state.authIsLoading = true;
    //  })
    // .addMatcher(isAnyOf(...actions.map(action => action.rejected)), state => {
    //   state.authIsLoading =false;
    //   state.authError = action.payload;
    //  })
  //},

   extraReducers: {
    [register.pending](state) {
       state.authIsLoading = true;
     },
     [register.fulfilled](state, action) {
      state.user = action.payload.user;
       state.token = action.payload.token;
      state.isLoggedIn = true;
       state.authIsLoading = false;
      state.authError = null;
     },
    [register.rejected](state, action) {
      state.authError = action.payload;
      state.authIsLoading = false;
    },
    [logIn.pending](state) {
      state.authIsLoading = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
       state.isLoggedIn = true;
       state.authIsLoading = false;
       state.authError = null;
     },
     [logIn.rejected](state, action) {
       state.authError = action.payload;
       state.authIsLoading = false;
     },

    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
     state.isLoggedIn = false;
      state.authIsLoading = false;
      state.authError = null;
    },
    [refreshUser.pending](state) {
       state.isRefreshing = true;
       state.authIsLoading = false;
     },
    [refreshUser.fulfilled](state, action) {
       state.user = action.payload;
      state.isLoggedIn = true;
       state.isRefreshing = false;
       state.authIsLoading = false;
      state.authError = null;
     },
     [refreshUser.rejected](state, action) {
       state.isRefreshing = false;
      state.authError = action.payload;
       state.authIsLoading = false;
     },
   },
});
export const { setCredentials, unsetCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
