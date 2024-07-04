import { useFormStatus } from "react-dom";

export default function AddButton() {
  const { pending } = useFormStatus();

  return (
    <button className="rounded bg-slate-700 py-1 text-white">
      {pending ? "Adding note..." : "Add"}
    </button>
  );
}
