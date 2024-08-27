import emailjs from "@emailjs/browser";
import { useRef } from "react";
export const Register = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_e4z8scr",
          "template_y2ogyfn",
          form.current,
          "TxnMcNjVK9ESkKjtH"
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <>
      {" "}
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="register-email-2">Your email address *</label>
          <input
            type="email"
            className="form-control"
            id="register-email-2"
            name="user_email"
            required
          />
        </div>
        {/* End .form-group */}

        <div className="form-group">
          <label htmlFor="register-password-2">Password *</label>
          <input
            type="password"
            className="form-control"
            id="register-password-2"
            name="user_name"
            required
          />
        </div>
        {/* End .form-group */}

        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>SIGN UP</span>
            <i className="icon-long-arrow-right"></i>
          </button>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="register-policy-2"
              required
            />
            <label className="custom-control-label" htmlFor="register-policy-2">
              I agree to the <a href="#">privacy policy</a> *
            </label>
          </div>
          {/* End .custom-checkbox */}
        </div>
        {/* End .form-footer */}
      </form>
    </>
  );
};
