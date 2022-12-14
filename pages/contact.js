import React from 'react';
import AppIcon from '../components/AppIcon';
import useMobile from '../utils/useMobile';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const isMobile = useMobile();
  return (
    <div>
      <Section>
        <h1>Contact us</h1>
      </Section>
      <ContactForm />
      <div>
        <Section>
          <AppIcon name="whatsapp" size={32} /> +393477865383 <br />
        </Section>
      </div>
    </div>
  );
};

export default ContactPage;
