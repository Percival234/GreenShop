import Button from '@UI/Buttons/Button';
import InputPass from '@UI/Inputs/InputPass';

export default function Login() {
  return (
    <div className="login">
      <form className="modal-auth__form">
        <div className="modal-auth__title">Enter your username and password to login.</div>
        <div className="modal-auth__message">Invalid Email or Password</div>
        <div className="modal-auth__inputs">
          <input type="email" placeholder="Enter your username" />
          <InputPass placeholder="Password" />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
