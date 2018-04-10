class CreateAnnotations < ActiveRecord::Migration[5.1]
  def change
    create_table :annotations do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :track_id, null: false
      t.integer :start_idx, null: false
      t.integer :end_idx, null: false

      t.timestamps
    end

    add_index :annotations, :author_id, unique: true
    add_index :annotations, :track_id, unique: true
    add_index :annotations, :start_idx, unique: true
    add_index :annotations, :end_idx, unique: true

  end
end
