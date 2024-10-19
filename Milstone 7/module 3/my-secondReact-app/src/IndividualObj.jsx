export default function IndividualObj({indivuji}) {
    const {name, email} = indivuji;
    return (
        <div>
            <h2>Name: {name} </h2>
            <p>Email: {email}</p>
        </div>
    )
}