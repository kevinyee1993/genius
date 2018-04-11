# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  img_url         :string
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :tracks,
    foreign_key: :author_id,
    class_name: 'Track'

  has_many :annotations,
    foreign_key: :author_id,
    class_name: 'Annotation'

  has_many :track_comments,
    foreign_key: :author_id,
    class_name: 'TrackComment'

  has_many :track_comment_upvotes,
    foreign_key: :user_id,
    class_name: 'TrackCommentUpvote'

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  private

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)

    return @user if @user && @user.is_password?(password)
    nil
  end


end
