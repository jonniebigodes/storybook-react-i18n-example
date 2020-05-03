import React from "react";
import TranslatedDog from "./translatedDog";
import TranslationChanger from "./translationChanger";
export default {
  component: TranslatedDog,
  title: "Simple Component|Translated Dog",
  decorators: [
    (storyFn) => (
      <div className="App">
        <h1>This is the dog component that will be translated</h1>
        {storyFn()}
        <TranslationChanger />
      </div>
    ),
  ],
};
export const Default = () => <TranslatedDog />;
