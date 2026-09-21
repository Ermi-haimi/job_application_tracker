import ApplicationList from "../../components/applicationList/ApplicationList";
import type { JobApplication } from "../../types/application";

interface HometProps {
  applicationList: JobApplication[];
}
export default function Home({ applicationList }: HometProps) {
  return (
    <main className="homw-wrapper">
      <ApplicationList applicationList={applicationList} />
    </main>
  );
}
