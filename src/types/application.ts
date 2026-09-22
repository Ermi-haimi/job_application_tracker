export type ApplicationStatus =
  | "applied"
  | "saved"
  | "interviewed"
  | "offered"
  | "rejected";

export type JobType = "full-time" | "part-time" | "internship" | "contract";

export type JobApplication = {
  id: string;
  company: string;
  position: string;
  location: string;
  status: ApplicationStatus;
  jobType: JobType;
  dateApplied?: string;
  deadline?: string;
  salary?: number;
  jobUrl?: string;
  note?: string;
};
