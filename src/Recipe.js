
export function Recipe({drinkers}){
    return (
        <ol id="Centralizado">
            <li>Boil {drinkers} cupes of water.</li>
            <li>
                Add {drinkers} spoons of tea and{0.5 * drinkers} spoons of spice.
            </li>
            <li>
                Add {0.5 * drinkers} cups of milk to boil and sugar to taste
            </li>
        </ol>
    )
}