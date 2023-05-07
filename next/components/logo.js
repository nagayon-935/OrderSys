import styles from 'styles/logo.module.css' 
import Link from 'next/link'
export default function Logo({boxOn = false}){
    return(
        <Link href="/">
            <p className={boxOn ? styles.box : styles.basic}>大中</p>
        </Link>
    )
}