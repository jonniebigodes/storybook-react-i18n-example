import React from "react";
import TranslatedHello from "./components/translatedHello";
import TranslatedDog from "./components/translatedDog";
import TranslatedCat from "./components/translatedCat";
import TranslationChanger from './components/translationChanger'
import "./App.css";
/* import { useTranslation} from "react-i18next"; */
function App() {
 
  return (
    <div className="App">
      <div>
        <TranslatedHello />
        <TranslatedCat />
        <TranslatedDog />
      </div>
      <TranslationChanger/>
    </div>
  );
}

export default App;
