# == Schema Information
#
# Table name: annotations
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  track_id   :integer          not null
#  start_idx  :integer          not null
#  end_idx    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Annotation < ApplicationRecord
  validates :body, :author_id, :track_id, :start_idx, :end_idx, presence: true
  validates :author_id, :track_id, :start_idx, :end_idx, uniqueness: true

  belongs_to :track,
    foreign_key: :track_id,
    class_name: 'Track'

  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'
end
