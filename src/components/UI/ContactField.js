export default function ContactField({
  label,
  type,
  placeholder,
  name,
  form,
  setForm,
}) {
  const randomId = Math.random().toString(36).substring(2, 15);

  return (
    <div className="form__wrap">
      <label htmlFor={randomId} className="form__label">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="form__input form__input--textarea"
          placeholder={placeholder}
          id={randomId}
          onChange={(e) => {
            setForm({ ...form, [name]: e.target.value });
          }}
          value={form[name] ?? ""}
        ></textarea>
      ) : (
        <input
          type={type}
          className="form__input"
          placeholder={placeholder}
          id={randomId}
          onChange={(e) => {
            setForm({ ...form, [name]: e.target.value });
          }}
          value={form[name] ?? ""}
        />
      )}
    </div>
  );
}
