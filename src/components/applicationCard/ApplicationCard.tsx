import type { JobApplication } from "../../types/application";
import "./ApplicationCard.css";

interface ApplicationCardProps {
  application: JobApplication;
}

export default function ApplicationCard({ application }: ApplicationCardProps) {
  return (
    <section className="app-card-wrapper">
      <h3>{application.position}</h3>
      <div className="company-wrapper">
        <p>Company: </p>
        <p>{application.company}</p>
      </div>
      <div className="jobtype-salary-wrapper">
        <p>{application.jobType}</p>
        <div className="salary-wrapper">
          <p>Salary</p> <p>{application.salary ?? "Note Specified"}</p>
        </div>
      </div>
      <div className="note-wrapper">
        <p>{application.note ?? "No Note"}</p>
      </div>
      <div className={`app-status ${application.status}`}>
        {application.status}
      </div>
      <div className="status-dates-wrapper">
        <div className="applied-date">
          <p>Applied Date</p>
          <p>{application.dateApplied ?? ""}</p>
        </div>

        <div className="deadline">
          <p>Deadline</p>
          <p>{application.deadline ?? ""}</p>
        </div>
      </div>
    </section>
  );
}
