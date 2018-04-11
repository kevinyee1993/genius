class CreateTrackCommentUpvotes < ActiveRecord::Migration[5.1]
  def change
    create_table :track_comment_upvotes do |t|
      t.integer :user_id, null: false
      t.integer :track_comment_id, null: false

      t.timestamps
    end

    add_index(:track_comment_upvotes, [:user_id, :track_comment_id], unique: true)
  end
end
