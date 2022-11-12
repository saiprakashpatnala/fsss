import './index.css'

const SonyBrandProducts = props => {
  const {sonyProductsInfo} = props
  const {name, image, weight} = sonyProductsInfo

  return (
    <li className="items-list">
      <div className="products-info">
        <div className="details-container">
          <img src={image} alt="productImage" className="product-image" />
          <div>
            <h1 className="product-name">{name}</h1>
            <p className="price">Price:{weight}</p>
          </div>
        </div>
        <div className="cart-container">
          <button className="button" type="button">
            -
          </button>
          <p>0</p>
          <button className="button" type="button">
            +
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default SonyBrandProducts
