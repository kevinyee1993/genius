class Api::TracksController < ApplicationController
  def index
      @tracks = Track.all
  end

  def show
    @track = Track.find(params[:id])
  end

  def create
    @track = Track.new(track_params)
    @track.author_id = current_user.id

    if @track.save
      render "api/tracks/show"
    else
      render json: @track.errors.full_message, status: 422
    end
  end

  def update
    @track = current_user.tracks.find(params[:id])
    if @track.update_attributes(track_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :lyrics, :artist, :album, :img_url)
  end
end
