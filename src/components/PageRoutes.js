import { Switch, Route } from 'react-router-dom'
import Landing from '../pages/Landing'
import Rentals from '../pages/Rentals'

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/rentals' component={Rentals} />
      {/* make login & register into modal */}
    </Switch>
  )
}

export default PageRoutes
