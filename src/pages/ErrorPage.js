import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="container">
      <div className="title-group">
        <h2
          className="title-group__title"
        >
          An Error Occured: <span>{error.status}</span>
        </h2>
        <p className="title-group__subtitle">
          {error.statusText}
        </p>
      </div>
    </div>
  );
}
