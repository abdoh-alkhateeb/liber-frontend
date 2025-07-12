"use client";

import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { NewPostData } from "@/types";

export default function NewPostForm({ threadId, onPost }: { threadId: string; onPost: (post: NewPostData) => void }) {
  const { user } = useUser();
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) return;

    onPost({
      threadId,
      author: user?.email as string,
      content,
    });

    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a new post..."
        className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        rows={3}
      />

      <button
        type="submit"
        className="mt-2 cursor-pointer rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Post
      </button>
    </form>
  );
}
