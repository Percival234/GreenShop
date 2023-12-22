import Button from '@UI/Buttons/Button';
import InputPass from '@UI/Inputs/InputPass';

export default function Register() {
  return (
    <div className="register">
      <form className="modal-auth__form">
        <div className="modal-auth__title">Enter your email and password to register.</div>
        <div className="modal-auth__message">Error</div>
        <div className="modal-auth__inputs">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Enter your email address" />
          <InputPass placeholder="Password" />
          <InputPass placeholder="Confirm password" />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}
