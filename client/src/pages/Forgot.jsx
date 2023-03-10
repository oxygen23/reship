import { useState } from 'react';

function Forgot() {
  const [forgotForm, setForgotForm] = useState({
    email: '',
  });

  const updateForm = (e) => {
    setForgotForm({
      ...forgotForm,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = (e) => {
    e.preventDefault()
    console.log(forgotForm);
    setForgotForm({
      email: ''
    })
  }
  return (
    <section className='auth'>
      <div className='container auth__container'>
        <h1 className='auth__title'>
          <img src='/img/key 1.svg' alt='' />
          Забыли пароль?
        </h1>
        <div className='main-form'>
          <form className='main-form__form' action=''>
            <input
              className='main-form__form-input'
              name='email'
              value={forgotForm.email}
              onChange={updateForm}
              type='text'
              placeholder='Адресс эл. почты'
            />
            <button className='buttons__19' type='submit' onClick={sendForm}>
              Восстановить пароль
            </button>
          </form>
          <div className='auth__links'>
            <a href='/auth.html' className='auth__forgot'>
              Войти в аккаунт
            </a>
            <a href='/reg.html' className='auth__reg'>
              Зарегистрироваться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forgot;
