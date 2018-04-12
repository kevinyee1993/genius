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

require 'test_helper'

class CommentUpvoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
