import styles from './Loading.module.css';

export const Loading = () => {
    return (
        <div className={styles['loading-container']}>
            <div className={styles['loading-spinner']}>
                <span className={styles['loading-spinner-text']}>Loading</span>
            </div>
        </div>
    );
};