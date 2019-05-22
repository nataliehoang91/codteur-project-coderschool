import React from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


class LoginFB extends React.Component {

    render() {
        if(!this.props.isLogin){   
        return (

            <div className="btn btn-block btn-facebook">
                
                
                    <FacebookLogin
                        className="form-popup"
                        appId="2054035894900700" //APP ID NOT CREATED YET
                        fields="name,email,picture"
                        callback={this.props.responseFacebook}
                        render={renderProps => (
                            <i class="fab fa-facebook-f" onClick={renderProps.onClick}><span className="mr-3"></span><span className="font-extra">LOGIN VIA FACEBOOK</span></i>
                        )}
                      
                    />
             

                
            </div>


           
        );
    }
    else{
        return(
        <div>Hello</div>);
    }
    }
}

export default LoginFB;


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