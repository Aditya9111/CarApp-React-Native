import { DETAILS } from "../../../src/data/dummy-data";

const INITIAL_STATE = {
  prod: DETAILS,
};

const ProdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ProdReducer;
