class Api::AnnotationsController < ApplicationController

  def index
    # track_id = params[:track_id]
    # @track = Track.find_by(id: track_id)
    @annotations = Annotation.all
  end

  def show
    track_id = params[:track_id]
    currentTrack = Track.find_by(id: track_id)
    @annotation = currentTrack.annotations[params[:id]]
  end

#need to manually enter the track id and the user id
  def create
    @annotation = Annotation.new(annotation_params)
    @annotation.author_id = current_user.id
    @annotation.track_id = params[:track_id]

    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def update
    @annotation = Annotation.find(params[:id])

    if @annotation.update_attributes(annotation_params)
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def destroy
    @annotation = Annotation.find(params[:id])

    if @annotation.destroy
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  private
  def annotation_params
    params.require(:annotation).permit(:body, :start_idx, :end_idx)
  end
end
