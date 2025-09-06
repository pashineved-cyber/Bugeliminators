import { useState } from "react";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const res = await fetch(`http://localhost:8000/search?q=${query}`);
    const data = await res.json();
    onSearch(data.results);
  };


  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <label className="block text-sm font-medium mb-2">Search</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
          placeholder="Search documents..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Go
        </button>
      </div>
    </div>
  );
}
