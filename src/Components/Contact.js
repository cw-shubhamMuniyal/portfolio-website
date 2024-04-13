import { useState } from "react";
import "../Styles/contact.css"

function Contact({ sectionName }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const updateName = (event) => {
        setName(event.target.value)
    }

    const updateEmail = (event) => {
        setEmail(event.target.value)
    }

    const updateMessage = (event) => {
        setMessage(event.target.value)
    }

    const SendEmail = async () => {
        try {
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section id="contact" className="contact sec-pad dynamicBg">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-med">
                    <span className="heading-sec__main heading-sec__main--lt">{sectionName}</span>
                    <span className="heading-sec__sub heading-sec__sub--lt">
                        Feel free to Contact me by submitting the form below and I will get
                        back to you as soon as possible
                    </span>
                </h2>
                <div className="contact__form-container">
                    <form action="#" className="contact__form">
                        <input
                            type="hidden"
                            name="form-name"
                        />
                        <div className="contact__form-field">
                            <label className="contact__form-label" htmlFor="name">Name</label>
                            <input required="" placeholder="Enter Your Name" type="text" className="contact__form-input" name="name" id="name"
                                onChange={updateName}
                                value={name}
                            />
                        </div>
                        <div className="contact__form-field">
                            <label className="contact__form-label" htmlFor="email">Email</label>
                            <input required="" placeholder="Enter Your Email" type="email" className="contact__form-input" name="email" id="email"
                                onChange={updateEmail}
                                value={email} />
                        </div>
                        <div className="contact__form-field">
                            <label className="contact__form-label" htmlFor="message">Message</label>
                            <textarea required="" cols="30" rows="10" className="contact__form-input" placeholder="Enter Your Message" name="message"
                                id="message"
                                value={message}
                                onChange={updateMessage}
                            />
                        </div>
                        <button type="button" className="btn--theme contact__btn" onClick={() => SendEmail()}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;