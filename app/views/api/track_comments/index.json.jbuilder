
@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body, :track_id, :author_id
    json.author comment.author
  end
end
