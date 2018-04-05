class Track < ApplicationRecord
  validates :title, :lyrics, :artist, :author_id, presence: true
  validates :title, uniqueness: true
end
