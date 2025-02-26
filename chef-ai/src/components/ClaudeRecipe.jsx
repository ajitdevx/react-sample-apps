import Markdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    return (
        <>
            <section ref={props.ref} className="suggested-recipe-container" aria-live='polite'>
                <Markdown>{props.recipe}</Markdown>
            </section>
        </>
    )
}