class Api::CommentUpvotesController < ApplicationController

  # def show
  #   @comment = TrackComment.first
  #   render 'api/track_comments/show'
  # end

  def create
    @upvote = CommentUpvote.new(upvote_params)
    @upvote.user_id = current_user.id
    @comment = TrackComment.find_by(id: params[:track_comment_id].to_i)
    @upvote.comment_id = @comment[:id]

    if @upvote.save
      render 'api/track_comments/show'
    else
      render json: @upvote.errors.full_messages, status: 422
    end

  end

  def destroy
    @upvote = CommentUpvote.find(params[:id])


    if @upvote.destroy
      render 'api/track_comments/show'
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  def update
    @upvote = CommentUpvote.find(params[:id])
    @comment = @upvote.comment

    if @upvote.update(upvote_params)
      render 'api/track_comments/show'
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  private
  def upvote_params
    params.require(:comment_upvote).permit(:vote_value)
  end

end
