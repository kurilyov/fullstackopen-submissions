import Part from "./Part";
import Sum from './Sum'

const Content = ({ parts }) => {
    const total = parts.reduce((total, part) => {
        return total + part.exercises
    }, 0)

    return (
        <div>
            {parts.map(part =>
                <Part
                    key={part.id}
                    part={part}
                />
            )}
            <Sum number={total} />
        </div>
    )
}

export default Content