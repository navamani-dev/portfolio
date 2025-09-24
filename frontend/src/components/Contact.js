import {useRef} from 'react';
export default function Contact() {

const nameref = useRef();
const emailref = useRef();
const mesref = useRef();

const handleSubmit = async (e) => {
  e.preventDefault();

  const name = nameref.current.value;
  const email = emailref.current.value;
  const message = mesref.current.value;

  const res = await fetch("http://localhost:5000/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  const data = await res.json();
  if (data.success) {
    alert("Message Sent!");
  } else {
    alert("Failed to send message!");
  }
};


  return (
    <>
      <div>
        <h3> Contact Me </h3>
        <p>
          Feel free to reach out with any questions, feedback, or opportunities
        </p>
        <a
          id="black"
          className="btn"
          href="https://x.com/NavamaniR2?t=i7-BRaKa_rw5zNc_iyrQXg&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <i className="fab fa-twitter"></i>
          </span>{" "}
          Twitter
        </a>

        <a
          id="blue"
          className="btn"
          href="https://www.linkedin.com/in/nava-mani-49417021a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <i className="fab fa-linkedin"></i>
          </span>{" "}
          Linkedin
        </a>

        <a
          id="black"
          className="btn"
          href="https://github.com/navamani-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <i className="fab fa-github"></i>
          </span>{" "}
          Github
        </a>
      </div>

      <form onSubmit={handleSubmit} className="form form-group bg-light" id="form">
        <input type="text" name="name" className="form-control" placeholder="Name" ref={nameref} />
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email Address"
          ref={emailref}
        />
        <textarea className="form-control" placeholder="Message" name="message"  ref={mesref} />
        <button className="btn btn-primary button" type="submit">Send Message</button>
      </form>
    </>
  );
}
