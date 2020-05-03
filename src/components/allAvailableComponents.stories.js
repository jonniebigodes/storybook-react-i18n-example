import React from "react";
import TranslatedCat from "./translatedCat";
import TranslatedDog from "./translatedDog";
import TranslatedHello from "./translatedHello";
import TranslationChanger from "./translationChanger";
export default {
  component: TranslatedCat,
  title: "Simple Component|All",
  decorators: [
    (storyFn) => (
      <div className="App">
          <h1>This is all of the components that will be translated</h1>
        {storyFn()}
        <TranslationChanger />
      </div>
    ),
  ],
};
export const Default = () => (
  <div>
    <TranslatedCat />
    <TranslatedDog />
    <TranslatedHello />
  </div>
);
