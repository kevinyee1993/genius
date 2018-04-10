class AddIndexToTrackId < ActiveRecord::Migration[5.1]
  def change
    add_index(:annotations, :track_id)
  end
end
