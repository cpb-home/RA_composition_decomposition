import styles from './banner.module.css'

const Banner = () => {
  return (
    <div className={styles['bannerCont']}>
      <img src='https://hrtechweekly.files.wordpress.com/2015/11/hdbanner_main_background.jpg' alt='Баннер' />
    </div>
  )
}

export default Banner
