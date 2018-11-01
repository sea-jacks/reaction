class Api::CardsController < ApplicationController
  def create
    @card = Card.new(card_params)

    if @card.save
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = 'Invalid list data provided'
    render 'api/shared/error', status: :unprocessable_entity
  end

  def update
    @card = Card.find(params[:id])
    @card.update_attributes(card_params)

    if @card.save
      render :update, status: :accepted
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = 'Invalid list data provided'
    render 'api/shared/error', status: :unprocessable_entity
  end

  def show
    @card = Card.find(params[:id])
  rescue ActionController::ParameterMissing
    @error = 'Invalid list data provided'
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def card_params
    params.require(:card).permit(:title,
                                 :list_id,
                                 :due_date,
                                 :labels,
                                 :description,
                                 :comments_count,
                                 :completed,
                                 :position)
  end
end
