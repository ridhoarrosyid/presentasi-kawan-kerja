import prisma from "@/lib/prisma";
import AddForm from "@/components/addForm";
import { deleteNote } from "@/lib/action";
import DeleteButton from "@/components/deleteButton";
import Link from "next/link";

export default async function Home() {
  const notes = await prisma.post.findMany({
    orderBy: [{ id: "desc" }],
  });

  return (
    <main className="mx-auto flex w-4/5 flex-col gap-20 px-20 py-10">
      <AddForm />
      <div className="flex flex-col gap-10">
        <h1 className="text-center text-2xl font-bold uppercase">Notes</h1>
        <div className="grid grid-cols-2 gap-10">
          {notes.map((note) => (
            <div key={note.id}>
              <h2 className="text-lg font-semibold capitalize">{note.title}</h2>
              <p className="text-justify">{note.content}</p>
              <div>
                <Link href={`/edit/${note.id}`}>Edit</Link>
                <DeleteButton id={note.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
