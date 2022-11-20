import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import {useState} from 'react';


const initialState = {
  email: '',
  password: '',
};

function LoginForm() {
  const [loginData, setLoginData] = useState(initialState);

  const handleChange = (event)=>{
    setLoginData({...loginData, [event.target.name]: event.target.value});

  }
 
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">LOG IN</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg1' type='email' name="email" size="lg" onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg2' type='password'  name="password" size="lg" onChange={handleChange}/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn size='lg'>
                Login
              </MDBBtn>

              <hr className="my-4" />

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default LoginForm;