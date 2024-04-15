export type Comments = Comment[]

export interface Comment {
  id: number
  body: string
  feature_id: number
  created_at: string
  updated_at: string
}
