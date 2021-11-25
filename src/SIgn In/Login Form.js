import React, {useState} from 'react'
import {Center,Fluid,Content} from './Login Styled'

function LoginForm({Login,error}){

    const [details,setDetails] = useState({login:"",password:""});
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return(
        <Fluid >
            <Content>
                <Center>

                    <form onSubmit={submitHandler}>
                        {(error != "") ? (<p className={'errors'}>{error}</p>) : ""}
                        <div className={'form-inner'}>
                            <div className="form-group">
                                <label className={'login'} htmlFor="login">Login</label>
                                <input  type="text" name="login" id={"login"} className={'passForm'}
                                        placeholder={'Enter login'}
                                        onChange={e => setDetails({...details,login:e.target.value})}
                                        value={details.login}/>
                            </div>
                            <div className="form-group">
                                <label className={'parol'} htmlFor="password">Password</label>
                                <input type="password" name="password" id={"password"}
                                       className={'passForm'} placeholder={"Enter password"}
                                       onChange={e => setDetails({...details,password:e.target.value})}
                                       value={details.password}/>
                            </div>
                            <button type="submit" className={'but'} value={Login}> Войти </button>
                        </div>
                    </form>
                </Center>
            </Content>

        </Fluid>
    )
}
export default LoginForm