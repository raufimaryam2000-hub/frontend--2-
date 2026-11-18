function Activity({ activity }) {
    return (
        <div>
            <h2>{activity.activity}</h2>
            <p>Typ: {activity.type}</p>
            <p>Deltagre: {activity.participants}</p>
            <p>Pris: {activity.price}</p>
        </div>
    )
} 

export default Activity  