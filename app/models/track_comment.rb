# == Schema Information
#
# Table name: track_comments
#
#  id                :integer          not null, primary key
#  body              :text             not null
#  track_id          :integer          not null
#  author_id         :integer          not null
#  parent_comment_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class TrackComment < ApplicationRecord
  validates :body, :track_id, :author_id, presence: true

  belongs_to :track,
    foreign_key: :track_id,
    class_name: 'Track'

  has_many :upvotes,
    foreign_key: :track_comment_id,
    class_name: 'TrackCommentUpvote'
end
