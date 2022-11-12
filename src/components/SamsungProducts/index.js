import {Component} from 'react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import {Link} from 'react-router-dom'

import SamsungBrandProducts from '../SamsungBrandProducts'

import './index.css'

class SamsungProducts extends Component {
  state = {array: []}

  componentDidMount() {
    this.getSamsungProducts()
  }

  getSamsungProducts = async () => {
    const url =
      'https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const brandsInformationArray = data.map(each => ({
      id: each.id,
      name: each.name,
      brand: each.brand,
      image: each.icon,
      price: each.price,
      weight: each.weight,
    }))
    this.setState({array: brandsInformationArray})
  }

  render() {
    const {array} = this.state
    const samsungBrandedProducts = array.filter(
      each => each.brand === 'Samsung',
    )

    return (
      <div>
        <Link to="/">
          <AiOutlineArrowLeft />
        </Link>
        <h1 className="heading">Products of Samsung</h1>
        <ul className="products-list">
          {samsungBrandedProducts.map(each => (
            <SamsungBrandProducts key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default SamsungProducts
