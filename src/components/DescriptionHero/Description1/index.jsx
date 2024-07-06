import styles from './style.module.css';
import Cactus from '../../../../public/images/descrip1_assets/2.jpg'

import Image from 'next/image';

export default function index() {

    return (
        <div className={styles.projects}>
            <div className={styles.projectDescription}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={Cactus}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>At <span className="text-gray-600">ACROSS</span>, our hospitality shines through in our tourism and event management services. We are dedicated to creating unforgettable experiences, ensuring every guest feels welcome and valued. Our team meticulously plans and executes events, paying close attention to every detail to provide seamless and memorable experiences.</p>
                </div>
                <div className={styles.column}>
                    <p>In tourism, we offer curated journeys that showcase the best destinations, combining luxury and comfort with authentic local experiences. Our expert guides and personalized itineraries ensure that every traveler enjoys a unique and enriching adventure.</p>
                </div>
            </div>
        </div>
    )
}