import { useState } from "react";
import type {
  JobApplication,
  ApplicationStatus,
  JobType,
} from "../../types/application";
import "./NewApplication.css";
interface NewApplicationProps {
  onAdd: (application: JobApplication) => void;
}
export default function NewApplication({ onAdd }: NewApplicationProps) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<ApplicationStatus>("saved");
  const [jobType, setJobType] = useState<JobType>("full-time");
  const [salary, setSalary] = useState("");
  const [note, setNote] = useState("");
  const [deadline, setDeadline] = useState("");
  const [dateApplied, setDateApplied] = useState("");

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const newApplication: JobApplication = {
      id: crypto.randomUUID(),
      company,
      position,
      location,
      status,
      jobType,
      salary: salary ? Number(salary) : undefined,
      note: note || undefined,
      deadline: deadline || undefined,
      dateApplied: status !== "saved" ? dateApplied || undefined : undefined,
    };

    onAdd(newApplication);

    setCompany("");
    setPosition("");
    setLocation("");
    setStatus("saved");
    setJobType("full-time");
    setSalary("");
    setNote("");
    setDeadline("");
    setDateApplied("");
  }

  return (
    <form className="add-application-form" onSubmit={handleSubmit}>
      <h2>Add Job Application</h2>
      <label>
        Company
        <input
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          required
        />
      </label>
      <label>
        Position
        <input
          type="text"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
          required
        />
      </label>
      <label>
        Location
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          required
        />
      </label>
      <label>
        Status
        <select
          value={status}
          onChange={(event) =>
            setStatus(event.target.value as ApplicationStatus)
          }
        >
          <option value="saved">Saved</option>
          <option value="applied">Applied</option>
          <option value="interviewed">Interviewed</option>
          <option value="offered">Offered</option>
          <option value="rejected">Rejected</option>
        </select>
      </label>
      <label>
        Job Type
        <select
          value={jobType}
          onChange={(event) => setJobType(event.target.value as JobType)}
        >
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="internship">Internship</option>
          <option value="contract">Contract</option>
        </select>
      </label>
      <label>
        Salary <span>(optional)</span>
        <input
          type="number"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
          min="0"
        />
      </label>
      <label>
        Deadline <span>(optional)</span>
        <input
          type="date"
          value={deadline}
          onChange={(event) => setDeadline(event.target.value)}
        />
      </label>
      {status !== "saved" && (
        <label>
          Applied Date <span>(optional)</span>
          <input
            type="date"
            value={dateApplied}
            onChange={(event) => setDateApplied(event.target.value)}
          />
        </label>
      )}
      <label>
        Note <span>(optional)</span>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={4}
        />
      </label>
      <button type="submit">Add Application</button>
    </form>
  );
}
