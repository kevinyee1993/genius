class Api::TrackCommentsController < ApplicationController
  def index
    track_id = params[:track_id]
    @track = Track.find_by(id: track_id)
    @comments = @track.comments
  end

  def show
    track_id = params[:track_id]
    currentTrack = Track.find_by(id: track_id)
    @comment = currentTrack.comments[params[:id].to_i - 1]
  end

  def create
    @comment = TrackComment.new(track_comment_params)
    @comment.author_id = current_user.id
    @comment.track_id = params[:track_id]

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end


#test this later
  def update
    track_id = params[:track_id]
    current_track = current_user.tracks.find(params[:id])
    @comment = current_track.comments.find(params[:id].to_i - 1)

    if @comment.update_attributes(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    track_id = params[:track_id]
    current_track = current_user.tracks.find(params[:id])
    @comment = current_track.comments.find(params[:id].to_i - 1)

    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def track_comment_params
    params.require(:track_comment).permit(:body)
  end
end