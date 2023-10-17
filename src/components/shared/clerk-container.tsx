import { PropsWithChildren } from "react";

export const ClerkContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-custom-yellow-500 bg-bbq-pattern'>
      {children}
    </div>
  );
};
