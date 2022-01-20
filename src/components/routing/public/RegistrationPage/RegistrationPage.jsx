import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { THUNK_ACTION_register } from '../../../../redux/actions/thunks/thunkAuthActions'
import Loader from '../../../layout/Loader/Loader'
import '../../private/ChooseCharacter/ChooseCharacter.scss'

export default function RegistrationPage() {
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loader = useSelector(state => state.isLoading)

    const nameHandler = (e) => setLogin(e.target.value)
    const emailHandler = (e) => setEmail(e.target.value)
    const passwordHandler = (e) => setPassword(e.target.value)
    const submitHandler = (e) => {
        dispatch(THUNK_ACTION_register({login, email, password}))
    }

    return (<>
        {loader ? <Loader/> : <section className="vh-100" style={{backgroundColor: '#eee'}}>
            <div className="background">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{borderRadius: '25px'}}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registration</p>

                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"/>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input onChange={nameHandler} value={login}
                                                           name="login"
                                                           type="text"
                                                           id="form3Example1c"
                                                           className="form-control"/>
                                                    <label className="form-label"
                                                           htmlFor="form3Example1c">
                                                        Enter your name
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"/>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input onChange={emailHandler}
                                                           value={email}
                                                           name="email"
                                                           type="email" id="form3Example3c"
                                                           className="form-control"/>
                                                    <label className="form-label"
                                                           htmlFor="form3Example3c">
                                                        Enter email
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"/>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input onChange={passwordHandler}
                                                           value={password}
                                                           name="password"
                                                           type="password" id="form3Example4c"
                                                           className="form-control"/>
                                                    <label className="form-label"
                                                           htmlFor="form3Example4c">
                                                        Choose password
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button onClick={submitHandler} type="button"
                                                        className="btn btn-outline-success btn-lg">
                                                    Sign up
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center justify-content-center order-1 order-lg-2">
                                        <img
                                            src="https://dbforgame.herokuapp.com/static/img/logo.png"
                                            className="img-fluid"
                                            alt="Sample"
                                            width="350"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>}
    </>)

}
