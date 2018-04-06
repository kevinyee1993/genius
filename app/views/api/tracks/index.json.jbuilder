@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :lyrics, :artist, :album, :img_url
  end
end
