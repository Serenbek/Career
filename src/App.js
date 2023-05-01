import "./App.scss";
import HomePage from "./pages/HomePage";
import Recruit from './components/Recruit/Recruit'
import useTheme from "./hooks/useTheme";


function App() {
  const isDark = useTheme()

  return (
      <div className={isDark ? "dark" : ''}>
        <Recruit />
        <HomePage />
      </div>
  );
}

export default App;
