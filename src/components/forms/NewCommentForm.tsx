"use client";

import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { NewCommentData } from "@/types";

export default function NewCommentForm({
  postId,
  onComment,
}: {
  postId: string;
  onComment: (comment: NewCommentData) => void;
}) {
  const { user } = useUser();
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) return;

    onComment({
      postId,
      author: user?.email as string,
      content,
    });

    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a comment..."
        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </form>
  );
}
