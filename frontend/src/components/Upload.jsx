
export default function Upload({ onUpload }) {
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:8000/summarize", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    onUpload(data.summary);
  };


  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <label className="block text-sm font-medium mb-2">Upload Document</label>
      <input
        type="file"
        accept=".pdf,.txt"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-600"
      />
    </div>
  );
}
