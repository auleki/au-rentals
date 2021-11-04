import { Switch, Route } from 'react-router-dom'
import Admin from '../pages/Admin'
import Landing from '../pages/Landing'
import Rentals from '../pages/Rentals'
import Dashboard from '../pages/Dashboard'

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/rentals' component={Rentals} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/admin" component={Admin} />
      {/* make login & register into modal */}
    </Switch>
  )
}

export default PageRoutes
