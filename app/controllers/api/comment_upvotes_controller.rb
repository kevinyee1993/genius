class Api::CommentUpvotesController < ApplicationController

  def create
    @upvote = CommentUpvote.new(upvote_params)
    @upvote.user_id = current_user.id
    @upvote.comment_id = Comment.find(params[:track_comment_id])

#not sure if I want to render show or index here
#do i even need to render anything here..? can just go to comments and call the score
#put that in the comment json
#render the comments show??
    if @upvote.save
      # render :show
    else
      render json: @upvote.errors.full_messages, status: 422
    end

  end

  def delete
    @upvote = CommentUpvote.find(params[:id])

    if @upvote.destroy
      #don't need to render anything if you destroy
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  def update
    @upvote = CommentUpvote.find(params[:id])

    if @upvote.update(upvote_params)
      #not sure what to render here
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  private
  def upvote_params
    params.require(:comment_upvotes).permit(:vote_value)
  end

end
