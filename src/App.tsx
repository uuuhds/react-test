import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Imperative, State, Portal, Bubbling, Callback, Memo } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App h-screen">
      <BrowserRouter>
        <nav className="flex w-full flex-row">
          <Link
            to="/hooks/useImperativeHandle"
            className="p-4 text-center bg-amber-100 border-solid border-2 grow"
          >
            useImperativeHandle
          </Link>
          <Link
            to="/hooks/useState"
            className="p-4 text-center bg-amber-100 border-solid border-2 grow"
          >
            useState
          </Link>
          <Link
            to="/hooks/useCallback"
            className="p-4 text-center bg-amber-100 border-solid border-2 grow"
          >
            useCallback
          </Link>
          <Link
            to="/hooks/useMemo"
            className="p-4 text-center bg-amber-100 border-solid border-2 grow"
          >
            useMemo
          </Link>
          <Link
            to="/api/createPortal"
            className="p-4 text-center bg-amber-100 border-solid border-2 grow"
          >
            createPortal
          </Link>
          <Link
            to="/event/bubbling"
            className="p-4 text-center bg-amber-100 border-solid border-2 grow"
          >
            bubbling
          </Link>
        </nav>
        <main className="p-4 border-2 h-full flex justify-center items-center">
          <Routes>
            <Route path="/hooks/useImperativeHandle" element={<Imperative />} />
            <Route path="/hooks/useState" element={<State />} />
            <Route path="/hooks/useCallback" element={<Callback />} />
            <Route path="/hooks/useMemo" element={<Memo />} />
            {/* <Route path="/hooks/useEffect" element={} /> */}
            <Route path="/api/createPortal" element={<Portal />} />
            <Route path="/event/bubbling" element={<Bubbling />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
