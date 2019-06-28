class AddInfoToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :users, :phone, :string
    add_column :users, :bloodtype, :string
    add_column :users, :factor, :string
    add_column :users, :previousdonation, :boolean
    add_column :users, :comments, :text
  end
end
