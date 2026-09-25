import ApplicationList from "../../components/applicationList/ApplicationList";
import type { JobType, ApplicationStatus } from "../../types/application";
import { useState } from "react";
import { useApplication } from "../../context/UseApplication";
import FilterBar from "../../components/filterBar/FilterBar";

export default function Home() {
  const { applications } = useApplication();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "all">(
    "all",
  );
  const [jobTypeFilter, setJobTypeFilter] = useState<JobType | "all">("all");

  const filteredApplications = applications.filter((application) => {
    const matchesSearch =
      application.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.position.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || application.status === statusFilter;

    const matchesJobType =
      jobTypeFilter === "all" || application.jobType === jobTypeFilter;

    return matchesSearch && matchesStatus && matchesJobType;
  });

  return (
    <main className="homw-wrapper">
      <FilterBar
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        jobTypeFilter={jobTypeFilter}
        onSearchChange={setSearchTerm}
        onStatusChange={setStatusFilter}
        onJobTypeChange={setJobTypeFilter}
      />
      <ApplicationList applicationList={filteredApplications} />
    </main>
  );
}
