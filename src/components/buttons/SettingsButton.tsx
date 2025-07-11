import { IoMdSettings } from "react-icons/io";

export default function SettingsButton() {
  return (
    <button className="cursor-pointer transition hover:scale-105 hover:text-blue-600">
      <IoMdSettings size="48" />
    </button>
  );
}
