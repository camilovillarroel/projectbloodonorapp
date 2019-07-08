class AddLatLngToIntitution < ActiveRecord::Migration[5.2]
  def change
    add_column :intitutions, :latitude, :float
    add_column :intitutions, :longitude, :float
  end
end
