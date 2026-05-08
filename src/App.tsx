import { useState } from 'react';

function App() {
  const [resume, setResume] = useState('');
  const [jd, setJd] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // 模拟点击分析按钮的动作
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // 暂时用 setTimeout 模拟 AI 处理的延迟
    setTimeout(() => {
      setIsAnalyzing(false);
      alert("UI 框架搭建完毕！下一步我们将接入真实的 AI 分析逻辑。");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* 顶部导航栏 */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter cursor-pointer">
            Fit<span className="text-gray-400">CV</span>.
          </div>
          <div className="text-sm font-semibold text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full">
            Shortcut Asia Challenge
          </div>
        </div>
      </header>

      {/* 主体内容区 */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* 标题说明 */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Align Your Skills with the <br className="hidden md:block" /> Perfect Role.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            AI-powered resume gap analysis. Paste your experience and the target job description to uncover what's missing.
          </p>
        </div>

        {/* 核心工作区：双列输入 */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* 左侧：简历输入 */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
              1. Your Resume (Text)
            </label>
            <textarea
              className="w-full h-[400px] p-5 rounded-2xl border border-gray-200 bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none shadow-sm text-gray-700 leading-relaxed"
              placeholder="Paste your professional experience, skills, education, and project details here..."
              value={resume}
              onChange={(e) => setResume(e.target.value)}
            ></textarea>
          </div>

          {/* 右侧：JD输入 */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
              2. Target Job Description
            </label>
            <textarea
              className="w-full h-[400px] p-5 rounded-2xl border border-gray-200 bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none shadow-sm text-gray-700 leading-relaxed"
              placeholder="Paste the requirements, responsibilities, and tech stack for the role you want..."
              value={jd}
              onChange={(e) => setJd(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* 动作按钮 */}
        <div className="flex justify-center mb-20">
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !resume || !jd}
            className={`px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
              isAnalyzing || !resume || !jd
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1'
            }`}
          >
            {isAnalyzing ? 'Analyzing Match...' : 'Generate Gap Report'}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;