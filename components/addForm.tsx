"use client";

import { addNote } from "@/lib/action";
import { useRef } from "react";
import AddButton from "./addButton";

export default function AddForm() {
  const form = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={form}
      action={async (formData) => {
        await addNote(formData);
        form.current?.reset();
      }}
      className="flex flex-col gap-3 rounded-lg border border-slate-300 p-10 shadow shadow-slate-400"
    >
      <input
        type="text"
        name="title"
        placeholder="Title..."
        className="rounded p-1 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="content"
        placeholder="Description..."
        className="rounded p-1 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <AddButton />
    </form>
  );
}
