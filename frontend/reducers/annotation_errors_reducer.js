import { RECEIVE_ANNOTATION_ERRORS } from '../actions/annotation_actions';

export default(state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ANNOTATION_ERRORS:
      return action.errors;
    default:
      return [];
  }
};
