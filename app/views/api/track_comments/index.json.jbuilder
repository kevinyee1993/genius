id = 1
@comments.each do |comment|
  json.set! id do
    json.extract! comment, :id, :body, :track_id, :author_id
    id += 1
  end
end
