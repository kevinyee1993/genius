json.track do
  json.extract! @track, :id, :title, :lyrics, :artist, :album, :img_url
end
