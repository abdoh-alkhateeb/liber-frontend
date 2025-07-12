"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Thread, Post } from "@/types";
import PostCard from "@/components/cards/PostCard";
import NewPostForm from "@/components/forms/NewPostForm";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ThreadDetailPage() {
  const { id } = useParams();
  const [thread, setThread] = useState<Thread | undefined>();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${baseUrl}/api/threads`;
        let response = await axios.get(url);
        setThread(response.data.find((item: Thread) => item._id == id));

        url = `${baseUrl}/api/threads/${id}/posts`;
        response = await axios.get(url);
        setPosts(response.data);
      } catch {}
    };

    fetchData();
  }, []);

  const handleNewPost = async (newPost: Post) => {
    const url = `${baseUrl}/api/posts`;
    const response = await axios.post(url, newPost);

    setPosts((prev) => [response.data, ...prev]);
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
    <div>Loading...</div>
  );
}
