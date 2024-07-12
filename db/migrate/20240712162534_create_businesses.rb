class CreateBusinesses < ActiveRecord::Migration[7.1]
  def change
    create_table :businesses do |t|
      t.string :business_name
      t.string :owners_name
      t.text :business_description
      t.string :location
      t.integer :contact

      t.timestamps
    end
  end
end
