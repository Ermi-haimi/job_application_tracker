import { useEffect, useState } from "react";
import type { JobApplication } from "../types/application";
import { ApplicationContext } from "./ApplicationContext";

interface ApplicationProviderProps {
  children: React.ReactNode;
}

export function ApplicationProvider({ children }: ApplicationProviderProps) {
  const [applications, setApplications] = useState<JobApplication[]>(() => {
    const savedApplications = localStorage.getItem("job-applications");

    if (!savedApplications) {
      return [];
    }

    return JSON.parse(savedApplications);
  });

  useEffect(() => {
    localStorage.setItem("job-applications", JSON.stringify(applications));
  }, [applications]);

  function addApplication(application: JobApplication) {
    setApplications((currentApplications) => [
      ...currentApplications,
      application,
    ]);
  }

  function deleteApplication(id: string) {
    setApplications((currentApplications) =>
      currentApplications.filter((application) => application.id !== id),
    );
  }

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        deleteApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
