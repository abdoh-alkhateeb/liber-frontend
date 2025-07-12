import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href="/threads" className="cursor-pointer text-5xl font-bold transition hover:scale-105 hover:text-blue-600">
      Liber
    </Link>
  );
}
