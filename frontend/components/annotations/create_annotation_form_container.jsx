import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateAnnotationForm from './create_annotation_form';

import { createAnnotation } from '../../actions/annotation_actions';

const mapStateToProps = (state, ownProps) => {
  const annotation = {body: ""};
  // const annotation = state.entities.annotation[ownProps.match.params.annotationId] || defaultAnnotation;
  const formType = 'Create Annotation';

  return { annotation, errors: state.errors.annotation };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAnnotation: (trackId, annotation) => dispatch(createAnnotation(trackId, annotation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAnnotationForm);
