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

require 'test_helper'

class TrackCommentUpvoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
