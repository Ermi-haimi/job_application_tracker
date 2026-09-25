import type { ApplicationStatus, JobType } from "../../types/application";

import "./FilterBar.css";

interface FilterBarProps {
  searchTerm: string;
  statusFilter: string | "all";
  jobTypeFilter: JobType | "all";

  onSearchChange: (value: string) => void;
  onStatusChange: (value: ApplicationStatus | "all") => void;
  onJobTypeChange: (value: JobType | "all") => void;
}

export default function FilterBar({
  searchTerm,
  statusFilter,
  jobTypeFilter,
  onSearchChange,
  onStatusChange,
  onJobTypeChange,
}: FilterBarProps) {
  return (
    <section className="filter-bar-wrapper">
      <input
        type="text"
        placeholder="Search by company or position ..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <select
        value={statusFilter}
        onChange={(event) =>
          onStatusChange(event.target.value as ApplicationStatus | "all")
        }
      >
        <option value="all">All Statuses</option>{" "}
        <option value="saved">Saved</option>{" "}
        <option value="applied">Applied</option>{" "}
        <option value="interviewed">Interviewed</option>{" "}
        <option value="offered">Offered</option>{" "}
        <option value="rejected">Rejected</option>
      </select>

      <select
        value={jobTypeFilter}
        onChange={(event) =>
          onJobTypeChange(event.target.value as JobType | "all")
        }
      >
        <option value="all">All Job Types</option>{" "}
        <option value="full-time">Full-time</option>{" "}
        <option value="part-time">Part-time</option>{" "}
        <option value="internship">Internship</option>{" "}
        <option value="contract">Contract</option>
      </select>
    </section>
  );
}
