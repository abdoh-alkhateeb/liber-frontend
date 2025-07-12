"use client";

import { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import axios from "axios";
import { Post, Comment } from "@/types";
import CommentItem from "../CommentItem";
import NewCommentForm from "../forms/NewCommentForm";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function PostCard({ _id, author, content, createdAt }: Post) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseUrl}/api/posts/${_id}/comments`;
        const response = await axios.get(url);
        setComments(response.data);
      } catch {}
    };

    fetchData();
  }, []);

  const handleNewComment = async (newComment: any) => {
    const url = `${baseUrl}/api/comments`;
    const response = await axios.post(url, newComment);

    setComments((prev) => [...prev, response.data]);
  };

  return (
    <div className="rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="mb-2 flex items-center gap-3">
        <IoMdPerson size="36" className="rounded-full" />

        <div>
          <p className="font-medium">{author}</p>
          <span className="text-xs text-gray-500">{createdAt.toLocaleString()}</span>
        </div>
      </div>

      <p className="mb-4 text-gray-800">{content}</p>

      <div className="ml-6 space-y-3 border-l border-gray-200 pl-4">
        {comments.map((comment) => (
          <CommentItem key={comment._id} {...comment} />
        ))}
        <NewCommentForm postId={_id} onComment={handleNewComment} />
      </div>
    </div>
  );
}
