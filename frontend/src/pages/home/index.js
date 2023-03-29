import ProductCard from '~/components/Layout/components/ProductCard/ProductCard';
import Slide from '~/components/Layout/components/Slide/Slide';

function Home() {
    return (
        <div className="mx-10">
            <Slide />
            <ProductCard />
        </div>
    );
}

export default Home;
