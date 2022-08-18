import "./styles.css";
import { USEFULL_LINKS } from "./usefullLinks";
export default function App() {
  return (
    <div className="App">
      <h1>USEFULL LINKS</h1>
      {USEFULL_LINKS.map((item, index) => {
        return (
          <div key={index}>
            <a href={item}>{item}</a>
          </div>
        );
      })}
    </div>
  );
}
