import React from "react";
import TranslatedCat from "./translatedCat";
import TranslationChanger from "./translationChanger";
export default {
  component: TranslatedCat,
  title: "Simple Component|Translated Cat",
  decorators: [
    (storyFn) => (
      <div className="App">
          <h1>This is the cat component that will be translated</h1>
        {storyFn()}
        <TranslationChanger />
      </div>
    ),
  ],
};
export const Default = () => <TranslatedCat />;
