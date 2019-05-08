import React from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';

class Login extends React.Component {
    

    render() {
        // const style = this.props.isLogin ? {} : { display: "none" };
        return (
            <div id="myForm text-center">
                Please Login
                {!this.props.isLogin && (
                    <FacebookLogin
                        className="form-popup"
                        appId="2054035894900700" //APP ID NOT CREATED YET
                        fields="name,email,picture"
                    
                        callback={this.props.responseFacebook}
                        render={renderProps => (
                            <i class="pl-3 fab fa-2x fa-facebook  login-icon" onClick={renderProps.onClick}></i>
                        )}
                        disabled={!this.props.isLogin}
                    />
                )}

                
            </div>
        );
    }
}

export default Login;


// {
// !this.props.isLogin && (
//     <GoogleLogin
//         clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//         render={renderProps => (
//             <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
//         )}
//         buttonText="Login"
//         onSuccess={this.props.responseGoogle}
//         onFailure={this.props.responseGoogle}
//         cookiePolicy={'single_host_origin'}
//     />
// )
// }