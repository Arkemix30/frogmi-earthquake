require_relative '../../schemas/comments'
class Api::CommentsController < ApplicationController
  before_action :set_feature
  def index
    @comments = @feature.comments
    render json: @comments
  end

  def create
    unless params[:body].present?
      render json: { error: "Field 'body' cannot be empty or null" }, status: :unprocessable_entity
      return
    end

    @comment = @feature.comments.create(body: params[:body])
    render json: @comment
  end

  private

  def set_feature
    @feature = Feature.find(params[:feature_id])
  end
end
