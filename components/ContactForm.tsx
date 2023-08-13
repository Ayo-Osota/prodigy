const ContactForm = () => {
  return (
    <div>
      <h4 className="text-white font-bold text-xl md:text-2.5xl mb-4 md:mb-10">contact me</h4>
      <form className="flex flex-col gap-4 md:gap-10">
        <input type="text" name="name" id="name" placeholder="Firstname" className="contactInput" />
        <input type="email" name="email" id="email" placeholder="Email" className="contactInput" />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={6}
          placeholder="Message"
          className="resize-none contactInput"
        ></textarea>
        <button
          type="submit"
          title="Send message"
          className="py-4.5 px-7 md:px-16 font-bold bg-primary text-secondary rounded-2.5xl self-start text-sm md:text-base"
        >Send message</button>
      </form>
    </div>
  );
};

export default ContactForm;
