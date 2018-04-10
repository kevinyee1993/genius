
  json.set! @annotation.id do
    json.extract! @annotation, :id, :body, :author_id, :track_id, :start_idx, :end_idx
  end
