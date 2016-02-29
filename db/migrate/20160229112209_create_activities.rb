class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.datetime :starting_time
      t.datetime :finishing_time
      t.string :name

      t.timestamps null: false
    end
  end
end
