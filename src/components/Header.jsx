import { useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();
  const user = localStorage.getItem('loggedInUser');

  const userName = JSON.parse(user);

  const handleLogout = () => {
    navigate('/');
  };
  return (
    <header className="header">
      <div className="container header-container">
        <a href="/fc/#/main" className="header-logo logo">
          Family<span>Cents</span>
        </a>
        <nav className="header-nav">
          {/* <ul className="menu-list">
            <li className="menu-item">statistic</li>
            <li className="menu-item">history</li>
          </ul> */}
          <p className="greet-text">
            Welcome, <span>{userName.name}</span>!
          </p>
          <button
            type="button"
            className="logout-btn btn"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </nav>
      </div>
    </header>
  );
}
