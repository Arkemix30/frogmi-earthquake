export interface FeatureData {
  data: Feature[];
  pagination: Pagination;
}

export interface Feature {
  id: number;
  type: string;
  attributes: FeatureAttributes;
  coordinates: FeatureCoordinates;
}

export interface FeatureAttributes {
  external_id: string;
  mag: number;
  place: string;
  time: string;
  url: string;
  tsunami: boolean;
  mag_type: string;
  title: string;
}

export interface FeatureCoordinates {
  longitude: number;
  latitude: number;
}

export interface Pagination {
  current_page: number;
  total: number;
  per_page: number;
}
