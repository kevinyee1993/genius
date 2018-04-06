//POST   /api/users/:user_id/tracks(.:format)     api/tracks#create
//LEAVE THIS FOR LATER BECAUSE USERS DONT NEED TO CREATE TRACK YET
//THIS IS JUST BONUS STUFF

// export const createTrack = (track) => (
//   $.ajax({
//     method: 'POST',
//     url: 'api/tracks',
//     data: { track }
//   })
// );


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
