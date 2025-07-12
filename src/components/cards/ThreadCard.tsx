import Link from "next/link";
import Image from "next/image";
import { Thread } from "@/types";

export default function ThreadCard({ _id, name, description, cover }: Thread) {
  return (
    <Link
      href={`/threads/${_id}`}
      className="group overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg"
    >
      <Image src={cover} alt={name} width="400" height="400" className="h-40 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold transition group-hover:text-blue-600">{name}</h2>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
