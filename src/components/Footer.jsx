export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <a href="/#/main" className="footer-logo logo">
          Family<span>Cents</span>
        </a>
        <address className="contacts">
          <ul className="contacts-list">
            <li className="contacts-item">
              <a className="contacts-link" href="tel:+80999999999">
                +80999999999
              </a>
            </li>
            <li className="contacts-item">
              <a className="contacts-link" href="mailto:">
                test@test.ua
              </a>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
}
