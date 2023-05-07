import styles from 'styles/hero.module.css'
import Image from 'next/image'
import eyecatch from 'images/daichu.svg'

export default function Hero({ title, subtitle, imageOn = false ,titleSize = 'initial'}) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.text}>
                <p className={styles.subtitle}>{subtitle}</p>
                <h1 className={styles.title} style={{'--title-size':titleSize}}>{title}</h1>
            </div>
            {imageOn && (
                <figure className={styles.image}>
                    <Image
                        src={eyecatch}
                        alt=""
                        layout='responsive'
                        sizes='(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw'
                        priority
                        placeholder='blue'
                        />
                </figure>
            )}
        </div>
    )
}