import React    from 'react';
import Form     from './Form/Form';
import image    from '../../images/working.png';

function Login(props) {
    return (
        <div className='container-fluid  mt-5'>
            <div className='row mt-5'>
                <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 '>
                    <div className='container-fluid'>
                        <div className='row d-flex justify-content-center'>
                            <Form />
                        </div>
                    </div>
                </div>
                <div  className='col-6 bgImage'>
                    <img src={image} style={{width:"100%", height:"80%"}} />
                </div>
            </div>
        </div>
    );
}

export default Login;