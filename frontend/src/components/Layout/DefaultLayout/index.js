import Footer from './Footer';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="mx-[5%] my-[2%]">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
