class AddVoteValueColumnToTrackCommentUpvotes < ActiveRecord::Migration[5.1]
  def change
    add_column :track_comment_upvotes, :vote_value, :integer, null: false, inclusion: [1, -1]
  end
end
