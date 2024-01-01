// import Error from '@Components/Error/Error';
import InputPass from '@UI/Inputs/InputPass';
import Button from '@UI/Buttons/Button/Button';

export default function Register() {
  return (
    <form className="auth__form">
      <p>Enter your email and password to register</p>
      {/* <Error error/> */}
      <div className="auth__fields">
        <input type="text" placeholder="Fullname" />
        <input type="email" placeholder="Enter your email address" />
        <InputPass placeholder="Password" />
        <InputPass placeholder="Confirm password" />
      </div>
      <Button type="submit">Register</Button>
    </form>
  );
}
