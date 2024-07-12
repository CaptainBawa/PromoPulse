class Business < ApplicationRecord
  has_one_attached :image
  validates :contact, presence: true
  validates :location, presence: true
  validates :business_name, presence: true
end
