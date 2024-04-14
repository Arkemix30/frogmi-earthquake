require 'time'

# This method is used to convert epoch time in milliseconds to ISO string.
# Example: `1578039200000 => 2020-01-01 00:00:00`
def convert_epoch_time_to_iso_string(time)
  time_in_seconds = time / 1000
  timestamp = Time.at(time_in_seconds)
  timestamp.strftime('%Y-%m-%d %H:%M:%S')
end

# This method is used to check if a feature is valid or not.
# Params to check: `title, url, place, magType`
#
# @param feature_obj [FeatureDTO] The feature object to check.
# @return [Boolean] `true` if the feature is valid, `false` otherwise.
def feature_valid?(feature_obj)
  fields = {
    title: feature_obj.title,
    url: feature_obj.url,
    place: feature_obj.place,
    mag_type: feature_obj.mag_type,
    mag: feature_obj.mag
  }

  feature_valid_by_fields(fields) && feature_valid_by_geom(feature_obj.longitude, feature_obj.latitude)
end

# Validates if the fields are valid or not
#
# @param fields [Hash] The fields to check.
# @return [Boolean] `true` if the fields are valid, `false` otherwise.
def feature_valid_by_fields(fields)
  fields.values.none?(&:nil?) && (fields[:mag] >= -1.0 && fields[:mag] <= 10.0)
end

# Validates if the coordinates are within the range
#
# @param longitude [Decimal] The longitude of the feature.
# @param latitude [Decimal] The latitude of the feature.
# @return [Boolean] `true` if the coordinates are valid, `false` otherwise.
def feature_valid_by_geom(longitude, latitude)
  (longitude >= -180.0 && longitude <= 180.0) && (latitude >= -90.0 && latitude <= 90.0)
end
