import './App.css';
import Header from "./components/base/Header";
import Content from "./components/base/Content";
import Footer from "./components/base/Footer";
import TimeCalculator from "./components/TimeCalculator";

export default function App() {
  return (
    <>
      <Header />
      <Content>
        <TimeCalculator />
      </Content>
      <Footer />
    </>
  );
}
