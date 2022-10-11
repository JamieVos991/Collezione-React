import "./Contact.scss";


const Contact = () => {
    return (
        <section id="4" className="section__contact">
            <div class="container2">
            <form id="contact" action="" method="post">
                <h3>Contact us</h3>
                <h4>Contact </h4>
                <fieldset>
                    <input placeholder="Jouw naam" type="text" tabindex="1" required autofocus></input>
                </fieldset>
                <fieldset>
                    <input placeholder="Jouw Email" type="email" tabindex="2" required></input>
                </fieldset>
                <fieldset>
                    <input placeholder="Jouw telefoon nummer (optioneel)" type="tel" tabindex="3" required></input>
                </fieldset>
                <fieldset>
                    <textarea placeholder="Schrijf hier jouw bericht..." tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Stuur</button>
                </fieldset>
            </form>
        </div>
        </section >
    );
}

export default Contact;