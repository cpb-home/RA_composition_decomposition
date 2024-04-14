import styles from './serviceItem.module.css'

interface PropTypes {
  title: string;
}

const ServiceItem = ({ title }: PropTypes) => {
  return (
    <div className={styles['serviceItem']}>
      {title}
    </div>
  )
}

export default ServiceItem
