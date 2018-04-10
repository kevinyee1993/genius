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
end
