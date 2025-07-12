import { Thread } from "@/types";
import { fetchThreads } from "@/lib/api";
import ThreadCard from "@/components/cards/ThreadCard";

export default async function ThreadsPage() {
  let threads: Thread[] = [];

  try {
    threads = await fetchThreads();
  } catch (error) {
    console.error("Error fetching threads:", error);
  }

  return threads.map((thread) => <ThreadCard key={thread._id} {...thread} />);
}
