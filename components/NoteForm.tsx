import { useState, FormEvent } from "react";
import { Input } from "./ui/input";

interface NoteFormProps {
  initialNote?: string;
  onSave: (note: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ initialNote = "", onSave }) => {
  const [note, setNote] = useState(initialNote);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (note.trim()) {
      onSave(note);
      setNote("");
    }
  };

  return (
    <form className="flex flex-col gap-2 mb-4" onSubmit={handleSubmit}>
      <Input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="ノートを入力してください。"
      />
      <button type="submit" className="p-2 bg-blue-600 text-white rounded">
        保存
      </button>
    </form>
  );
};

export default NoteForm;
