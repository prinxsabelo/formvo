import { Route, Switch } from 'react-router-dom';
import Home from '../../dashboard/pages/Home';
import UserForms from '../../forms/pages/UserForms';
import Trash from '../../trash/pages/Trash';
import Users from '../../users/pages/Users';

const Container = () => {
    return (
        <div className="bg-white text-gray-800 w-full overflow-x-hidden flex-1  border-2  shadow-lg">
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/forms" exact>
                    <UserForms />
                </Route>

                <Route path="/trash" exact>
                    <Trash />
                </Route>
                <Route path="/profile" exact>
                    <Users />
                </Route>

            </Switch>
        </div>

    )
}
export default Container;