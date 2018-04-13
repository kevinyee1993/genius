
@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body, :track_id, :author_id
    json.author comment.author
    json.score comment.score
    json.upvotes comment.upvotes
  end
end
