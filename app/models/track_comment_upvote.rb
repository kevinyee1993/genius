# == Schema Information
#
# Table name: track_comment_upvotes
#
#  id               :integer          not null, primary key
#  user_id          :integer          not null
#  track_comment_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class TrackCommentUpvote < ApplicationRecord
  validates :user_id, :track_comment_id, :vote_value, presence: true
  validates :user_id, uniqueness: { scope: [:track_comment_id] }
  validates :vote_value, inclusion: { in: [1, -1] }

  belongs_to :track,
    foreign_key: :track_comment_id,
    class_name: 'TrackComment'

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'
end
