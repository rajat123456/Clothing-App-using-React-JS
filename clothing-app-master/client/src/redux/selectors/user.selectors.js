import { createSelector } from "reselect";

const selectUser = (state) => state.currentUser;

export const selectCurrentUser = createSelector([selectUser], (user) => user);
