import { useState } from "react";
import Upload from "./components/Upload";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">
        Decentralized AI-Powered Document Summarizer & Search
      </h1>

      <div className="w-full max-w-2xl space-y-6">
        <Upload onUpload={(summary) => setResults([summary, ...results])} />
        <Search onSearch={(matches) => setResults(matches)} />
        <Results items={results} />
      </div>
    </div>
  );
}

export default App;
