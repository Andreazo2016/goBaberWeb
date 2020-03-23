import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import {store} from '~/store';




export default function RouteWrapper({
    component:Component,
    isPrivate = false,
    ...rest
}){

    /**
     * Pega o valor da variavel  que ta dentro do reducer auth dentro de store
     * 
     */
    const signed = store.getState().auth.signed;

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