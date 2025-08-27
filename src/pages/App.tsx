import { useRoutes } from 'react-router-dom';
import routes from '@/routes/index';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  const routing = useRoutes(routes);

  // // 仅在开发环境中初始化 vConsole
  // if (process.env.NODE_ENV === 'development') {
  //   // eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-extraneous-dependencies
  //   const VConsole = require('vconsole');
  //   new VConsole();
  // }
  return (
    <>
      <HelmetProvider>{routing} </HelmetProvider>
    </>
  );
};
//监控组件是否重复渲染
// App.whyDidYouRender = true;
export default App;
