import React from "react";
import Meta from "components/Meta";
import ContactSection from "components/ContactSection";

function ContactUsPage(props) {
  return (
    <>
      <Meta title="Contact Us" />
      <ContactSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Contact Us"
        subtitle=""
        buttonText="Send message"
        buttonColor="primary"
        buttonInverted={false}
        showNameField={true}
      />
    </>
  );
}

export default ContactUsPage;
