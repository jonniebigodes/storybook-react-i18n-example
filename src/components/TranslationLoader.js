import React from 'react'

/**
 * this is a barebones component to be added to both the app and storybook in order to allow the Suspense
 * to have something to display
 */
const TranslationLoader=()=>(
    <>
        <h1>Loading your translation</h1>
        <h2>Just gimme a second while i setup things for you</h2>
    </>
)

export default TranslationLoader