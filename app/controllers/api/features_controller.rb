require_relative '../../utils/controller_utils'
require_relative '../../schemas/feature_response_dto'

class Api::FeaturesController < ApplicationController
  def index
    begin
      page, per_page = check_pagination_params(params)
    rescue StandardError => e
      render json: { error: e.message }, status: :unprocessable_entity
      return
    end

    features = if params[:mag_type]
                 Feature.where(mag_type: params[:mag_type])
               else
                 Feature
               end

    features_total_count = features.count
    features = features.offset((page - 1) * per_page).limit(per_page)

    pagination_obj = {
      current_page: page,
      total: features_total_count,
      per_page: per_page
    }

    # Map the features to a response object
    data = features.map do |feature|
      FeatureDetailDTO.from_entity(feature)
    end

    response_obj = {
      data: data,
      pagination: pagination_obj
    }

    render json: response_obj
  end

  # GET /api/features/count
  def count
    count = Feature.count
    render json: { count: count }
  end

  def show
    feature = Feature.find(params[:id])
    render json: feature
  end
end
