import EditForm from "@/components/editForm";
import prisma from "@/lib/prisma";
import { Post } from "@prisma/client";

export default async function EditPage({ params }: { params: { id: string } }) {
  const data = (await prisma.post.findUnique({
    where: { id: params.id },
  })) as Post;

  return (
    <main className="px-20 pt-10">
      <EditForm data={data} />
    </main>
  );
}
