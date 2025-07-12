import axios from "axios";
import { Thread, Post, Comment } from "../types";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!baseUrl) {
  throw new Error("Environment variable NEXT_PUBLIC_BACKEND_URL must be set.");
}

export async function fetchThreads(): Promise<Thread[]> {
  const url = `${baseUrl}/api/threads`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchPosts(threadId: string): Promise<Post[]> {
  const url = `${baseUrl}/api/threads/${threadId}/posts`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchComments(postId: string): Promise<Comment[]> {
  const url = `${baseUrl}/api/posts/${postId}/comments`;
  const response = await axios.get(url);
  return response.data;
}

export async function createPost(newPost: Post): Promise<Post> {
  const url = `${baseUrl}/api/posts`;
  const response = await axios.post(url, newPost);
  return response.data;
}

export async function createComment(newComment: Comment): Promise<Comment> {
  const url = `${baseUrl}/api/comments`;
  const response = await axios.post(url, newComment);
  return response.data;
}
