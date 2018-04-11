
//is this the right way to do
export const fetchTrackComments = (trackId) => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${ trackId }/track_comments`
  })
);

export const fetchTrackComment = (trackId, commentId) => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${ trackId }/track_comments/${ commentId }`
  })
);

export const createTrackComment = (trackId, comment ) => (
  $.ajax({
    method: 'POST',
    url: `api/tracks/${ trackId }/track_comments`,
    data: comment 
  })
);
