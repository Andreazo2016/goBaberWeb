import React from 'react';

import { Wrapper, Container } from './styles';

export default function AuthLayout({ children }) {
    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    );
}
