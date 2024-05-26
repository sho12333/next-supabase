"use client";

import { useState } from "react";
import NoteForm from "../../components/NoteForm";
import NoteList from "../../components/NoteList";

const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState<{ id: string; content: string }[]>([]);

  const addNote = (content: string) => {
    const newNote = { id: `${Date.now()}`, content };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="max-w-xl w-full mt-20">
      <h2 className="text-2xl font-bold text-center mb-4">ノート一覧</h2>
      <NoteForm onSave={addNote} />
      <NoteList notes={notes} />
    </div>
  );
};

export default NotesPage;
