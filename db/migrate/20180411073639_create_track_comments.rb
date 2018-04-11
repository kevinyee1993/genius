class CreateTrackComments < ActiveRecord::Migration[5.1]
  def change
    create_table :track_comments do |t|
      t.text :body, null: false
      t.integer :track_id, null: false
      t.integer :author_id, null: false
      t.integer :parent_comment_id

      t.timestamps
    end

    add_index(:track_comments, :track_id)
    add_index(:track_comments, :author_id)
    add_index(:track_comments, :parent_comment_id)

  end
end
