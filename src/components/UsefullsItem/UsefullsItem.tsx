import styles from './usefullsItem.module.css'

interface UseFulsItemsRows {
  header?: string;
  content?: string;
  subcontent?: string;
  pic?: string;
}

interface PropTypes {
  titles: string;
  info: UseFulsItemsRows[];
}

const UsefullsItem = ({ titles, info }: PropTypes) => {
  return (
    <div className={styles['usefullsItem']}>
      <h5 className={styles['usefullsHeader']}>{titles}</h5>
      <div className={styles['usefullsBody']}>
        {info[0].pic ? 
          <div className={styles['usefullsImgLine']}>
            <div className={styles['usefullsImgCont']}><img src={info[0].pic} alt='Картинка' /></div>
            <div className={styles['usefullsTextCont']}>{info[0].content}</div>
          </div> :
          <div className={styles['usefullsBodyContent']}>
            {info.map(e => 
              <div className={styles['usefullsBodyContentItem']}>
                <span className={styles['itemBold']}>{e.header}</span>
                {' ' + e.content + ' '} 
                <span className={styles['itemGrey']}>{e.subcontent}</span>
              </div>)}
          </div>
        }
      </div>
    </div>
  )
}

export default UsefullsItem
