import {Switch, Route} from 'react-router-dom'

import BrandsSection from './components/BrandsSection'
import SamsungProducts from './components/SamsungProducts'

import SonyProducts from './components/SonyProducts'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={BrandsSection} />
      <Route exact path="/Samsung" component={SamsungProducts} />

      <Route exact path="/Sony" component={SonyProducts} />
    </Switch>
  </div>
)

export default App
