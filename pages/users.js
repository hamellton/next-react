import Link from 'next/link'
import {useEffect, useState} from "react"
import MainContainer from "../Components/MainContainer"

const Users = ({users}) => {
    // const [users, setUsers] = useState([
    //     {id: 1, name: 'kostya'},
    //     {id: 2, name: 'test'}
    // ])
    // useEffect(async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const users = await response.json(response)
    // }, [])

    return (
        <MainContainer keywords={users.name}>
            <h1>Список пользователей</h1>
            <ul>
                {users.map((el) =>
                    <li key={el.id}>
                        <Link href={`/users/${el.id}`}>
                            <a>{el.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
            <style jsx>
                {`
                  .navbar {
                    background: orange;
                    padding: 15px;
                  }

                  .link {
                    text-decoration: none;
                    color: aliceblue;
                    font-size: 20px;
                    margin: 10px;
                  }
                `}
            </style>
        </MainContainer>
    )
}

export default Users

export const getStaticProps = async (context) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json(response)
    return {
        props: {users}, // will be passed to the page component as props
    }
}