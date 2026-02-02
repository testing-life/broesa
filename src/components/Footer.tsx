import styles from '@/app/ui/Footer.module.css'

const Footer = ({ blok }) => {
    return (
        <footer className={styles.footer}>
            <address>
                <div>
                    <a href={`mailto:${blok.email.url}`}>{blok.email.email}</a>
                    <a href={`tel:${blok.phone_number}`}>{blok.phone_number}</a>
                </div>
                <div>
                    <span>{blok.address_line_1}</span>
                    <span>{blok.address_line_2}</span>
                    <span>{blok.postcode} {blok.town}</span>
                </div>
            </address>
            <div>
                <small>&copy; {new Date().getFullYear()} All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;