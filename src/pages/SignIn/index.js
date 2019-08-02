import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/instagram.svg';

const schema = Yup.object().shape({
  login: Yup.string().required('Por favor, preencha este campo'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Instagram" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="login" type="text" placeholder="Usuário no Instagram" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Acessar</button>
      </Form>
    </>
  );
}
