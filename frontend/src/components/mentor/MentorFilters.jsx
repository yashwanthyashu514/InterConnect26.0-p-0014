export default function MentorFilter({ domains, activeDomain, setActiveDomain }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <button
        onClick={() => setActiveDomain("All")}
        className={`px-4 py-2 rounded-full border ${
          activeDomain === "All" ? "bg-blue-600 text-white" : "bg-white"
        }`}
      >
        All
      </button>

      {domains.map((domain) => (
        <button
          key={domain}
          onClick={() => setActiveDomain(domain)}
          className={`px-4 py-2 rounded-full border ${
            activeDomain === domain ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          {domain}
        </button>
      ))}
    </div>
  );
}