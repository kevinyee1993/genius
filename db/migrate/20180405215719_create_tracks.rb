class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.text :lyrics, null: false
      t.string :artist, null: false
      t.string :album
      t.string :img_url
      t.integer :author_id, null: false
      t.timestamps
    end

    add_index :tracks, :title, unique: true
  end
end
