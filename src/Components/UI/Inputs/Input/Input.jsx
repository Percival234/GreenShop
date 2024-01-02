import './Input.scss';

export default function Input({ register, name, settings, ...props }) {
  return register && <input {...props} {...register(name, { ...settings })} className="input" />;
}
