import Link from "next/link";

interface NoteListProps {
  notes: { id: string; content: string }[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <ul className="list-none p-0">
      {notes.map((note) => (
        <li key={note.id} className="bg-gray-100 p-2 mb-2 rounded shadow">
          <Link href={`/notes/${note.id}`}>
            <div className="text-blue-600">{note.content}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
