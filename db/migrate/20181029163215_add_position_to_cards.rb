class AddPositionToCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :position, :float
  end
end
