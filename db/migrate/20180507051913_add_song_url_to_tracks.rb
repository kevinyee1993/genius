class AddSongUrlToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :song_url, :string
  end
end
