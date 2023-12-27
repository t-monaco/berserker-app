import InviteMemberForm from '@/src/components/InviteMemberForm';

type InviteMemberProps = object;

const InviteMember: React.FC<InviteMemberProps> = () => {
  return (
    <main className="flex flex-col gap-10 flex-1 justify-center items-center overflow-scroll w-full">
      <h1 className="text-center text-[20px] flex-shrink-0">INVITE MEMBER</h1>
      <InviteMemberForm />
    </main>
  );
};

export default InviteMember;
