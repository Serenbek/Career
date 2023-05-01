import "./App.scss";

import HomePage from "./pages/HomePage";

import useTheme from "./hooks/useTheme";


function App() {
  const isDark = useTheme()

  return (
      <div className={isDark ? "dark" : ''}>
        <HomePage />
      </div>
  );
}

export default App;
