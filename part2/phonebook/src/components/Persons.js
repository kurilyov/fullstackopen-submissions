import Person from "./Person"

const Persons = ({ persons, removeHandler }) => {
    return (
        <ul>
            {persons.map(person =>
                <Person
                    key={person.id}
                    person={person}
                    removeHandler={(() => removeHandler(person.id))}
            />)}
        </ul>
    )
}

export default Persons