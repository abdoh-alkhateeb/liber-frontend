import { IoMdPerson } from "react-icons/io";
import { Comment } from "@/types";

export default function CommentItem({ author, content, createdAt }: Comment) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0">
        <IoMdPerson size="36" className="mt-1 rounded-full" />
      </div>

      <div>
        <p className="text-sm">
          <span className="font-semibold">{author}</span>: {content}
        </p>

        <p className="text-xs text-gray-400">{createdAt.toLocaleString()}</p>
      </div>
    </div>
  );
}
