export const fetchAllAnnotations = (trackId) => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${trackId}/annotations`
  })
);

export const fetchAnnotation = (trackId, annotationId) => (
  $.ajax({
    method: 'GET',
    url:  `api/tracks/${trackId}/annotations/${annotationId}`
  })
);

export const createAnnotation = (trackId, annotation) => (
  $.ajax({
    method: 'POST',
    url: `api/tracks/${trackId}/annotations`,
    data: { annotation }
  })
);

export const updateAnnotation = ({ annotation }) => (
  $.ajax({
    method: 'PATCH',
    url: `api/tracks/${annotation.track_id}/annotations/${annotation.id}`,
    data: { annotation }
  })
);

export const deleteAnnotation = ( {annotation} ) => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${annotation.track_id}/annotations/${annotation.id}`,
  })
);
