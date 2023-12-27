'use client';

import { trpc } from '@/src/trpc/client';
import {
  InviteMemberFormSchema,
  InviteMemberFormSchemaType,
} from '@/src/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import BasicBtn from '../Form/BasicBtn';
import BasicInput from '../Form/BasicInput';

type InviteMemberFormProps = object;

const InviteMemberForm: React.FC<InviteMemberFormProps> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InviteMemberFormSchemaType>({
    resolver: zodResolver(InviteMemberFormSchema),
  });

  const { mutate, isLoading } = trpc.inviteMember.useMutation({
    onError: async (error) => {
      toast.error(error.message);
    },
    onSuccess: async () => {
      toast.success('Invitation sent!');
      reset();
    },
  });

  const processForm = (data: InviteMemberFormSchemaType) => {
    mutate(data.email);
  };

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className="w-full flex flex-col flex-shrink-0 gap-7 items-center"
    >
      <BasicInput
        label="MEMBER'S EMAIL"
        name="email"
        register={register}
        placeholder="john_doe@gmail.com"
        error={errors?.email?.message as string}
      />
      <BasicBtn
        type="submit"
        bgColor="var(--primary-color)"
        fontColor="var(--secondary-font-color)"
        disabled={isLoading}
      >
        {isLoading ? <BeatLoader speedMultiplier={0.7} /> : 'SEND INVITATION'}
      </BasicBtn>
      <Link className="shrink-0 w-full" href="/admin">
        <BasicBtn
          type="button"
          bgColor="var(--secondary-color)"
          fontColor="var(--primary-font-color)"
        >
          BACK TO ADMIN
        </BasicBtn>
      </Link>
    </form>
  );
};

export default InviteMemberForm;
