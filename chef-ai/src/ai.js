const token = import.meta.env.VITE_ANTHROPIC_API_TOKEN;
const url = import.meta.env.VITE_ANTHROPIC_API_URL;

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

export async function getRecipeFromChefClaude(ingredientsArr) {

    const ingredientsString = ingredientsArr.join(", ")

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}:my-test-project` },
        body: JSON.stringify({
            model: "claude-3-5-sonnet-20241022",
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: [{ role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` }],
        }),
    });
    return await response.json();
}
