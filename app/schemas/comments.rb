# Schema Class for Serializing a `Comment`
class CommentDetailDTO
  # Converts an entity into a hash
  #
  # @param comment [Comment] The entity to convert'
  # @return [Hash] The converted hash
  def self.from_entity(comment)
    {
      id: comment.id,
      feature_id: comment.feature_id,
      body: comment.body
    }
  end

end
