import styles from './tab.module.css'

interface PropTypes {
  title: string
}

const Tab = ({ title }: PropTypes) => {
  return (
    <div className={styles['']}>
      {title}
    </div>
  )
}

export default Tab
