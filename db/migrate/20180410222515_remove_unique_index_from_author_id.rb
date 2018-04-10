class RemoveUniqueIndexFromAuthorId < ActiveRecord::Migration[5.1]
  def change
    remove_index :annotations, :author_id
  end
end
