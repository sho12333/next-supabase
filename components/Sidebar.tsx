import Link from "next/link";

export const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-1/6 min-h-screen p-4">
      <nav className="space-y-4">
        <Link href="/dashboard">
          <div className="block py-2 px-4 rounded hover:bg-gray-700">
            Dashboard
          </div>
        </Link>
        <Link href="/notes">
          <div className="block py-2 px-4 rounded hover:bg-gray-700">Notes</div>
        </Link>
        <Link href="/settings">
          <div className="block py-2 px-4 rounded hover:bg-gray-700">
            Settings
          </div>
        </Link>
      </nav>
    </div>
  );
};
