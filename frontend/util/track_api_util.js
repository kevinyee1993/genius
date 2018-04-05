export const createTrack = () => (
  $.ajax({
    method: 'POST',
    url: `api/tracks/`
  })
);
