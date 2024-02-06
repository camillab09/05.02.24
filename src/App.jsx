import "./App.css";
import { Layout } from "./components/Layout/LayoutSection";
import { HeroSection } from "./components/Hero section/HeroSection";
import { ContactSection } from "./components/Contact section/ContactSection";

function App() {
  return (
    <Layout>
      <HeroSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
/*
function SimpleComponent() {
  return (<h1>Hello</h1>);
}
/brukes for komponenter som apper og hele sider


function ComponentWithProperties({ properties }) {
  const templateLiterals =`` ${}
  return (<img src={properties.url} alt={}></img>)};
  /react pakker properties inn i et objekt.

  <ComponentWithProperties src="fish.svg" alt="a fish"/>
  /react håndterer det man skriver her og pakker det inn i 
  /ett objekt. React har ikke regler for at man må gjøre ting
  /på en spesiell måte- både positivt og negativt. 


  <div>
    <h2>I'm in a container!</h2>
  </div>
  /I html har vi container elements som holder på andre elementer.
  /I react kan man ferdigstille statiske komponenter slik at man ikke må
  /kode det samme flere ganger. Dette gjør det lettere å beholde hovedkomponenter
  /slik at man lettere kan fokusere på de øvrige elementene.
  function ComponentWithChildren(properties){
    return(
      <div>
        <header>
          /... navbar innhold
        </header>
        
        <main>
          /... {properties.children}
        </main>
        
        <footer>
          /.. footer innhold
        </footer>
      </div>
    )
  }
  <ComponentWithChildren>
    <section>
      <h1>Hero Section</h1>
    </section>
  </ComponentWithChildren>



  */
