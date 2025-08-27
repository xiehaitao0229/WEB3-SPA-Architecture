import React from 'react';

interface LoadingProps {
  type?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'ripple';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({
  type = 'spinner',
  size = 'md',
  color = 'blue-500',
  text = 'Loading...',
}) => {
  const sizeClasses = {
    sm: { container: 'w-6 h-6', dot: 'w-2 h-2', bar: 'w-1 h-4' },
    md: { container: 'w-10 h-10', dot: 'w-3 h-3', bar: 'w-1.5 h-6' },
    lg: { container: 'w-16 h-16', dot: 'w-4 h-4', bar: 'w-2 h-8' },
  };

  const renderSpinner = () => (
    <div
      className={`${sizeClasses[size].container} animate-spin rounded-full border-4 border-gray-200 border-t-${color}`}
    ></div>
  );

  const renderDots = () => (
    <div className="flex space-x-2">
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className={`${sizeClasses[size].dot} bg-${color} rounded-full animate-bounce`}
          style={{ animationDelay: `${i * 0.2}s` }}
        ></div>
      ))}
    </div>
  );

  const renderPulse = () => (
    <div
      className={`${sizeClasses[size].container} bg-${color} rounded-full animate-pulse opacity-75`}
    ></div>
  );

  const renderBars = () => (
    <div className="flex items-end space-x-1">
      {[0, 1, 2, 3, 4].map(i => (
        <div
          key={i}
          className={`${sizeClasses[size].bar} bg-${color} animate-pulse`}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s',
          }}
        ></div>
      ))}
    </div>
  );

  const renderRipple = () => (
    <div className="relative">
      <div
        className={`${sizeClasses[size].container} border-4 border-${color} rounded-full animate-ping opacity-75`}
      ></div>
      <div
        className={`absolute top-0 left-0 ${sizeClasses[size].container} border-4 border-${color} rounded-full animate-ping opacity-50`}
        style={{ animationDelay: '0.5s' }}
      ></div>
    </div>
  );

  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'bars':
        return renderBars();
      case 'ripple':
        return renderRipple();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      {renderLoader()}
      {text && <p className={`text-${color} font-medium animate-pulse`}>{text}</p>}
    </div>
  );
};

// 全屏加载组件
export const FullScreenLoading: React.FC<Omit<LoadingProps, 'size'>> = props => (
  <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
    <Loading {...props} size="lg" />
  </div>
);

// 页面加载组件
export const PageLoading: React.FC<LoadingProps> = props => (
  <div className="flex items-center justify-center min-h-[400px]">
    <Loading {...props} />
  </div>
);

// 按钮加载组件
export const ButtonLoading: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center ${className}`}>
    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
    Loading...
  </div>
);

export default Loading;
