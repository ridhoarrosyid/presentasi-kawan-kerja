"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";

export async function addNote(formData: FormData) {
  try {
    await prisma.post.create({
      data: {
        title: formData.get("title") as string,
        content: formData.get("content") as string,
      },
    });
    revalidatePath("/");
  } catch (e) {
    console.log(e);
  }
}

export async function editNote(formData: FormData, id: string) {
  await prisma.post.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    },
  });
}

export async function deleteNote(id: string) {
  await prisma.post.delete({ where: { id } });
}
