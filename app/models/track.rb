# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  lyrics     :text             not null
#  artist     :string           not null
#  album      :string
#  img_url    :string
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
  validates :title, :lyrics, :artist, :author_id, presence: true
  validates :title, uniqueness: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'

  has_many :annotations,
    foreign_key: :track_id,
    class_name: 'Annotation'

  has_many :comments,
    foreign_key: :track_id,
    class_name: 'TrackComment'

  # def parse_text(id)
  #   ans_arr = []
  #   i = 0
  #   until we have no more lyrics characters
  #   Track.find(id).lyrics.char do |ch|
  #     #check are you associated with an annotation?
  #       # if you are, create this el
  #         Annotation.find_by()
  #         ans_arr << [start_idx, end_idx, true]
  #         i = end_idx
  #       # if you arent, create this el
  #         ans_arr << [start_idx, end_idx, false]
  #   end
  # end
  # ans_arr
  # #added to your json builder so your front end sees this array
end
