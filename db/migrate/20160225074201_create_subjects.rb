class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.string :name
      t.text :description
      t.integer :timelapse
      t.integer :progress

      t.timestamps null: false
    end
  end
end
