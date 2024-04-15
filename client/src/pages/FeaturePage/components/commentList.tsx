import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Comment } from "../../../models/comment.dto";

export const CommentsList = ({ comments }: { comments: Comment[] | undefined}) => {

  if (!comments) return <p>No comments yet.</p>;
  return (
    <div>
      {comments.map((comment) => (
        <Card key={comment.id} className="mb-2">
          <CardContent>
            <p>{comment.body}</p>
          </CardContent>
        </Card>
      ))}
      {comments.length === 0 && <p>No comments yet.</p>}
    </div>
  );
};
