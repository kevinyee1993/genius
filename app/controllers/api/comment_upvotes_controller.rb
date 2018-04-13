class Api::CommentUpvotesController < ApplicationController
  def index
    @upvotes = CommentUpvote.all
  end

  def show
    @upvote = CommentUpvote.find_by(id: params[:id])
  end


  def create
    @upvote = CommentUpvote.new(upvote_params)
    @upvote.user_id = current_user.id
    @comment = TrackComment.find_by(id: params[:track_comment_id].to_i)
    @upvote.comment_id = @comment[:id]

    if @upvote.save
      render :show
    else
      render json: @upvote.errors.full_messages, status: 422
    end

  end

  def destroy
    @upvotes = CommentUpvote.all
    @upvote = CommentUpvote.find(params[:id])
    @comment = @upvote.comment

    if @upvote.destroy
      render :show
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  def update
    @upvote = CommentUpvote.find(params[:id])
    @comment = @upvote.comment

    if @upvote.update(upvote_params)
      render :show
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  private
  def upvote_params
    params.require(:comment_upvote).permit(:vote_value)
  end

end
