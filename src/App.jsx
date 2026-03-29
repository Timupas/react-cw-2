import "./App.css";
import { CardList } from "./components/CardList/CardList";
import { Section } from "./components/Section/Section";
import { Title } from "./components/Title/Title";
import data from "./data.json"

const title = "Hello World";
const text = "qwerty";

function App() {

  return (
    <>
    <Section>
     <Title text={text}/>
     <CardList data={data}/>
    </Section>
    </>
  );
}

export default App;
