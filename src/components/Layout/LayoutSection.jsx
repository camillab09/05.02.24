import "./layout.css";

export function Layout(properties) {
  return (
    <div className="layout">
      <header className="navbar">
        <a href="">Logo</a>
        <nav>
          <ul>
            <li>
              <a href="http://">Home</a>
            </li>
            <li>
              <a href="http://">About</a>
            </li>
            <li>
              <a href="http://">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">{properties.children}</main>
      <footer className="footer">
        <p>Kodehode Modul D</p>
        <br />
        <p>{new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}
