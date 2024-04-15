# Schema Class for Serializing a Feature
class FeatureDetailDTO
  # Converts an entity into a hash
  #
  # @param feature [Feature] The entity to convert'
  # @return [Hash] The converted hash
  def self.from_entity(feature)
    {
      id: feature.id,
      type: 'feature',
      attributes: {
        external_id: feature.feature_id,
        mag: feature.mag.to_f,
        place: feature.place,
        time: feature.time,
        url: feature.url,
        tsunami: feature.tsunami,
        mag_type: feature.mag_type,
        title: feature.title
      },
      coordinates: {
        longitude: feature.longitude.to_f,
        latitude: feature.latitude.to_f
      }
    }
  end
end
