# take off all comments after to test that this is working correctly
id = 1
@annotations.each do |annotation|
  json.set! id do
    # json.set! annotation.id do
    json.extract! annotation, :id, :body, :author_id, :track_id, :start_idx, :end_idx
    id += 1
  end
end
