import { CustomAvatar } from "@/components/shared/custom-avatar";
import { User } from "@/packages/http/entities/user";

export const UserInformation = ({ user }: { user?: User }) => {
  return (
    <div className='flex flex-col border p-4 rounded-sm items-center justify-center gap-3'>
      <h2 className='font-semibold'>Responsável pelo churrasco</h2>
      <CustomAvatar
        alt={user?.email}
        fallback={user?.firstName.split("")[0]}
        src={user?.avatar}
      />
      <span className='text-sm font-semibold'>
        {user?.firstName} {user?.lastName}
      </span>
      <span className='text-muted-foreground text-xs'>{user?.email}</span>

    </div>
  );
};
