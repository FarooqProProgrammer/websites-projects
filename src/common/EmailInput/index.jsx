import React from 'react'
import styled from 'styled-components'


const EmailItem = styled.div`
    border-radius: 8px;
   
    width: 100%;
    height: 60px;
    background: #131e3a;
    margin-top: 30px;
    display: flex;
    align-items: center;

    input { 

        flex: 2;
        height: 100%;
        background-color: transparent;

      
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: rgba(255, 255, 253, 0.72);
        border: none;

        &:focus { 
            border: none;
            outline: none;
        }

        
    }


    button { 
        flex: 1;
        height: 100%;
    }
`



const EmailInput = () => {
  return (
    <EmailItem className='ps-3'>
      <input type="text" placeholder='Enter Email' />
      <button className='btn primary-bg-color text-white'>Subscribe</button>
    </EmailItem>
  )
}

export default EmailInput
