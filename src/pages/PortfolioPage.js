import { useLoaderData } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import Archive from "../components/Archive/Archive";

export default function PortfolioPage() {
  const { success, data } = useLoaderData();

  return (
    <>
      {!success && <p style={{textAlign: "center"}}>Failed to fetch projects</p>}
      {success && data.projects && <Projects projects={data.projects} />}
      {success && data.archive && <Archive projects={data.archive} />}
    </>
  );
}
