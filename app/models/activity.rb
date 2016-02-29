class Activity < ActiveRecord::Base
  belongs_to :schedule, dependent: :destroy 
end
