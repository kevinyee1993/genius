export const createTrack = (track) => (
  $.ajax({
    method: 'POST',
    url: 'api/tracks',
    data: { track }
  })
);


export const fetchAllTracks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tracks'
  })
);

export const fetchSingleTrack = (id) => (
  $.ajax({
    method: 'GET',
    url:  `api/tracks/${id}`
  })
);
