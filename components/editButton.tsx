import { useFormStatus } from "react-dom";

export default function EditButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className={`rounded ${pending ? "bg-slate-500" : "bg-slate-700"} py-1 text-white`}
      disabled={pending}
    >
      {pending ? "Editing note..." : "Edit"}
    </button>
  );
}
