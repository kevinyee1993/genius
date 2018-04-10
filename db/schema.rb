# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180410222910) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: :cascade do |t|
    t.text "body", null: false
    t.integer "author_id", null: false
    t.integer "track_id", null: false
    t.integer "start_idx", null: false
    t.integer "end_idx", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_annotations_on_author_id"
    t.index ["end_idx"], name: "index_annotations_on_end_idx", unique: true
    t.index ["start_idx"], name: "index_annotations_on_start_idx", unique: true
    t.index ["track_id"], name: "index_annotations_on_track_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.string "title", null: false
    t.text "lyrics", null: false
    t.string "artist", null: false
    t.string "album"
    t.string "img_url"
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_tracks_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img_url"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
