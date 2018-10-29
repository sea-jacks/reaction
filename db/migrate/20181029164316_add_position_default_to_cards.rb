class AddPositionDefaultToCards < ActiveRecord::Migration[5.1]
  def change
    change_column :cards, :position, :float, :default => 0
  end
end
