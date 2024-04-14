require_relative '../utils/feature_dto'
require_relative '../utils/utils'
# require_relative '../../app/models/feature'

namespace :earthquake do
  desc 'Fetch 30 days of earthquakes features and saves it into database'
  task fetch_data: :environment do
    puts 'Fetching data from source...'

    response = Faraday.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
    if response.status != 200
      puts "Error when fetching data: #{response.status}"
      return
    end

    puts 'Data fetched successfully!'
    data = JSON.parse(response.body)

    features_to_save = []

    puts 'Checking if features already exist in the database...'
    data['features'].each do |raw_feature|
      feature_obj = FeatureApiDTO.from_json_response(raw_feature)

      next unless feature_valid?(feature_obj)

      feature_entity = Feature.find_or_initialize_by(feature_id: feature_obj.feature_id)
      # If the feature is not in the database, append to the list
      next if feature_entity.persisted?

      # Fill the feature entity and append to the list
      features_to_save << feature_obj.to_hash
    end

    puts "Inserting #{features_to_save.length} features into the database..."
    begin
      Feature.insert_all(features_to_save)
      puts 'Data saved successfully!'
    rescue ActiveRecord::RecordInvalid => e
      puts "Error when saving features: #{e.message}"
    end

    puts 'Task completed successfully!'
  end
end
