import { useSelector } from "react-redux";

const useTheme = () => {
  const isDark = useSelector((state) => state.theme.theme);
  console.log(isDark)
  return isDark;
};



export default useTheme;