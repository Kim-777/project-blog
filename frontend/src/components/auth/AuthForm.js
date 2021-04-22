import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }

`;

const AuthForm = () => {
    return (
        <AuthFormBlock>
            AuthForm
        </AuthFormBlock>
    )
}

export default AuthForm
