class ChangeNullConstraintOnCard < ActiveRecord::Migration[5.1]
  def change
    change_column :cards, :completed, :boolean, :default => false, null: false
  end
end
