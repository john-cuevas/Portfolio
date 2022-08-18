import React, { useRef } from 'react'
import emailjs from "emailjs-com"

import 'bootstrap/dist/css/bootstrap.css'

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'email-template', form.current, 'E6JC0DPfzqdQFjs9b')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };
    return (
        <div className='w-50 '>
            <form ref = {form} onSubmit={sendEmail}>
                <div className='form-group'>
                    <label>Name:</label>
                    <input type="text" name="name" className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Email:</label>
                    <input type="text" name="email" className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Subject:</label>
                    <input type="text" name="subject" className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Message</label>
                    <textarea name="message" className='form-control' />
                </div>
                <input type="submit" value="Send Message" />
            </form>
        </div>
    )
}

export default Contact