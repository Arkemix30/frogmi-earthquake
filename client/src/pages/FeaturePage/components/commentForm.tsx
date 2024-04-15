import { useState } from "react";
import { Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewCommentForm = ({
    onSubmit,
  }: {
    onSubmit: (comment: string) => void;
  }) => {
    const [comment, setComment] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(comment);
      setComment(""); // Clear comment after submission
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <Button className="mt-2" type="submit" disabled={!comment}>
          Add Comment
        </Button>
      </form>
    );
  };