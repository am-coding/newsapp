import React from 'react';
import styled from 'styled-components'
import signup from '../assets/signup.svg'

const StyledSignUp = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100vh;
    h1 {
        color: #091A20;
        font-size: 3.5em;
    }
    form {
        margin-top: 2em;
    }
    .illus {
        width: 100%;
        max-width: 50%;
        height: auto;
    }
    .divider {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 3em;
    }
    .label-div {
        display: flex;
        flex-direction: column;
    }
    input {
        width: 100%;
        height: 3em;
        background-color: #fdfdfd;
        border: 1px solid #b9b9b9;
        border-radius: 5px;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    @media only screen and (max-width: 600px) {
        justify-content: space-around;
        flex-direction: column;
        .illus {
            max-width: 100%;
        }
        h1 {
            text-align: center;
            font-size: 2.5em;
        }
        form {
        margin-top: -1em;
        padding: 1em;
    }
    }
`;

const SignUp = () => {
    return (
        <StyledSignUp>
            <form>
                <h1>Sign Up</h1>
                <div className="divider">
                    <div className="label-div">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    
                    <div className="label-div">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                </div>
               
                <label for="password">Password:</label> <br />
                <input type="password" id="password" name="password" /> <br/>
                {/* <input type="submit" value="Submit"></input> */}
            </form>
            <img className="illus" src={signup} alt="illus" />
        </StyledSignUp>
    )
}

export default SignUp;