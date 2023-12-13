import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Manzini" />
      <footer>
        {" "}
        This project was coded by <a href="#">Khayelihle Miles</a> and is
        <a href="#">open sourced on github</a> and hosted on{" "}
        <a href="#">netlify</a>
      </footer>
    </div>
  );
}
