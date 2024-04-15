import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Feature } from "../../models/feature.dto";
import { Comment } from "../../models/comment.dto";
import { constants } from "../../constants";

import { Map } from "./components/map";
import { CommentsList } from "./components/commentList";
import { NewCommentForm } from "./components/commentForm";
import { FeatureDetails } from "./components/featureDetails";

function FeaturePage() {
  const params = useParams<{ featureId: string }>();

  const handleSubmitComment = () => {

    refetchComments();
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["features", params.featureId],
    queryFn: async () => {
      const response = await fetch(
        `${constants.API_URL}/features/${params.featureId}`
      );
      return (await response.json()) as Feature;
    },
  });

  const { data: dataComments, error: errorComments, refetch: refetchComments } = useQuery({
    queryKey: ["comments", params.featureId],
    queryFn: async () => {
      const response = await fetch(
        `${constants.API_URL}/features/${params.featureId}/comments`
      );
      return (await response.json()) as Comment[];
    },
  });

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>No data</div>;

  if (errorComments) return <div>Failed to load comments</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6 h-full">
          <Map
            lat={data?.coordinates.latitude}
            lng={data?.coordinates.longitude}
            title={data?.attributes.title}
          />
        </div>
        <div className="col-span-6">
          <FeatureDetails feature={data} />
          <h1 className="text-2xl font-bold"> Comments </h1>
          <div className="p-4 bg-gray-100 rounded-lg">
            <CommentsList comments={dataComments} />
            <NewCommentForm
              onSubmit={ async (newComment) => {
                // Handle new comment submission (e.g., send to backend)
                await fetch(`${constants.API_URL}/features/${params.featureId}/comments`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ body: newComment }),
                });

                refetchComments();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturePage;
