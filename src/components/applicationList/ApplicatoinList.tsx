import type { JobApplication } from "../../types/application";
import ApplicationCard from "../applicationCard/ApplicationCard";

interface ApplicationListProps {
  applicationList: JobApplication[];
}

export default function ApplicationList({
  applicationList,
}: ApplicationListProps) {
  return (
    <section className="applications-wrapper">
      {applicationList.map((application) => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </section>
  );
}
