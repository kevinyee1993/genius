class AddIndexToAuthorId < ActiveRecord::Migration[5.1]
  def change
    add_index(:annotations, :author_id)
  end
end
