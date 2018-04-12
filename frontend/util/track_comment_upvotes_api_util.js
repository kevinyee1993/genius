export const createUpvote = (commentId, voteValue) => (
  $.ajax({
    method: 'POST',
    url: `api/track_comments/${ commentId }/comment_upvotes`,
    data: voteValue
  })
);

export const updateUpvote = (upvote) => (
  $.ajax({
    method: 'PATCH',
    url: `api/comment_upvotes/${ upvote.id }`,
    data: upvote
  })
);

export const destroyUpvote = (upvoteId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/comment_upvotes/${ upvoteId }`
  })
);
