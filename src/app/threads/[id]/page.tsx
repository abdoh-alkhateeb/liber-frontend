"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Thread, Post, NewPostData } from "@/types";
import { fetchThreads, fetchPosts, createPost } from "@/lib/api";
import LoadingSpinner from "@/components/LoadingSpinner";
import PostCard from "@/components/cards/PostCard";
import NewPostForm from "@/components/forms/NewPostForm";

export default function ThreadDetailPage() {
  const { id }: { id: string } = useParams();
  const [thread, setThread] = useState<Thread | undefined>();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setThread((await fetchThreads()).find((item) => item._id == id));
        setPosts(await fetchPosts(id));
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleNewPost = async (newPost: NewPostData) => {
    try {
      newPost = await createPost(newPost);
      setPosts((prev) => [newPost as Post, ...prev]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return thread ? (
    <div>
      <h2 className="mb-4 text-2xl font-bold capitalize">{thread.name}</h2>

      <NewPostForm threadId={thread._id} onPost={handleNewPost} />

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  );
}
