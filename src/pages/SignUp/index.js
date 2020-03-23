import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import logo from '~/assests/logo.svg';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/module/auth/actions';


const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatorio'),
  password: Yup.string().min(6, 'A senha precisa no mínimo 6 caracteres').required('A senha é obrigatorio')
})


export default function SignUp() {

  const dispatch = useDispatch()

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password))
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
