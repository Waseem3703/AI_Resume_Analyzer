import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.analysis) {
    return (
      <div className="p-10 text-center">
        <p>No analysis data found.</p>
        <button onClick={() => navigate("/")} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">Go Back</button>
      </div>
    );
  }

  const { analysis } = state;

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Resume Analysis Result</h2>
      <ul className="space-y-4">
        <li><strong>Format:</strong> {analysis.format}</li>
        <li><strong>Length:</strong> {analysis.length}</li>
        <li><strong>Hard Skills:</strong> {analysis.hardSkills.join(", ")}</li>
        <li><strong>Soft Skills:</strong> {analysis.softSkills.join(", ")}</li>
        <li><strong>Design:</strong> {analysis.design}</li>
        <li><strong>Buzzwords:</strong> {analysis.buzzwords.join(", ")}</li>
      </ul>
    </div>
  );
}

export default Result;
