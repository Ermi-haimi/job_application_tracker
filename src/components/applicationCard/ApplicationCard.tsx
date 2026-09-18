import type { JobApplication } from "../../types/application";

interface ApplicationCardProps {
  application: JobApplication;
}

export default function ApplicationCard({ application }: ApplicationCardProps) {
  return (
    <section className="app-card-wrapper">
      <h3>{application.position}</h3>
      <div className="company-wrapper">
        <p>Company : </p>
        <p>{application.company}</p>
      </div>
      <div className="jobtype-salary-wrapper">
        <p>{application.jobType}</p>
        <p>{application.salary ?? "Note Specified"}</p>
      </div>
      <div className="note-wrapper">
        <p>{application.notes ?? "No Note"}</p>
      </div>
      <div className="status-dates-wrapper">
        <div className="app-status">{application.status}</div>
        <div className="applied-date">{application.dateApplied ?? ""}</div>
        <div className="deadline">{application.deadline ?? ""}</div>
      </div>
    </section>
  );
}
