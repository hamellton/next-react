import A from '../Components/A'
import Head from "next/head"
import MainContainer from "../Components/MainContainer"

const Index = () => {
    return (
        <>
            <MainContainer keywords={'main page'}>
                <div>
                    <h1>Главная страница</h1>
                    <style jsx>
                        {`
                          .navbar {
                            background: orange;
                            padding: 15px;
                          }
                        `}
                    </style>
                </div>
            </MainContainer>
        </>
    )
}

export default Index