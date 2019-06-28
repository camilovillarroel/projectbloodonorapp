class AddInfoToHealthworker < ActiveRecord::Migration[5.2]
  def change
    add_column :healthworkers, :name, :string
    add_column :healthworkers, :institution, :string
  end
end
