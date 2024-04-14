import styles from './currencyItem.module.css'

interface PropTypes {
  currency: string;
  rate: number;
  changes: string;
}

const CurrencyItem = ({ currency, rate, changes }: PropTypes) => {
  return (
    <div className={styles['currencyItem']}>
      {currency} {rate} <span className={styles['currencyChanges']}>{changes}</span>
    </div>
  )
}

export default CurrencyItem
