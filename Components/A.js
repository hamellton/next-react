import Link from 'next/link'
import styles from '../styles/A.module.css'

const A = (props) => {
    return (
        <Link href={props.href}>
            <a className={styles.link}>{props.text}</a>
        </Link>
    )
}

export default A