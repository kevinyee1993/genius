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

export const updateAnnotation = (trackId, annotation) => (
  $.ajax({
    method: 'PATCH',
    url: `api/tracks/${trackId}/annotations/${annotation.id}`,
    data: { annotation }
  })
);

export const deleteAnnotation = (trackId, annotationId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${trackId}/annotations/${annotationId}`,
  })
);
