import styles from './TaskWrapper.module.css'

export const TaskWrapper = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  )
}
