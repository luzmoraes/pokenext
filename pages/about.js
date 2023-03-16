import Image from 'next/image'

import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas explicabo modi magni alias exercitationem debitis voluptatem nisi, maxime ad! Ipsa voluptatibus delectus, nulla corrupti facilis quidem. Illo, libero harum?</p>
      <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
    </div>
  )
}

export default About