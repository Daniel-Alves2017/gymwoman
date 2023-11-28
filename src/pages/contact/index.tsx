import { FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './style.css';

const Contact = () => {
  return (
    <aside className="contact">
      <div className="social">
        <a
          href="https://www.instagram.com/Gymwoman"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight-link"
        >
          <FaInstagram
            size={32}
            style={{
              color: 'white',
              borderRadius: 6,
              background: `radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)`,
            }}
          />
          <span>@GymWoman</span>
        </a>
        <a href="#" rel="noopener noreferrer" className="highlight-link">
          <FaPhoneAlt
            size={28}
            style={{
              color: 'white',
              borderRadius: 6,
              padding: 2,
              background: 'blue',
            }}
          />
          <span>(11) 963988878</span>
        </a>
        <a
          href="https://wa.me/5511963988878"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight-link"
        >
          <FaWhatsapp
            size={32}
            style={{
              color: 'white',
              borderRadius: 6,
              background: '#25D366',
            }}
          />
          <span>Enviar Mensagem</span>
        </a>
      </div>
      <div className="label">
        <label>
           R. Marquês de Paranaguá, 111 - Consolação, São Paulo - SP, 01303-050
        </label>
      </div>
    </aside>
  );
};

export default Contact;
