'use client';
import { BasicBtn, BasicInput } from '@/app/components';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { LoginForm } from './page';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';

type LoginWrapperProps = object;

const LoginWrapper: React.FC<LoginWrapperProps> = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm<LoginForm>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const processForm: SubmitHandler<LoginForm> = async (data) => {
    setLoading(true);
    const logged = await signIn('credentials', {
      ...data,
      redirect: false,
    });

    if (!logged?.ok) {
      setLoading(false);
      toast.error('Invalid Credentials.');
      return null;
    }

    // reset()
    router.replace('/');
  };

  return (
    <main className="flex flex-col flex-1 justify-center items-center gap-[5rem]">
      <h1 className="text-center text-[20px]">CREDENTIALS</h1>
      <form
        className="flex flex-col gap-[1.3rem] text-[18px]"
        onSubmit={handleSubmit(processForm)}
      >
        <BasicInput
          autoComplete="off"
          name="username"
          label="USERNAME"
          register={register}
        />
        <BasicInput
          type="password"
          name="password"
          label="PASSWORD"
          register={register}
        />
        <BasicBtn type="submit">
          {loading ? <BeatLoader speedMultiplier={0.7} /> : 'LOGIN'}
        </BasicBtn>
      </form>
    </main>
  );
};

export default LoginWrapper;
