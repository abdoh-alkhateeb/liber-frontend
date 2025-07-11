import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";

export default function LogOutButton() {
  return (
    <Link href="/auth/logout" className="cursor-pointer transition hover:scale-105 hover:text-red-600">
      <IoMdLogOut size="48" />
    </Link>
  );
}
