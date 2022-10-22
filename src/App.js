import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ShopContainer from './containers/ShopContainer';
import { useEffect } from 'react';
import { addAccessToken } from './utills/localStorage';
function App() {
  const token =
    process.env.TOKEN || 'VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o';
  useEffect(() => {
    addAccessToken(token);
  }, []);
  return (
    <div className="App">
      <ShopContainer />
    </div>
  );
}

export default App;
