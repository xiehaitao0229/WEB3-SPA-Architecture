import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PageNotFoundProps {
  theme?: 'minimal' | 'playful' | 'space' | 'glitch';
}

const PageNotFoundView: React.FC<PageNotFoundProps> = ({ theme = 'minimal' }) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  useEffect(() => {
    if (theme === 'glitch') {
      const glitchInterval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }, 3000);
      return () => clearInterval(glitchInterval);
    }
  }, [theme]);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const renderMinimal = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-indigo-600 mb-4 animate-bounce">404</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">页面未找到</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
          抱歉，您访问的页面不存在或已被移除。让我们帮您回到正确的道路上。
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            回到首页
          </button>
          <button
            onClick={handleGoBack}
            className="w-full sm:w-auto border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
          >
            返回上页
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-8">{countdown} 秒后自动跳转到首页</p>
      </div>
    </div>
  );

  const renderPlayful = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center px-4">
      <div className="text-center text-white">
        <div className="mb-8 relative">
          <h1 className="text-9xl font-bold mb-4 animate-pulse">4🤖4</h1>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4 animate-bounce">哎呀！迷路了</h2>
        <p className="text-lg mb-8 max-w-md mx-auto opacity-90">
          这个页面好像跑到火星上去了 🚀
          <br />
          让我们把你带回地球吧！
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-100 transition-all duration-200 transform hover:scale-110 shadow-lg"
          >
            🏠 回到地球
          </button>
          <button
            onClick={handleGoBack}
            className="w-full sm:w-auto bg-purple-600 bg-opacity-30 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-50 transition-all duration-200"
          >
            🚀 返回轨道
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white rounded-full animate-bounce opacity-75"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSpace = () => (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="text-center text-white relative z-10">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 animate-pulse">
            404
          </h1>
          <div className="text-6xl mb-4">🛸</div>
        </div>

        <h2 className="text-3xl font-bold mb-4 text-blue-400">迷失在太空中</h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
          在浩瀚的宇宙中，这个页面似乎漂浮到了未知的星系。 让我们启动导航系统，带您回到母舰。
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-xl"
          >
            🚀 返回母舰
          </button>
          <button
            onClick={handleGoBack}
            className="w-full sm:w-auto border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-3 rounded-lg font-medium transition-all duration-200"
          >
            ← 回到上个星球
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-8">自动导航启动：{countdown}s</p>
      </div>
    </div>
  );

  const renderGlitch = () => (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Glitch background lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-full h-px bg-green-500 ${isGlitching ? 'animate-pulse' : ''}`}
            style={{
              top: `${i * 5}%`,
              transform: isGlitching ? `translateX(${Math.random() * 20 - 10}px)` : 'none',
            }}
          ></div>
        ))}
      </div>

      <div className="text-center relative">
        <div className="mb-8">
          <h1
            className={`text-9xl font-mono font-bold text-green-500 mb-4 ${isGlitching ? 'animate-pulse' : ''}`}
            style={{
              textShadow: isGlitching ? '2px 0 red, -2px 0 blue' : 'none',
              transform: isGlitching ? `translateX(${Math.random() * 10 - 5}px)` : 'none',
            }}
          >
            404
          </h1>
          <div className="text-green-500 text-2xl font-mono animate-blink">&gt; ERROR_</div>
        </div>

        <h2 className="text-2xl font-mono text-green-400 mb-4">SYSTEM.ERROR.DETECTED</h2>
        <div className="text-green-300 font-mono text-sm mb-8 max-w-md mx-auto">
          <p>&gt; Scanning...</p>
          <p>&gt; Page not found in database</p>
          <p>&gt; Initiating recovery protocol...</p>
          <p className="text-red-400">&gt; ERROR: 404_NOT_FOUND</p>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto bg-green-500 bg-opacity-20 border border-green-500 text-green-400 px-8 py-3 rounded font-mono hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm"
          >
            &gt; RETURN_HOME
          </button>
          <button
            onClick={handleGoBack}
            className="w-full sm:w-auto border border-green-500 text-green-500 px-8 py-3 rounded font-mono hover:bg-green-500 hover:bg-opacity-10 transition-all duration-200"
          >
            &gt; ROLLBACK
          </button>
        </div>

        <p className="text-xs text-green-600 font-mono mt-8">
          AUTO_REDIRECT_IN: {countdown.toString().padStart(2, '0')}s
        </p>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );

  const renderTheme = () => {
    switch (theme) {
      case 'playful':
        return renderPlayful();
      case 'space':
        return renderSpace();
      case 'glitch':
        return renderGlitch();
      default:
        return renderMinimal();
    }
  };

  return renderTheme();
};

export default PageNotFoundView;
