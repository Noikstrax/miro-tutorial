import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Outlet />
    </div>
  );
}
