import { useState } from "react";

const useScroll = () => {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return { scrollToSection };
};

const UploadSection = () => {
  const [results, setResults] = useState([]); // For Q&A results
  const [uploadedFile, setUploadedFile] = useState(null);
  const [summary, setSummary] = useState(null); // Store summary separately
  const [showSearch, setShowSearch] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);
  const { scrollToSection } = useScroll();

  const handleFileUpload = async (file) => {
    if (!file) return;
    setUploadedFile(file);
    setIsProcessing(true);
    setSummary(null);
    setResults([]);
    setShowSearch(false);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/summarize", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setSummary(data.summary);
      setShowSearch(true);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query) return;
    try {
      const res = await fetch(`http://localhost:8000/search?q=${query}`);
      const data = await res.json();
      console.log("Search response:", data);
      // Append Q&A result instead of replacing summary
      setResults((prev) => [
        ...prev,
        { question: query, answer: data.results },
      ]);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <>
      {/* Upload Section - Modified */}
      <section id="upload-section" className="upload-section py-20">
        <div className="container mx-auto px-6">
          {!uploadedFile ? (
            <div className="max-w-3xl mx-auto">
              <div className="drag-drop-area group">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files[0])}
                  accept=".pdf,.txt"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-6xl mb-4">📄</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Drop your document here
                  </h3>
                  <p className="text-gray-600">or click to browse your files</p>
                </label>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              {/* Document Info */}
              <div className="glass-card p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">📄</span>
                  <div>
                    <h3 className="font-bold text-xl">{uploadedFile.name}</h3>
                    <p className="text-gray-600">
                      {Math.round(uploadedFile.size / 1024)} KB
                    </p>
                  </div>
                </div>
              </div>

            {/* Document Summary */}
            <div className="mb-6">
                <div className="flex items-center gap-2">
                    <div className="text-2xl">📝</div>
                    <h3 className="text-xl font-bold">Document Summary</h3>
                </div>

                <div className="mt-3">
                    {isProcessing ? (
                    <div className="flex justify-center py-6">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
                    </div>
                    ) : summary ? (
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line break-words">
                        {summary}
                    </p>
                    ) : (
                    <p className="text-gray-500 italic">
                        Summary of the document will appear here.
                    </p>
                    )}
                </div>
            </div>



              {/* Q&A Section */}
              {showSearch && (
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-4">Ask Questions</h3>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Ask a question about your document..."
                      className="question-input w-full"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSearch(e.target.value);
                          e.target.value = "";
                        }
                      }}
                    />
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    {results.map((result, index) => (
                    <div
                        key={index}
                        className="answer-box"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <p className="text-sm text-gray-600 mb-2">Q: {result.question}</p>

                        {Array.isArray(result.answer) ? (
                        <ul className="list-disc list-inside space-y-1 text-gray-800">
                            {result.answer.map((ans, i) => (
                            <li key={i}>{ans}</li>
                            ))}
                        </ul>
                        ) : (
                        <p className="text-gray-800">{result.answer}</p>
                        )}
                    </div>
                    ))}

                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default UploadSection;
