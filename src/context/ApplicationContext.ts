import { createContext } from "react";
import type { JobApplication } from "../types/application";

export interface ApplicationContextType {
  applications: JobApplication[];
  addApplication: (application: JobApplication) => void;
  deleteApplication: (id: string) => void;
}

export const ApplicationContext = createContext<
  ApplicationContextType | undefined
>(undefined);
