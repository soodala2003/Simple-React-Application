//import logo from './logo.svg';
//import './App.css';
import Content from "./Components/Content.js";

function Header() {
  return (<h1>Simple React Application</h1>);
}

function Footer() {
  return (<h1>Created by Me, of course.</h1>);
}

function App() {
  return (
    <>
      <Header />
      <Content color="tomato" text="My favorite songs: " />
      <Footer />
    </>
  );
}

export default App;
