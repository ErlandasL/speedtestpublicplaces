class AddInternetSpeedTable < ActiveRecord::Migration[7.0]
  def change
    create_table :internet_speeds, id: :uuid do |t|
      t.references :place, null: false, foreign_key: true, index: true, type: :uuid
      t.float :download_speed, null: false, scale: 2, precision: 15 # 25.55 mbps
      t.string :download_units, null: false

      t.timestamps
      # This adds in created_at and updated_at by default
    end
  end
end
