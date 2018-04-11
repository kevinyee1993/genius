
//is this the right way to do
export const fetchTrackComments = (trackId) => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${ trackId }/track_comments`
  })
);

// export const fetchTrackComment = (trackId, commentId) => (
//   $.ajax({
//     method: 'GET',
//     url: `api/tracks/${ trackId }/track_comments/${ commentId }`
//   })
// );

export const createTrackComment = (trackId, track_comment ) => (
  $.ajax({
    method: 'POST',
    url: `api/tracks/${ trackId }/track_comments`,
    data: { track_comment }
  })
);


//need to test updateTrackComment and destroyTrackComment works correctly
export const updateTrackComment = (track_comment) => (
  $.ajax({
    method: 'PATCH',
    url: `api/track_comments/${ track_comment.id }`,
    data: { track_comment }
  })
);

export const destroyTrackComment = (commentId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/track_comments/${ commentId }`
  })
);
