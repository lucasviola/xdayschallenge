class Subject < ActiveRecord::Base
  has_one :schedule, dependent: :destroy
end
