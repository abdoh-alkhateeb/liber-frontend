import Link from "next/link";
import { IoMdSettings } from "react-icons/io";

export default function SettingsButton() {
  return (
    <Link href="/auth/profile" className="cursor-pointer transition hover:scale-105 hover:text-blue-600">
      <IoMdSettings size="48" />
    </Link>
  );
}
