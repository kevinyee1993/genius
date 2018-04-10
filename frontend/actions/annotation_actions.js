import * as AnnotationApiUtil from '../util/annotation_api_util';

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const RECEIVE_ALL_ANNOTATIONS = 'RECEIVE_ALL_ANNOTATIONS';
export const REMOVE_ANNOTATION = 'REMOVE_ANNOTATION';
export const RECEIVE_ANNOTATION_ERRORS = 'RECEIVE_ANNOTATION_ERRORS';

export const fetchAllAnnotations = (trackId) => dispatch => (
  AnnotationApiUtil.fetchAllAnnotations(trackId)
  .then(annotations => receiveAllAnnotations(annotations))
);

export const fetchAnnotation = (trackId, annotationId) => dispatch => (
  AnnotationApiUtil.fetchAnnotation(trackId, annotationId)
  .then(annotation => dispatch(receiveAnnotation(annotation)))
);

export const createAnnotation = (trackId, annotation) => dispatch => (
  AnnotationApiUtil.createAnnotation(trackId, annotation)
  .then(annotation => dispatch(receiveAnnotation(annotation)))
);

export const updateAnnotation = (trackId, annotation) => dispatch => (
  AnnotationApiUtil.updateAnnotation(trackId, annotation)
  .then(annotation => dispatch(receiveAnnotation(annotation)))
);

export const deleteAnnotation = (trackId, annotationId) => dispatch => (
  AnnotationApiUtil.deleteAnnotation(trackId, annotationId)
  .then(annotation => removeAnnotation(annotationId))
);

const receiveAllAnnotations = annotations => ({
  type: RECEIVE_ALL_ANNOTATIONS,
  annotations
});

const receiveAnnotation = (annotation) => ({
  type: RECEIVE_ANNOTATION,
  annotation
});

const removeAnnotation = (annotationId) => ({
  type: REMOVE_ANNOTATION,
  annotationId
});
