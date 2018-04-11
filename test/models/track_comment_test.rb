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

require 'test_helper'

class TrackCommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
