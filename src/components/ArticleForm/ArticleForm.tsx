/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import clsx from 'clsx';
import get from 'lodash.get';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import { ArticleProps } from '../Article';

import styles from './ArticleForm.module.css';

export type ArticleFormProps = Omit<ArticleProps, 'id' | 'slug'>;

interface TextInputProps {
  name: 'title' | 'date' | 'imageUrl' | 'content' | 'location.city' | 'location.latitude' | 'location.longitude';
  label: string;
  validation?: object;
  type?: 'text' | 'password' | 'file' | 'textarea';
  register: UseFormRegister<ArticleFormProps>;
  errors: FieldErrors<ArticleFormProps>;
}

const ErrorBox: FC<{ children: string }> = ({ children }) => (
  <p className={clsx({ [styles.error]: true })}>{children}</p>
);

const GenericInput: FC<TextInputProps> = ({ name, label, validation = {}, type = 'text', register, errors }) => {
  const errorMessage = get(errors, `${name}.message`) as string | null;
  const Component = 'textarea' !== type ? 'input' : 'textarea';

  return (
    <>
      <label htmlFor={name} className={clsx({ [styles['input-label']]: true })}>
        {label}
      </label>
      <Component
        type={type}
        className={clsx({ [styles.input]: true, [styles['input-area']]: 'textarea' === type })}
        {...register(name, validation)}
      />
      {null !== errorMessage && <ErrorBox>{errorMessage}</ErrorBox>}
    </>
  );
};

const ArticleForm: FC<{ onSubmit: (data: ArticleFormProps) => void }> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormProps>();

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <GenericInput
        name='title'
        label='Tytuł'
        validation={{ required: 'Tytuł jest wymagany' }}
        register={register}
        errors={errors}
      />
      <GenericInput
        name='date'
        label='Data (rok-miesiąc-dzień)'
        validation={{
          required: 'Data jest wymagana',
          pattern: { value: /20\d{2}-[01]\d-[0-3]\d/, message: 'Niepoprawny format daty' },
        }}
        register={register}
        errors={errors}
      />
      <GenericInput
        name='imageUrl'
        label='Fotka'
        type='file'
        validation={{ required: 'Fotka jest wymagana' }}
        register={register}
        errors={errors}
      />
      <GenericInput
        name='location.city'
        label='Miasto'
        validation={{ required: 'Miasto jest wymagane' }}
        register={register}
        errors={errors}
      />
      <GenericInput
        name='location.latitude'
        label='Latitude'
        validation={{ required: 'Pole wymagane', pattern: { value: /\d{1,2}\.\d+/, message: 'Zły format danych' } }}
        register={register}
        errors={errors}
      />
      <GenericInput
        name='location.longitude'
        label='Longitude'
        validation={{ required: 'Pole wymagane', pattern: { value: /\d{1,2}\.\d+/, message: 'Zły format danych' } }}
        register={register}
        errors={errors}
      />
      <GenericInput
        name='content'
        label='Treść postu'
        type='textarea'
        validation={{ required: 'Opisz swoją podróż' }}
        register={register}
        errors={errors}
      />
      <button type='submit' className={clsx({ [styles.button]: true })}>
        Dodaj
      </button>
    </form>
  );
};

export default ArticleForm;
