import { MyProvide } from "./MyContext";
function StoreProvide({ children }) {
  return <MyProvide.Provider value={false}>{children}</MyProvide.Provider>;
}

export default StoreProvide;
