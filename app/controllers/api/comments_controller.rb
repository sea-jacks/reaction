class Api::CommentsController < ApplicationController
  def create
    card = Card.find(params[:card_id])
    @comment = Comment.new(comments_params.merge({card: card}))

    if @comment.save
      render :create, status: :created
    else
      @error = @comment.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    @error = 'Invalid card id provided'
    render 'api/shared/error', status: :not_found
  rescue ActionController::ParameterMissing
    @error = 'Invalid comment data provided'
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def comments_params
    params.require(:comment).permit(:text)
  end
end
