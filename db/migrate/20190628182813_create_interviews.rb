class CreateInterviews < ActiveRecord::Migration[5.2]
  def change
    create_table :interviews do |t|
      t.boolean :evaluation
      t.references :evaluation, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
