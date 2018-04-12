# == Schema Information
#
# Table name: comment_upvotes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  comment_id :integer          not null
#  vote_value :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CommentUpvote < ApplicationRecord
  validates :user_id, :comment_id, :vote_value, presence: true
  validates :vote_value, inclusion: { in: [1, -1] }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :comment,
    foreign_key: :comment_id,
    class_name: 'TrackComment'
end
