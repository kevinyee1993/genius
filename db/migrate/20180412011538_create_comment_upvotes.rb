class CreateCommentUpvotes < ActiveRecord::Migration[5.1]
  def change
    create_table :comment_upvotes do |t|
      t.integer :user_id, null: false
      t.integer :comment_id, null: false
      t.integer :vote_value, null: false, inclusion: [1, -1]

      t.timestamps
    end

    add_index(:comment_upvotes, [:user_id, :comment_id], unique: true)
  end
end
