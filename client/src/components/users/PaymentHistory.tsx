export const PaymentHistory = ()=>{
    return (<>
     <table className="table table-wishlist table-mobile">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Số lượng</th>
            <th>Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="product-col">
              <div className="product">
                <figure className="product-media">
                  <a href="#">
                    <img
                      src="assets/images/products/table/product-1.jpg"
                      alt="Product image"
                    />
                  </a>
                </figure>

                <h3 className="product-title">
                  <a href="#">Beige knitted elastic runner shoes</a>
                </h3>
                {/* End .product-title */}
              </div>
              {/* End .product */}
            </td>
            <td className="price-col">$84.00</td>
            <td className="price-col">10</td>
            <td className="stock-col">
              <span className="in-stock">In stock</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>)
}