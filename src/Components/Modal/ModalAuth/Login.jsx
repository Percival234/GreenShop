// import Error from '@Components/Error/Error';
import InputPass from '@UI/Inputs/InputPass';
import Button from '@UI/Buttons/Button/Button';

export default function Login() {
  return (
    <form className="auth__form">
      <p>Enter your email and password to login</p>
      {/* <Error error={}/ > */}
      <div className="auth__fields">
        <input type="email" placeholder="Enter your email" />
        <InputPass placeholder="Password" />
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
}
