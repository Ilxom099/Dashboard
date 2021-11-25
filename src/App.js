import React, {useEffect,useState} from 'react'
 import Sider from './SideBar/SideBar'
 import Content from './Content/Content'
import Orders from './Pages/Orders/Orders'
import Products from './Pages/Products/Product'
import Sales from './Pages/Sales/Sales'
import { Dashboard,Sid,MobilNav} from './AppStyled'
import {Switch,NavLink,Route} from "react-router-dom";
import Creat from "./Pages/Creat/Creat";
import History from "./Pages/History/History";
import {GetProduct} from "./Store/Redux/redux";
import {useDispatch} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import  LoginForm from './SIgn In/Login Form'

function App() {

    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(GetProduct())
    },[]);





    //Sign In
    const adminUser = {
        login:"admin",
        password:"admin099"
    }

    const [user,setUser] = useState({login:""})
    const [error,setError] = useState("");

    const Login = details => {

        if (details.login === adminUser.login && details.password === adminUser.password){
            console.log("Logged in")
            setUser({
                login:details.login
            })
        }
        else {
            setError(  "Логин или пароль неверно")

        }
    }
    const Logout = () => {
        setUser({login:""})
    }



    return (


        <div className={'container-fluid m-0 p-0 '}>

          {(user.login != "") ? (

                  <Dashboard>
                      <Sid>  <Sider Logout={Logout}/> </Sid>

                      <Switch>
                          <Route path={'/'} exact> <Content/> </Route>
                          <Route path={'/orders'} exact > <Orders/>    </Route>
                          <Route path={'/products'} exact> <Products/> </Route>
                          <Route path={'/create'} exact> <Creat/> </Route>
                          <Route path={'/sales'} exact> <Sales/> </Route>
                          <Route path={'/history'} exact> <History/> </Route>

                      </Switch>

                      <MobilNav>
                          <NavLink exact activeClassName={'main-nav-active'}  to={'/'} className={'mobilLinks'}>
                              <i className="bi bi-house  fonts"> </i>
                          </NavLink>
                          <NavLink exact activeClassName={'main-nav-active'}  to={'/orders'} className={'mobilLinks'}>
                              <i className="bi bi-bag-plus fonts"> </i>
                          </NavLink>
                          <NavLink exact activeClassName={'main-nav-active'}  to={'/create'} className={'mobilLinks'}>
                              <i className="bi bi-plus-circle fonts"> </i>
                          </NavLink>
                          <NavLink exact activeClassName={'main-nav-active'}  to={'/products'} className={'mobilLinks'}>

                              <i className="bi bi-cart2 fonts"> </i>

                          </NavLink>
                          <NavLink exact activeClassName={'main-nav-active'}  to={'/history'} className={'mobilLinks'}>
                              <i className="bi bi-journal-text fonts"> </i>
                          </NavLink>
                      </MobilNav>
                      <ToastContainer/>
                  </Dashboard>


              )
              :
              (
              <LoginForm Login={Login} error={error}/>
              )

          }


      </div>



  );
}

export default App

// export default connect(({ibs:{product}}) => ({product}), null )(App)
