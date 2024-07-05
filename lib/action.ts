"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { redirect } from "next/navigation";

export async function addNote(formData: FormData) {
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    },
  });
  revalidatePath("/");
}

export async function editNote(formData: FormData, id: string) {
  await prisma.post.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    },
  });
  revalidatePath("/");
  redirect("/");
}

export async function deleteNote(id: string) {
  await prisma.post.delete({ where: { id } });
  revalidatePath("/");
}
