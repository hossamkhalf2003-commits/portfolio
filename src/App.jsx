import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import CustomCursor from "./components/ui/CustomCursor"; // Import the new cursor
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <>
        {/* Global UI Overlays */}
        <div className="bg-noise"></div>
        <CustomCursor /> {/* Render globally */}
        
        {/* Page Routing */}
        <Router />
      </>
    </BrowserRouter>
  );
}