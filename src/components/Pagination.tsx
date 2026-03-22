import styles from '@/app/ui/Pagination.module.css'

interface Props {
    nextPageHandler: () => void,
    prevPageHandler: () => void,
    currentPage: number,
    totalPages: number | undefined;
    pageChangeHandler: (page: number) => void
}

const trimArray = (arr: number[]) => {
    const prefix = arr.slice(0, 3);
    const suffix = arr.slice(-3);
    return [...prefix, '...', ...suffix];
}

const Pagination = ({ nextPageHandler, prevPageHandler, pageChangeHandler, currentPage, totalPages = 0 }: Props) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    console.log(pages, currentPage)
    const toTrimmedPages = pages.length > 10 ? trimArray(pages) : pages;

    return (<ul className={styles.pagination}>
        <li><button disabled={currentPage <= 1} onClick={prevPageHandler}>Zurück</button></li>
        {toTrimmedPages.map((item, index) => (
            <li key={index + 1} className={currentPage === index + 1 ? styles.active : ''}>
                {item !== '...' ? <button onClick={() => pageChangeHandler(index + 1)}>
                    {index + 1}
                </button> : <span>{item}</span>}
            </li>
        ))}
        <li><button disabled={currentPage >= totalPages} onClick={nextPageHandler}>Weiter</button></li>
    </ul>
    )
};
export default Pagination;
