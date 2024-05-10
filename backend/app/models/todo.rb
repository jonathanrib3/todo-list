class Todo < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true, unless: Proc.new { title.present? }
  validates :description, length: { maximum: 200 }
end
