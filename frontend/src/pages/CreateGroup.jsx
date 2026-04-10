export default function CreateGroup() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Create Group</h2>
      <input
        className="w-full border rounded-xl p-3 mb-4"
        placeholder="Enter Group Name"
      />
      <textarea
        className="w-full border rounded-xl p-3"
        rows="4"
        placeholder="Enter Group Description"
      />
    </div>
  );
}