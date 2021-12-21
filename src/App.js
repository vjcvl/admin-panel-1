import './admin.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import UserList from './UserList';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import UserForm from './UserForm';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

function App() {
    return (

        <Router>
            <div id="wrapper">
                <Sidebar></Sidebar>
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Topbar></Topbar>
                        <div class="container-fluid">
                            

                                <Route path="/">
                                    <Dashboard/>
                                </Route>
                                <Route path="/users">
                                    <UserList/>
                                </Route> 
                                <Route path="/product">
                                    <ProductList></ProductList>
                                </Route> 
                                <Route path="/userform">
                                    <UserForm></UserForm>
                                </Route> 
                                <Route path="/productform">
                                    <ProductForm></ProductForm>
                                </Route>
                        </div>
                    </div>
                </div>
            </div>
        </Router>

    );
}

export default App;
