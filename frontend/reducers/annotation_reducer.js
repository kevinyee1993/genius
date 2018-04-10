import merge from 'lodash/merge';

import { RECEIVE_ANNOTATION, RECEIVE_ALL_ANNOTATIONS, REMOVE_ANNOTATION } from '../actions/annotation_actions';


const AnnotationReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_ANNOTATIONS:
      return merge({}, action.annotations);
    case RECEIVE_ANNOTATION:
      return merge({}, state, {[action.annotation.id]: action.annotation});
    case REMOVE_ANNOTATION:
      let newState = merge({}, state);
      delete newState[action.annotationId];
      return newState;
    default:
      return state;
  }
};

export default AnnotationReducer;
