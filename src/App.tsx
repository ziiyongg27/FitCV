import { useState } from 'react';

interface MatchResult {
  score: number;
  userSkills: string[];
  missingSkills: string[];
  actionAdvice: string[];
}

export default function App() {
  const [resume, setResume] = useState('');
  const [jd, setJd] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<MatchResult | null>(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setResult(null);
    
    setTimeout(() => {
      setResult({
        score: 78,
        userSkills: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
        missingSkills: ['Node.js Backend', 'CI/CD Pipelines', 'GraphQL'],
        actionAdvice: [
          'Highlight your component-driven architecture experience more clearly in the resume.',
          'Since the role requires Node.js, consider mentioning any basic backend exposure or fast-learning capabilities.',
          'Rephrase your current project to focus on business impact rather than just technical implementation.'
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-black selection:text-white pb-20">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter">
            Fit<span className="text-gray-400">CV</span>.
          </div>
          <div className="text-sm font-semibold text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full">
            Prototype Build
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            AI Resume Gap Analysis
          </h1>
          <p className="text-gray-500">Uncover exactly what's missing between your CV and your dream role.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <textarea
            className="w-full h-[250px] p-5 rounded-2xl border border-gray-200 bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none shadow-sm text-sm"
            placeholder="1. Paste your resume text here..."
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />
          <textarea
            className="w-full h-[250px] p-5 rounded-2xl border border-gray-200 bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none shadow-sm text-sm"
            placeholder="2. Paste the target Job Description (JD) here..."
            value={jd}
            onChange={(e) => setJd(e.target.value)}
          />
        </div>

        <div className="flex justify-center mb-12">
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !resume || !jd}
            className={`px-10 py-4 rounded-full font-bold transition-all duration-300 ${
              isAnalyzing || !resume || !jd
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800 shadow-xl hover:-translate-y-1'
            }`}
          >
            {isAnalyzing ? 'Analyzing Data...' : 'Generate Match Report'}
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-6 mb-8 border-b pb-6">
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-white text-3xl font-black shadow-inner">
                {result.score}%
              </div>
              <div>
                <h2 className="text-2xl font-bold">Match Score</h2>
                <p className="text-gray-500 text-sm mt-1">Based on semantic keyword alignment and skill gaps.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> Validated Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.userSkills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded border border-green-200">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span> Missing Requirements
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.missingSkills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded border border-red-200">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4">Strategic Advice</h3>
              <ul className="space-y-3">
                {result.actionAdvice.map((advice, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="font-bold text-black">{i + 1}.</span> {advice}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}