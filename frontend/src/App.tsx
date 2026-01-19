import { useState } from "react";

const apiHealthUrl = "http://localhost:4000/health";

function App() {
  const [status, setStatus] = useState<string>("unknown");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(apiHealthUrl);
      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }
      const payload = await response.json();
      setStatus(JSON.stringify(payload));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <div className="panel">
        <span className="eyebrow">alpha preview</span>
        <h1>IoT Portal</h1>
        <p>
          Explore telemetry, manage tenants, and validate services from this single
          workspace.
        </p>
        <button onClick={checkHealth} disabled={loading}>
          {loading ? "Checking..." : "Check API Health"}
        </button>
        <div className="status-block">
          <span>Latest response</span>
          <code>{error ? error : status}</code>
        </div>
      </div>
    </div>
  );
}

export default App;
