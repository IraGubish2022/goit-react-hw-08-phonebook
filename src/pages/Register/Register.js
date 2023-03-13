import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './Register.module.css';

const Register = () => {
  return (
    <div>
      {/* <Helmet> */}
      <h1 className={css.title}>Registration ↓</h1>
      {/* </Helmet> */}
      <RegisterForm />
    </div>
  );
};

export default Register;