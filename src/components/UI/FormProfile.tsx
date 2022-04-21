import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { IUser } from '../../models/IUser';

interface PropsFormProfile {
  profile: IUser;
  editActive: boolean;
}

interface IFormInput extends IUser {
  comment: string;
}

const FormProfile: FC<PropsFormProfile> = ({ profile, editActive }) => {
  const { name, username, email, address, phone, website } = profile;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({ mode: 'onChange' });

  const onSubmit = (data: IFormInput) => {
    console.log('Sent data: ', data);
  };
  return (
    <form className='profile__form' onSubmit={handleSubmit(onSubmit)}>
      <div className='profile__form__wrapper'>
        <label>
          Name
          <input
            className={`${errors.name?.type === 'required' && 'error'} ${
              !editActive && 'readOnly'
            }`}
            {...register('name', { required: true })}
            readOnly={!editActive}
            defaultValue={name}
          />
        </label>
        <label>
          User name
          <input
            className={`${errors.username?.type === 'required' && 'error'} ${
              !editActive && 'readOnly'
            }`}
            {...register('username', { required: true })}
            readOnly={!editActive}
            defaultValue={username}
          />
        </label>
        <label>
          E-mail
          <input
            className={`${errors.email?.type === 'required' && 'error'} ${
              !editActive && 'readOnly'
            }`}
            {...register('email', { required: true })}
            readOnly={!editActive}
            defaultValue={email}
          />
        </label>
        <label>
          Street
          <input
            className={`${
              errors.address?.street?.type === 'required' && 'error'
            } ${!editActive && 'readOnly'}`}
            {...register('address.street', { required: true })}
            readOnly={!editActive}
            defaultValue={address?.street}
          />
        </label>
        <label>
          City
          <input
            className={`${
              errors.address?.city?.type === 'required' && 'error'
            } ${!editActive && 'readOnly'}`}
            {...register('address.city', { required: true })}
            readOnly={!editActive}
            defaultValue={address?.city}
          />
        </label>
        <label>
          Zip code
          <input
            className={`${
              errors.address?.zipcode?.type === 'required' && 'error'
            } ${!editActive && 'readOnly'}`}
            {...register('address.zipcode', { required: true })}
            readOnly={!editActive}
            defaultValue={address?.zipcode}
          />
        </label>
        <label>
          Phone
          <input
            className={`${errors.phone?.type === 'required' && 'error'} ${
              !editActive && 'readOnly'
            }`}
            {...register('phone', { required: true })}
            readOnly={!editActive}
            defaultValue={phone}
          />
        </label>
        <label>
          Website
          <input
            defaultValue={website}
            className={`${errors.website?.type === 'required' && 'error'} ${
              !editActive && 'readOnly'
            }`}
            {...register('website', { required: true })}
            readOnly={!editActive}
          />
        </label>
        <label>
          Comment
          <textarea
            className={`${errors.comment?.type === 'maxLength' && 'error'} ${
              !editActive && 'readOnly'
            }`}
            {...register('comment', { maxLength: 250 })}
            readOnly={!editActive}
            rows={4}
          ></textarea>
        </label>
      </div>
      <button
        className={`button button__submit ${
          editActive ? 'button__submit__active' : 'button__submit__disabled'
        }`}
        disabled={!editActive}
      >
        Отправить
      </button>
    </form>
  );
};

export default FormProfile;
