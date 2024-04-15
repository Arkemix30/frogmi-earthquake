import { Feature } from "../../../models/feature.dto";
import { Button } from "@/components/ui/button";

export const FeatureDetails = ({ feature }: { feature: Feature }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold">Earthquake Feature Details</h2>
        <p>
          <strong>Title: </strong>
          {feature.attributes.title}
        </p>
        <p>
          <strong>External ID: </strong>
          {feature.attributes.external_id}
        </p>
        <p>
          <strong>Magnitude: </strong>
          {feature.attributes.mag}
        </p>
        <p>
          <strong>Place: </strong>
          {feature.attributes.place}
        </p>
        <p>
          <strong>Timestamp: </strong>
          {feature.attributes.time}
        </p>
        <p>
          <strong>Tsunami: </strong>
          {feature.attributes.tsunami ? "Yes" : "No"}
        </p>
        <p>
          <strong>Magnitude Type: </strong>
          {feature.attributes.mag_type}
        </p>
        <p>
          <strong>View Full Report: </strong>
          <Button
            variant="outline"
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => window.open(feature.attributes.url, "_blank")}
          >
            View
          </Button>
        </p>
      </div>
    </div>
  );
};
