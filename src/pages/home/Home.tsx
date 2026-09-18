import ApplicationList from "../../components/applicationList/ApplicatoinList";
import { applications } from "../../data";
export default function Home() {
  return (
    <main className="homw-wrapper">
      <ApplicationList applicationList={applications} />
    </main>
  );
}
