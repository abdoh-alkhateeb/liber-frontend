import axios from "axios";
import { Thread } from "@/types";
import ThreadCard from "@/components/cards/ThreadCard";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function ThreadsPage() {
  let threads: Thread[];

  try {
    const url = `${baseUrl}/api/threads`;
    const response = await axios.get(url);
    threads = response.data;
  } catch {
    threads = [];
  }

  return threads.map((thread, i) => <ThreadCard key={i} {...thread} />);
}
