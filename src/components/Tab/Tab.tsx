import styles from './tab.module.css'

interface PropTypes {
  title: string
}

const Tab = ({ title }: PropTypes) => {
  return (
    <div className={styles['tab']}>
      {title}
    </div>
  )
}

export default Tab
