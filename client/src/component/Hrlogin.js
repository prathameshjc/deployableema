import React, { Component } from 'react'
import '../css/Hrcss.css'
export class Hrlogin extends Component {
    render() {
        return (
            <div className='body'>
                <div className="d-flex justify-content-center align-items-center login-container">
        <div className="login-form text-center">
            <h1 className="mb-5 font-weight-light text-uppercase">Login</h1>
            <div className="form-group">
                <input type="text" className="form-control rounded-pill form-control-lg" placeholder="Username"/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control rounded-pill form-control-lg" placeholder="Password"/>
            </div>
            <div className="forgot-link form-group d-flex justify-content-between align-items-center">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="remember"/>
                    <label className="form-check-label" for="remember">Remember Password</label>
                </div>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">Log in</button>
          
        </div>
    </div>
            </div>
        )
    }
}

export default Hrlogin
