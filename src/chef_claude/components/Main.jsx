import React from 'react'

export default function Main() {
    const [ingredientsList, setIngredientsList] = React.useState(["Chicken", "Oregano", "Tomatoes"])
    const ingredients = ingredientsList.map(ingredient => <li key={ingredient}>{ingredient}</li>)
    console.log(ingredients)

    // <form onSubmit={}> handler

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget)
    //     const newIngredient = formData.get("ingredient")
    //     event.currentTarget.reset()

    //     setIngredientsList(prevIngredientsList => [...prevIngredientsList, newIngredient])
    //     console.log(ingredientsList)

    // declarative way of doing the code above

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredientsList(prevIngredientsList => [...prevIngredientsList, newIngredient])
        console.log(ingredients)
    }    

    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    aria-label="Add ingredient"
                    name="ingredient"
                    placeholder="e.g. oregano"
                />
                <button>Add ingredient</button>
            </form>
            <ul>{ingredients}</ul>
        </main>
    )
}











































// import React from 'react'

// export default function Main() {
//     const [ingredientsList, setIngredientsList] = React.useState(["Chicken", "Oregano", "Tomatoes"])
//     const ingredients = ingredientsList.map(entry => (<li key={entry}>{entry}</li>))

//     console.log(ingredientsList)

//     function handleSubmit(event) {
        
//         // do research this section
//         event.preventDefault()
//         const formData = new FormData(event.currentTarget)
//         const newIngredient = formData.get("ingredient")

//         setIngredientsList(prevIngredients => [...prevIngredients, newIngredient])
//         console.log(ingredientsList)
//     }

//     return (
//         <>
//             <main>
//                 <form onSubmit={handleSubmit} className="add-ingredient-form">
//                     <input
//                         type="text"
//                         placeholder="e.g. oregano"
//                         aria-label="Add ingredient" 
//                         name="ingredient"
//                     />
//                     <button>Add ingredient</button>
//                 </form>
//                 <ul>{ingredients}</ul>
//             </main>
//         </>
//     )
// }