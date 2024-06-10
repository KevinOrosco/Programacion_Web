import {MiPrimerComponente} from "./components/mi_primer_componente/miPrimerComponente";
import { Estado } from "./components/mi_primer_componente/Estado/Estado";

function App() {
  
  return  (<> 
  <MiPrimerComponente name={"pipe"} lastName={"atom"}/>
  <Estado/>
  </>);
}

export default App;
