class Schedule < ActiveRecord::Base

  belongs_to :subject, dependent: :destroy
  has_many :activities
end
