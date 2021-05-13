import {useRouter} from "next/router"
import styles from '../../styles/users.module.scss'
import MainContainer from "../../Components/MainContainer"


const User = ({user}) => {
    const {query} = useRouter()

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>Пользователь с id - {query.id}</h1>
                <br/>
                <div>Имя пользователя - {user.name}</div>
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
            </div>
        </MainContainer>
    )
}

export default User

export const getServerSideProps = async ({params}) => {
    console.log(params)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json(response)
    return {
        props: {user}, // will be passed to the page component as props
    }
}
