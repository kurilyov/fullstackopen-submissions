const Person = ({ person, removeHandler }) => {
    return (
        <li>{person.name} {person.number} <button onClick={removeHandler}>Remove</button></li>
    )
}

export default Person