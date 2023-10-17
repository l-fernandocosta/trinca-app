"use client";

import { Spinner } from "@/components/shared/spinner";
import { Button } from "@/components/ui/button";
import { useBarbecueById } from "@/lib/queries/bbqs/find/find-query";
import { useParams, useRouter } from "next/navigation";
import { BarbecueGuestGrid } from "./barbecue-guest-grid";
import { MinContributionBox } from "./min-contribution-box";
import { UserInformation } from "./user-information";


export const BarbecueProperties = () => {
  const params = useParams();
  const { refresh } =useRouter();
  const { id } = params as { id: string };
  const { data: bbq, isLoading, isError } = useBarbecueById(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className='flex flex-col items-center max-h-screen h-full w-full'>
        <span>Houve um problema de conexão. </span>
        <Button onClick={refresh}>Tentar novamente</Button>
      </div>
    );
  }

  return (
    <>
      <UserInformation user={bbq?.createdBy} />
      <MinContributionBox val={bbq?.minContribution} />
      <BarbecueGuestGrid guests={bbq?.guests} />
    </>
  );
};
