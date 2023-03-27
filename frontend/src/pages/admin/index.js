import { Link } from 'react-router-dom';

function Admin() {
    return (
        <div className="grid grid-cols-2 gap-4 flex justify-center items-center h-screen">
            <div className='flex justify-center items-center'>
			<Link to="/admin/users">
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                    Quản lý người dùng
                </button>
            </Link>
			</div>
            <div className='flex justify-center items-center'>
			<Link to="/admin/products">
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                    Quản lý sản phẩm
                </button>
            </Link>
			</div>
        </div>
    );
}

export default Admin;
