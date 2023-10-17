import { Header } from "@/components/shared/header";
import { PropsWithChildren } from "react";
import { Footer } from "./footer";

const PrivateLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full h-screen flex bg-bbq-pattern bg-fixed bg-center bg-cover bg-no-repeat bg-custom-yellow-500'>
      <div className='flex flex-col container w-full h-screen max-h-screen overflow-y-auto bg-white'>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default PrivateLayout;
