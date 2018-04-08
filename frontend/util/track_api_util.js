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

//can this take 2 args?  I need to know who the current user is
//so I can use the id to update the track
//wait actually track has author_id right
//we can just use that??
//TODO: Get back to this if not working... let's test it out first
//takes track and sends it to that url so that it can update it
//BUT that url doesn't exist...?!?!?!?
export const updateTrack = ({ track }) => (
  $.ajax({
    method: 'PATCH',
    // url: `api/users/1/tracks/1`,
    url: `api/users/${track.author_id}/tracks/${track.id}`,
    data: { track }
  })
);
