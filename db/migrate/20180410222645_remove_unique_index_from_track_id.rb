class RemoveUniqueIndexFromTrackId < ActiveRecord::Migration[5.1]
  def change
    remove_index :annotations, :track_id
  end
end
