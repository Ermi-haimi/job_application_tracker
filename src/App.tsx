import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import NewApplication from "./pages/newApplication/NewApplication";
import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";
import type { JobApplication } from "./types/application";

export default function App() {
  const [applications, setApplications] = useState<JobApplication[]>([]);

  function handleAddApplication(application: JobApplication) {
    setApplications((currentApplications) => [
      ...currentApplications,
      application,
    ]);
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home applicationList={applications} />} />
          <Route
            path="/new_application"
            element={<NewApplication onAdd={handleAddApplication} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
