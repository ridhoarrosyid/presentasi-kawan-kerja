"use client";

import EditButton from "@/components/editButton";
import { editNote } from "@/lib/action";
import { Post } from "@prisma/client";
import { useRef } from "react";

export default function EditForm({ data }: { data: Post }) {
  const form = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={form}
      action={async (formData) => {
        await editNote(formData, data.id);
        form.current?.reset();
      }}
      className="flex flex-col gap-3 rounded-lg border border-slate-300 p-10 shadow shadow-slate-400"
    >
      <input
        type="text"
        name="title"
        placeholder="Title..."
        className="rounded p-1 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue={data.title}
      />
      <input
        type="text"
        name="content"
        placeholder="Description..."
        className="rounded p-1 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue={data.content as string}
      />
      <EditButton />
    </form>
  );
}
