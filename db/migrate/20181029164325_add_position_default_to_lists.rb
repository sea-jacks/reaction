class AddPositionDefaultToLists < ActiveRecord::Migration[5.1]
  def change
    change_column :lists, :position, :float, :default => 0
  end
end
