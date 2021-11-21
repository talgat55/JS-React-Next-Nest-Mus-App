import React from 'react';
import NavBar from '../components/NavBar';
import MailLayout from "../layouts/MailLayout";

const Index = () => {

    return (
        <>
            <MailLayout>
                <div className="center">
                    <h1> Welcome</h1>
                    <h3>Here collect best music</h3>
                </div>
            </MailLayout>
            <style jsx>
                {
                    `
                      .center {
                        margin-top: 200px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                      }
                    `
                }
            </style>
        </>
    )
}

export default Index;