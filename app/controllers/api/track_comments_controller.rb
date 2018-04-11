class Api::TrackCommentsController < ApplicationController
  def index
    track_id = params[:track_id]
    @track = Track.find_by(id: track_id)
    @comments = @track.comments
  end

  def show
    track_id = params[:track_id]
    currentTrack = Track.find_by(id: track_id)
    # @comment = currentTrack.comments.find_by(id: params[:id])
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

  def update

  end

  def destroy

  end

  private
  def track_comment_params
    params.require(:track_comment).permit(:body)
  end
end
