import React from "react";
import i18n from "../src/i18n";
import { I18nextProvider } from "react-i18next";
import { addDecorator } from "@storybook/react";
import TranslationLoader from '../src/components/TranslationLoader'

// adds the provider as a global decorator to the app
addDecorator((storyFn) => (
  <I18nextProvider i18n={i18n}>{storyFn()}</I18nextProvider>
));

// react-i18n needs this or the stories will not load and will break Storybook
addDecorator((storyFn) => (
  <React.Suspense fallback={<TranslationLoader />}>{storyFn()}</React.Suspense>
));
