import React from 'react'
import './styles.css'
import { PRIMARY } from '../../styles/colors';
import LoginForm from '../../components/organisms/LoginForm';

export default function LoginTemplate() {
  return (
    <div style={{backgroundColor: PRIMARY}} className="page">
     
      <div className="login-temp-sub-cont">
        
      </div>
      <div className="login-temp-sub-cont">
          <LoginForm/>
      </div>
    </div>
  )
}
