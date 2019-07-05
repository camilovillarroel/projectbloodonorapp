class AddApprovedToOption < ActiveRecord::Migration[5.2]
  def change
    add_column :options, :approved, :boolean
  end
end
