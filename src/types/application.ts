export type ApplicationStatus =
  | "applied"
  | "saved"
  | "interviewed"
  | "offered"
  | "rejected";

export type JobType = "full-time" | "part-time" | "internship" | "contract";

export type JobApplication = {
  id: number;
  company: string;
  position: string;
  location: string;
  status: ApplicationStatus;
  jobType: JobType;
  dateApplied?: string;
  salary?: number;
  jobUrl?: string;
  notes?: string;
};
