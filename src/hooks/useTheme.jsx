import { useSelector } from "react-redux";

const useTheme = () => {
  const isDark = useSelector((state) => state.theme.theme);
  return isDark;
};



export default useTheme;