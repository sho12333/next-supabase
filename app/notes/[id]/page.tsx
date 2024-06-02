"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import NoteForm from "../../../components/NoteForm";

interface Note {
  id: string;
  content: string;
}

const EditNotePage: React.FC = () => {
  const searchParams = useSearchParams();
  const noteId = searchParams.get("id");

  const [notes, setNotes] = useState<Note[]>([]);

  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    if (noteId) {
      const foundNote = notes.find((n) => n.id === noteId);
      setNote(foundNote || null);
    }
  }, [noteId, notes]);

  const saveNote = (content: string) => {
    if (note) {
      const updatedNotes = notes.map((n) =>
        n.id === note.id ? { ...n, content } : n
      );
      setNotes(updatedNotes);
    }
  };

  return (
    <div className="max-w-xl w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Edit Note</h2>
      {note && <NoteForm initialNote={note.content} onSave={saveNote} />}
    </div>
  );
};

export default EditNotePage;
