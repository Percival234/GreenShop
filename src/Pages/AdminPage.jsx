import { useForm } from 'react-hook-form';

import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import InputWithLabel from '@UI/Inputs/InputWthLabel/InputWithLabel';

export default function AdminPage() {
  const { register, handleSubmit } = useForm();

  async function onCreate() {
    alert('Good');
  }

  return (
    <div className="__container">
      <h1>Admin panel</h1>
      <div className="grid">
        <div>
          <TitleBorder>Sizes</TitleBorder>
          <div>
            {/* {sizes.map((size) => {(
            <div>
              <div>{size.name}</div>
              <div>{size.count}</div>
            </div>
          )})} */}
          </div>
          <form onSubmit={handleSubmit(onCreate)}>
            <h3>Create Size</h3>
            <InputWithLabel type="text" {...register('size-create')} />
            <button type="submit">Create Size</button>
          </form>
          <form>
            <h3>Change Size</h3>
            <input type="text" {...register('size-update')} />
            <button type="submit">Change Size</button>
          </form>
        </div>
      </div>
    </div>
  );
}
