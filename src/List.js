import { people } from "./Data";
import { getImageUrl } from "./Utils";

export default function List(){
    const chemists = people.filter(person=> person.profession === 'chemist');
    const listItem = chemists.map(person => 
        <li id="Centralizado">
            <img
            src={getImageUrl(person)}
            alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '} know for {person.accomplisment} 
            </p>
        </li>
        );
        return <ul>{listItem}</ul>;
}