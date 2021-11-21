import React from 'react';
import NavBar from '../components/NavBar';
import {Container} from "@material-ui/core";

const MailLayout: React.FC = ({children}) => {
    return (
        <>
            <NavBar/>
            <Container>
                {children}
            </Container>
        </>
    )
}

export default MailLayout;