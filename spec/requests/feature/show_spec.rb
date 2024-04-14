require 'rails_helper'

RSpec.describe Api::FeaturesController, type: :request do
  describe 'GET /api/features/:id' do
    let(:feature) { FactoryBot.create(:feature) }

    context 'with valid id' do
      before do
        get "/api/features/#{feature.id}"
      end

      it 'returns success status' do
        expect(response).to have_http_status(:ok)
      end

      it 'renders the requested feature' do
        expect(JSON.parse(response.body)).to eq(feature.as_json)
      end
    end

    context 'with invalid id' do
      before do
        get '/api/features/0'
      end

      it 'returns not found status' do
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
