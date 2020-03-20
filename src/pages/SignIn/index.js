import React, { Component } from 'react';
import logo from '~/assests/logo.svg';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import  * as Yup from 'yup';


const schema = Yup.object().shape({
  email:Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatorio'),
  password:Yup.string().required('A senha é obrigatorio')
})

export default class SignIn extends Component {

  handleSubmit(data) {
    console.log(data)
  }
  render() {
    return (
      <>
        <img src={logo} alt="Gobarber" />
        <Form schema={schema} onSubmit={this.handleSubmit}>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua Senha" />

          <button type="submit">Acessar</button>
          <Link to="/register">Criar conta gratuita</Link>
        </Form>


      </>
    );
  }
}
