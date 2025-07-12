export type Comment = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  postId: string;
  author: string;
  content: string;
};

export type NewCommentData = Omit<Comment, "_id" | "createdAt" | "updatedAt">;

export type Post = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  threadId: string;
  author: string;
  content: string;
};

export type NewPostData = Omit<Post, "_id" | "createdAt" | "updatedAt">;

export type Thread = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  cover: string;
};
