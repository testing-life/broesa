import styles from '@/app/ui/Pagination.module.css'

interface Props {
    nextPageHandler: () => void,
    prevPageHandler: () => void,
    currentPage: number,
    totalPages: number | undefined;
    pageChangeHandler: (page: number) => void
}

const Pagination = ({ nextPageHandler, prevPageHandler, pageChangeHandler, currentPage, totalPages = 0 }: Props) => {
    return (<ul className={styles.pagination}>
        <li><button disabled={currentPage <= 1} onClick={prevPageHandler}>Prev</button></li>        
        {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1} className={currentPage === index + 1 ? styles.active : ''}>
                <button onClick={() => pageChangeHandler(index + 1)}>
                    {index + 1}
                </button>
            </li>
        ))}
        <li><button disabled={currentPage >= totalPages} onClick={nextPageHandler}>Next</button></li>
    </ul>
    )
};
export default Pagination;
