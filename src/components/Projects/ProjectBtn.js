export default function ProjectBtn({ title, url, type }) {
  return type === "private" ? (
    <button
      type="button"
      className="project__btn cta white disabled"
      aria-label="Access must be requested to view the source code of this project"
      onClick={() =>
        alert(
          "Access must be requested to view the source code of this project"
        )
      }
    >
      {title}
    </button>
  ) : (
    <a
      href={url}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={type === "cta" ? `project__btn cta` : `project__btn cta white`}
    >
      {title}
    </a>
  );
}
