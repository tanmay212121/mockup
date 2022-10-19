import React            from 'react';
import { useNavigate }  from 'react-router-dom';
import                  './Form.css'

const Form = props => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    }

    return (
        <div className='col-xs-12 col-xl-6'>
            <h4>Sign In</h4>
            <h6 className='mt-3 mb-3'>New user? <span className='text-primary'>Create an account</span></h6>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" >Keep me sign in</label>
                </div>
                <button className='btn btn-sm btn-dark w-100 '>Sign In</button>
                <div className='d-flex justify-content-between mt-3 row'>
                    <div className=' col-3 '>
                        <div className='line align-self-center w-100'></div>
                    </div>
                    <div className='col-5 d-flex justify-content-center align-items-center p-0'>
                        <p className='m-0'>Or Sign In with</p>
                    </div>
                    <div className='col-3 '>
                        <div className='line align-self-center w-100'></div>
                    </div>
                </div>

                <div className='d-flex justify-content-evenly align-items-center my-3'>
                    <button className='rounded-circle d-flex align-items-start bg-light' type='button'><i className="bi bi-google space"></i></button>
                    <button className='rounded-circle d-flex align-items-start bg-light' type='button'><i className="bi bi-facebook space"></i></button>
                    <button className='rounded-circle d-flex align-items-start bg-light' type='button'><i className="bi bi-linkedin space"></i></button>
                    <button className='rounded-circle d-flex align-items-start bg-light' type='button'><i className="bi bi-twitter space"></i></button>
                </div>
            </form>
        </div>
    );
};


export default Form;