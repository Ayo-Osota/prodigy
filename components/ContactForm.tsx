import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzblekok");
  if (state.succeeded) {
    return <p>Thanks for contacting!</p>;
  }

  return (
    <div>
      <h4 className="text-white font-bold text-xl md:text-2.5xl mb-4 md:mb-10">
        contact me
      </h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-10">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Firstname"
          className="contactInput"
          required
        />
        {/* <ValidationError prefix="Name" field="name" errors={state.errors} /> */}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="contactInput"
          required
        />
        {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={6}
          placeholder="Message"
          className="resize-none contactInput"
          required
        ></textarea>
        {/* <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        /> */}
        <button
          type="submit"
          title="Send message"
          className="py-4.5 px-7 md:px-16 font-bold bg-primary text-secondary rounded-2.5xl self-start text-sm md:text-base"
          disabled={state.submitting}
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
