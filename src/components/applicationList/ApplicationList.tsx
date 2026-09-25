import type { JobApplication } from "../../types/application";
import ApplicationCard from "../applicationCard/ApplicationCard";
import "./ApplicationList.css";

interface ApplicationListProps {
  applicationList: JobApplication[];
}

export default function ApplicationList({
  applicationList,
}: ApplicationListProps) {
  return (
    <section className="applications-wrapper">
      {applicationList.length !== 0 ? (
        applicationList.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))
      ) : (
        <div className="no-applications">No Applications Yet</div>
      )}
    </section>
  );
}
