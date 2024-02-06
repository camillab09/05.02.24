import style from "./layout.module.css";
import { ExternalLink } from "../ExternalLink/ExternalLink";
console.log(style);

export function Layout(properties) {
  return (
    <div className={style.Layout}>
      <header className={style.navbar}>
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
      <main className={style.main}>{properties.children}</main>
      <footer className={style.footer}>
        <p>Kodehode Modul D</p>
        <br />
        <p>{new Date().toLocaleDateString()}</p>

        <nav>
          <ul>
            <li>
              <ExternalLink href="https://github.com">Github</ExternalLink>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
