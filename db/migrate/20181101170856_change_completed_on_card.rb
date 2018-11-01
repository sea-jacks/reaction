class ChangeCompletedOnCard < ActiveRecord::Migration[5.1]
  def change
    change_column :cards, :completed, :boolean, :default => false, :nil => false
  end
end
