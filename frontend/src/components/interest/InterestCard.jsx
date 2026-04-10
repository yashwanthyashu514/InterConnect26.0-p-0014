export default function InterestCard({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition ${
        selected
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white hover:bg-blue-50 border-gray-200"
      }`}
    >
      <h3 className="font-semibold">{label}</h3>
      <p className="text-sm opacity-80 mt-1">Explore mentors in {label}</p>
    </button>
  );
}