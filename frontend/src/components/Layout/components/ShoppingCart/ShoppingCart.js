import React from "react";

function ShoppingCart(props) {
  return (
    <div className="flex flex-col max-w-full p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold">Giỏ hàng của bạn</h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
          <div className="flex w-full space-x-2 sm:space-x-4">
            {/* IMAGE_EDITOR */}
            <div className="w-80 h-30 overflow-hidden rounded-lg mb-1">
              <img
                className="w-80 h-30 rounded-lg object-cover object-center mb-6 transform hover:scale-110 duration-200 shrink-0"
                src="https://plus.unsplash.com/premium_photo-1666184129856-e421e3edc1db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt="content"
              />
            </div>

            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                  <h2 className="text-lg text-white font-medium title-font mb-2">
                    Tên sản phẩm
                  </h2>
                  <p className="text-sm dark:text-gray-400">
                    Loài cá này còn có tên gọi là Mandarinfish là loài cá đẹp và
                    độc đáo nhất thế giới.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">100.000 đ</p>
                  <p className="text-sm line-through dark:text-gray-600">
                    500.000 đ
                  </p>
                </div>
              </div>
              <div className="flex text-sm divide-x">
                <button
                  type="button"
                  className="flex items-center px-2 py-1 pl-0 space-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                    <rect width="32" height="200" x="168" y="216"></rect>
                    <rect width="32" height="200" x="240" y="216"></rect>
                    <rect width="32" height="200" x="312" y="216"></rect>
                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                  </svg>
                  <span>Xóa sản phẩm khỏi giỏ hàng</span>
                </button>
                <button
                  type="button"
                  className="flex items-center px-2 py-1 space-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                  </svg>
                  <span>Chọn</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className="space-y-1 text-right">
        <p>
          Tổng tiền:
          <span className="font-semibold ml-1">1.400.000 đ</span>
        </p>
        <p className="text-sm dark:text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:border-violet-400"
        >
          Back
          <span className="sr-only sm:not-sr-only">to shop</span>
        </button>
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
        >
          <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
