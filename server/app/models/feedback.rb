class Feedback < ApplicationRecord
    validates :name, presence: true
    validates :title, presence: true
    validates :body, presence: true
end
