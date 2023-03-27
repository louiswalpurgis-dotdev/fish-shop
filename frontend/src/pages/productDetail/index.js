import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '~/api/axios';
import { connect } from 'react-redux';

import { buyProduct } from '~/action/action'

const StyleAmountCss =
    'flex items-center justify-center w-8 h-8 rounded-full text-[20px] text-white bg-violet-500 border-0  focus:outline-none hover:bg-violet-600';

function ProductDetail(props) {

    const [product, setProduct] = useState([]);

    const { productId } = useParams();
    const navigate = useNavigate();

    const GET_ONE_PRODUCT = `/product/${productId}`;
    useEffect(() => {
        axios.get(GET_ONE_PRODUCT).then((product) => {
            if (!product.data) {
                navigate('/unauthorized', { replace: true });
            }
            setProduct(product.data);
        });
    }, [productId]);
    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap" key={product.id}>
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                        src={product.image}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">CATEGORY</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center text-red-500">{product.amount}</span>
                        </div>
                        <p className="leading-relaxed text-justify">{product.info}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <div className="flex items-center justify-center gap-2">
                                <span className="mr-3">Số lượng</span>
                                <button className={StyleAmountCss}>-</button>
                                <span className="flex items-center justify-center border-2 border-gray-300 rounded-lg w-10 h-10 focus:outline-none">
                                    1
                                </span>
                                <button className={StyleAmountCss}>+</button>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">{product.price} đ</span>
                            <button
                                onClick={() => props.buyProduct(product)}
                                className="flex ml-auto text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded"
                            >
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
      buyProduct: (product_current) => dispatch(buyProduct(product_current)),
    };
  };
  const mapStateToProps = (state) => {
    return {
      cart: state.cart.cartAr,
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
