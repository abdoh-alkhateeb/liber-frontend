export type Comment = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  postId: string;
  author: string;
  content: string;
};

export type Post = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  threadId: string;
  author: string;
  content: string;
};

export type Thread = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  cover: string;
};
