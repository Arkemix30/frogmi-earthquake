require 'rails_helper'

RSpec.describe Api::FeaturesController, type: :request do
  describe 'GET /api/features' do
    context 'with valid pagination params' do
      before do
        get '/api/features', params: { page: 2, per_page: 10 }
      end

      it 'returns success status' do
        expect(response).to have_http_status(:ok)
      end

      it 'renders response with data and pagination information' do
        expect(JSON.parse(response.body)).to include('data', 'pagination')
      end
    end

    context 'with no valid pagination params' do
      before do
        get '/api/features', params: { page: 2, per_page: 1001 }
      end

      it 'returns unprocessable entity status' do
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it 'renders error message' do
        expect(JSON.parse(response.body)).to include('error')
      end
    end
  end
end
