import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import AuthLayout from '~/pages/_layouts/auth'
import DefaultLayout from '~/pages/_layouts/default'


export default function RouteWrapper({
    component:Component,
    isPrivate = false,
    ...rest
}){
    const signed = false;

    /**
     * 
     * Se o usuário não tiver logado e 
     * está tentando acessar uma rota privada
     * ele é direcionado para o login
     * 
     */
    if(!signed && isPrivate){
        return <Redirect to="/" />
    }


    /**
     * Se o usuário está logado e está 
     * tentando acessar uma rota não privada
     * ele é direcionado ao dashboard
     * 
     */
    if( signed && !isPrivate){
        return <Redirect to="/dashboard" />
    }

    const Layout = signed ? DefaultLayout : AuthLayout;
    return(
        <Route 
            { ...rest}
            render={ props => (
                <Layout>
                    <Component {...props}/>
                </Layout>
            )}
        />
    )
}