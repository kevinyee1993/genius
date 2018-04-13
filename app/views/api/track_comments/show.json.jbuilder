json.extract! @comment, :id, :body, :track_id, :author_id
json.author @comment.author
json.score @comment.score

json.upvotes @comment.upvotes
