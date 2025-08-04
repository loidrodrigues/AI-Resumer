import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [sumary, setSumary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [iaReady, setIaReady] = useState(false);

  useEffect(() => {
    const checkIaReady = setInterval(() => {
      if (
        window.puter &&
        window.puter.ai &&
        typeof window.puter.ai.chat === "function"
      ) {
        setIaReady(true);
      }
      clearInterval(checkIaReady);
    }, 300);

    return () => clearInterval(checkIaReady);
  }, []);

  const sumerazy = async () => {
    setLoading(true);
    setError("");
    setSumary("");
    try {
      const result = await window.puter.ai.chat(
        `Por favor resuma o texto: ${text}`
      );
      setSumary(result.message?.content || "Nenhum resumo retornado.");
    } catch (error) {
      setError(error.message || "Algo deu errado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-950 to-purple-950 flex flex-col justify-center p-3 items-center gap-6">
      <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-blue-500 via-rose-500 to-indigo-500 bg-clip-text text-transparent">
        {" "}
        Resumidor de texto com IA
      </h1>

      <div
        className={`px-4 py-2 rounded-full text-sm ${
          iaReady
            ? "bg-green-500/20 text-green-300 border border-green-500/20"
            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/20"
        }`}
      >
        {iaReady
          ? " 🟢 IA pronta para usar."
          : " 🟡 A IA ainda não está pronta para ser usada."}
      </div>

      <div className="w-full max-w-2xl bg-gradient-to-r from-slate-950 to-slate-800 mt-2 rounded-3xl flex flex-col gap-3 shadow-2xl backdrop-blur-md border border-gray-600/50 p-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={!iaReady}
          className="p-3 h-40 rounded-2xl resize-none bg-slate-950/50 border border-gray-600/20 text-white placeholder-gray-400
             focus:border-amber-500 focus:ring-2 focus:ring-amber-400 focus:shadow-lg focus:shadow-amber-500/30
             transition-all duration-300 ease-in-out"
          placeholder="Insira o texto aqui..."
        ></textarea>

        <button
          onClick={sumerazy}
          disabled={!iaReady || loading}
          className={`
          w-[200px]
    px-4 py-2 my-2 rounded-2xl text-white
    bg-gradient-to-r  from-indigo-500 to-rose-500
    shadow-md shadow-amber-500/30
            cursor-pointer
       hover:shadow-lg hover:shadow-rose-500/40
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-300 ease-in-out

  `}
        >
          {loading ? "Resumindo..." : "Resumir"}
        </button>
      </div>
      {sumary && (
        <div className="w-full max-w-2xl bg-gradient-to-r from-slate-950 to-slate-800 mt-2 rounded-3xl flex flex-col gap-3 shadow-2xl backdrop-blur-md border border-gray-600/50 p-6">
          <div className="w-full max-w-2xl bg-gradient-to-r from-slate-950 to-slate-800 mt-2 rounded-3xl flex flex-col gap-3 shadow-2xl backdrop-blur-md border border-gray-600/50 p-6">
            <p className="text-white">{sumary}</p>
          </div>
        </div>
      )}

      {error && (
        <div className="w-full max-w-2xl bg-gradient-to-r from-slate-950 to-slate-800 mt-2 rounded-3xl flex flex-col gap-3 shadow-2xl backdrop-blur-md border border-gray-600/50 p-6">
          <p className="text-white">{error}</p>
        </div>
      )}
    </div>
  );
}

export default App;
