import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',

  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const data = new FormData(e.target);
    data.append("access_key", "b55efb66-c655-4e15-a76c-ff8fbaaadac3");
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
    });
    const respData = await response.json();
    if(respData.success) {
        alert('Thank you for your message. Our team will be in touch shortly.');
    }
    else{
        alert('Error in sending message. Try again later');
    }

    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Interested in partnering or learning more? Reach out to our team.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-info"
          >
            <div className="info-cards">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'w.charlesworth@vorticeavionics.com',
                  href: 'mailto:w.charlesworth@vorticeavionics.com',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+1 (573) 537-1801',
                  href: 'tel:+15735371801',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="info-card"
                >
                  <div className="info-card-inner">
                    <div className="info-icon-wrapper">
                      <div className="info-icon-bg">
                        <item.icon className="info-icon" />
                      </div>
                      <div className="info-icon-glow" />
                    </div>
                    <div className="info-text">
                      <div className="info-label">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="info-value-link">
                          {item.value}
                        </a>
                      ) : (
                        <div className="info-value">{item.value}</div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Security Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="security-notice"
            >
              <p className="security-text">
                All communications are encrypted and monitored for security purposes. Due to the
                classified nature of our work, certain information requests may require additional
                verification.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="contact-form-wrapper"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button type="submit" className="form-submit">
                <span className="submit-text">Send Message</span>
                <Send className="submit-icon" />
                <div className="submit-hover-bg" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;