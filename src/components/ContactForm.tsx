interface ContactFormProps {
  subject?: string;
}

/**
 * Reusable enquiry form (native POST to Formspree — no client JS needed).
 * Used on /contact and /rental. Fields are unchanged from the original home form.
 */
export default function ContactForm({ subject = 'New AV-TEC Enquiry' }: ContactFormProps) {
  return (
    <form className="contact-form" action="https://formspree.io/f/your-form-id-here" method="POST">
      <input type="hidden" name="_subject" value={subject} />
      <div className="form-row">
        <label>Name<input name="name" required placeholder="Your name" /></label>
        <label>Company / Organization<input name="company" placeholder="Company name" /></label>
      </div>
      <div className="form-row">
        <label>Email<input name="email" type="email" placeholder="you@example.com" /></label>
        <label>Event Date<input name="date" type="date" /></label>
      </div>
      <div className="form-row">
        <label>Event Type<input name="event_type" placeholder="Concert, Wedding, Corporate..." /></label>
        <label>Event Location<input name="location" placeholder="City or venue" /></label>
      </div>
      <div className="form-row full">
        <label>Phone<input name="phone" required placeholder="+91" /></label>
      </div>
      <div className="form-row full">
        <label>Message<textarea name="message" rows={4} placeholder="Tell us about your event, audience size, equipment needs, and schedule." /></label>
      </div>
      <div className="form-row full">
        <label className="form-checkbox"><input type="checkbox" required />I agree to the Terms &amp; Conditions</label>
      </div>
      <div className="form-submit-row">
        <button className="btn-blue" type="submit">Submit</button>
      </div>
    </form>
  );
}
