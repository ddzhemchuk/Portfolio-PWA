import styled from "styled-components";
import ContactField from "../components/UI/ContactField";
import { useState } from "react";

const Section = styled.section`
  .container {
    display: flex;
    align-items: center;
    gap: clamp(2.5rem, 4.4444444444vw, 4rem);

    flex-direction: column;

    @media only screen and (min-width: 62rem) {
      flex-direction: row;
    }
  }

  .title-group {
    gap: clamp(0.5rem, 3.3333333333vw, 3rem);
    margin-bottom: 0;

    @media only screen and (min-width: 62rem) {
      align-items: flex-start;
      text-align: left;
    }
  }

  .title-group__title {
    font-size: clamp(1.802rem, 4.4444444444vw, 4rem);
    margin-bottom: 0;

    span {
      display: block;
    }
  }

  .title-group__subtitle {
    font-size: clamp(1rem, 1.9444444444vw, 1.75rem);
  }

  .contact__form {
    background: var(--white-10);
    flex-grow: 1;
    padding: clamp(2rem, 4.4444444444vw, 4rem);
    border-radius: 1rem;
    width: 100%;

    @media only screen and (min-width: 62rem) {
      width: auto;
    }
  }

  .contact__form-body {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form__wrap {
    display: flex;
    flex-direction: column;
  }

  .form__label {
    font-size: 1.125rem;
  }

  .form__input {
    font-size: 1rem;
    color: inherit;
    outline: none;
    background: transparent;
    padding: 0.75rem 0;
    border: none;
    border-bottom: 0.0625rem solid var(--white-25);
  }

  .form__input--textarea {
    resize: none;
  }

  .form__submit {
    white-space: nowrap;
  }

  .form__bottom {
    display: flex;
    gap: 1rem;
    margin-top: clamp(2rem, 4.4444444444vw, 4rem);
    flex-direction: column;
    text-align: center;

    @media only screen and (min-width: 37.5rem) {
      flex-direction: row;
      align-items: center;
      text-align: left;
    }

    p {
      margin: 0;
    }
  }
`;

const FIELDS = [
  {
    label: "Your name:",
    type: "text",
    name: "name",
    placeholder: "please enter your name",
  },
  {
    label: "Your email:",
    type: "email",
    name: "email",
    placeholder: "please enter your email address",
  },
  {
    label: "Your phone:",
    type: "phone",
    name: "phone",
    placeholder: "please enter your phone number",
  },
  {
    label: "Have any message?",
    type: "textarea",
    name: "message",
    placeholder: "Let us know about your project or question",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({});
  const [msg, setMsg] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setMsg(null);

    if (!form.name) {
      setMsg("Please enter your name");
      return;
    }

    if (!form.email && !form.phone) {
      setMsg("Please enter your email or phone number");
      return;
    }

    try {
      const response = await fetch("/api/request.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setMsg(data.message);
        setForm({});
      } else {
        setMsg(data.message);
      }
    } catch (error) {
      setMsg("An error occurred. Please try again later.");
      console.error(error);
    }
  };

  return (
    <Section>
      <div className="container">
        <div className="title-group">
          <h2
            className="title-group__title"
            aria-label="Have a project? I would love to help"
          >
            Have a project? <span>I would love to help </span>
          </h2>
          <p className="title-group__subtitle">
            Let's brainstorm and bring your vision to life
          </p>
        </div>

        <form className="contact__form" onSubmit={submitForm}>
          <div className="contact__form-body">
            {FIELDS.map((field, index) => (
              <ContactField
                {...field}
                key={index}
                form={form}
                setForm={setForm}
              />
            ))}
          </div>
          <div className="form__bottom">
            <button type="submit" className="cta form__submit">
              Send request
            </button>
            {msg && <p>{msg}</p>}
          </div>
        </form>
      </div>
    </Section>
  );
}
