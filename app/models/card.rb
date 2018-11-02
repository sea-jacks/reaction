class Card < ApplicationRecord
  belongs_to :list
  has_many :comments

  validates_presence_of :title, allow_blank: false

  def board_id
    list_id = self.list_id
    List.find(list_id).board_id
  end
end
