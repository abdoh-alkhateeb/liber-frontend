"use client";

import { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { Post, Comment, NewCommentData } from "@/types";
import { fetchComments, createComment } from "@/lib/api";
import CommentItem from "../CommentItem";
import NewCommentForm from "../forms/NewCommentForm";

export default function PostCard({ _id, author, content, createdAt }: Post) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setComments(await fetchComments(_id));
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchData();
  }, [_id]);

  const handleNewComment = async (newComment: NewCommentData) => {
    try {
      newComment = await createComment(newComment);
      setComments((prev) => [...prev, newComment as Comment]);
    } catch (error) {
      console.error("Error creating comment:", error);
    }
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
