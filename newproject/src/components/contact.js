import React from 'react';


function Contact(){
    return(
        <section id="contact">
        <h1 class="headings">Contact</h1>
        <form action="" class="form">
            <input type="text" name="name" class="input" placeholder="Enter Your Name" />
            <input type="email" name="email" class="input" placeholder="Enter Your Email" />
            <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Enter Your Message" ></textarea>
            <input type="submit" value="SEND" id="send" />
        </form>

        </section>
    );
}

export default Contact;