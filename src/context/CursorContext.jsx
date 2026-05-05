import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [isHovering, setHovering] = useState(false);

  return (
    <CursorContext.Provider value={{ isHovering, setHovering }}>
      {children}
    </CursorContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCursor = () => useContext(CursorContext);