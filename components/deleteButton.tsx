"use client";

import { deleteNote } from "@/lib/action";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <form
      action={async () => {
        await deleteNote(id);
      }}
    >
      <button type="submit">hapus</button>
    </form>
  );
}
