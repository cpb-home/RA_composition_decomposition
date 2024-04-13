import styles from './newsItem.module.css'

interface PropTypes {
  content: string;
  icon: string
}

const NewsItem = ({ content, icon }: PropTypes) => {
  return (
    <div className={styles['']}>
      <div className={styles['newsItemIconCont']}>
        <img src={icon} alt='картинка' />
      </div>
      <div className={styles['newsItemTextCont']}>
        {content}
      </div>
    </div>
  )
}

export default NewsItem
