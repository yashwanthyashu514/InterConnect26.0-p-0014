export default function CreateTask() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Create Task</h2>
      <input
        className="w-full border rounded-xl p-3 mb-4"
        placeholder="Task Title"
      />
      <textarea
        className="w-full border rounded-xl p-3"
        rows="4"
        placeholder="Task Description"
      />
    </div>
  );
}