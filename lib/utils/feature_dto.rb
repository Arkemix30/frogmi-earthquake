require_relative 'utils'

# Represents a data transfer object (DTO) for a feature.
class FeatureApiDTO
  attr_accessor :feature_id, :mag, :place, :time, :url, :tsunami, :mag_type, :title, :longitude, :latitude

  # Initializes a new instance of FeatureApiDTO.
  #
  # @param feature_id [String] The ID of the feature.
  # @param mag [Decimal] The magnitude of the feature.
  # @param place [String] The place of the feature.
  # @param time [Time] The time of the feature.
  # @param url [String] The URL related to the feature.
  # @param tsunami [Boolean] Indicates if there was a tsunami.
  # @param mag_type [String] The type of magnitude measurement.
  # @param title [String] The title of the feature.
  # @param longitude [Decimal] The longitude of the feature.
  # @param latitude [Decimal] The latitude of the feature.
  def initialize(params)
    @feature_id = params[:feature_id]
    @mag = params[:mag]
    @place = params[:place]
    @time = params[:time]
    @url = params[:url]
    @tsunami = params[:tsunami]
    @mag_type = params[:mag_type]
    @title = params[:title]
    @longitude = params[:longitude]
    @latitude = params[:latitude]
  end

  # This method is used to convert JSON data into a FeatureApiDTO object.
  def self.from_json_response(response)
    properties = response['properties']
    geometry = response['geometry']['coordinates']

    data = {
      feature_id: response['id'], mag: properties['mag'],
      place: properties['place'], time: convert_epoch_time_to_iso_string(properties['time']),
      url: properties['url'], tsunami: properties['tsunami'],
      mag_type: properties['magType'], title: properties['title'],
      longitude: geometry[0], latitude: geometry[1]
    }
    new(data)
  end

  # Returns a hash containing the feature details with keys for `feature_id, mag, place,
  # time, url, tsunami, mag_type, title, longitude, and latitude.`
  def to_hash
    {
      feature_id: @feature_id, mag: @mag, place: @place, time: @time, url: @url, tsunami: @tsunami,
      mag_type: @mag_type, title: @title, longitude: @longitude, latitude: @latitude
    }
  end
end
