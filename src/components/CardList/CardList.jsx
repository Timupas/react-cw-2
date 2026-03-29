export const CardList = ({data}) => {
    
    return (
        <ul>{
            data.map(({id, name, age, city, email, isStudent, createdAt}) => {
                <li key={id}>
                    <h2>{name}</h2>
                    <p>{age}</p>
                    <p>{city}</p>
                    <a href={email}>{email}</a>
                    <p>{isStudent?"Student":"No student"}</p>
                    <time>{createdAt}</time>
                </li>
            })}</ul>
    )
}