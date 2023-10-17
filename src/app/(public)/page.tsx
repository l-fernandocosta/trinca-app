import { Button } from "@/components/ui/button";
import { Beef } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex w-full h-screen flex-row'>
      <div className='flex-1 relative hidden h-full flex-col bg-custom-yellow-500 text-white dark:border-r lg:flex'>
        <div className='w-full max-h-[746px] relative'>
          <Image
            width={636}
            height={746}
            src={"/shared/bbq-pattern.svg"}
            className='inset-x-0 w-full opacity-50'
            alt='A imagem contém diversos ícones de comidas que pertencem a um churrasco'
          />
          <div className='absolute h-20  w-full bottom-0 bg-gradient-to-t from-custom-yellow-500' />
          <div className='absolute inset-0 flex   gap-2 justify-center text-black flex-col items-center'>
            <div className='flex flex-row gap-3'>
              <h1 className='font-bold text-2xl'>AGENDA DE CHURRAS.</h1>
              <Beef />
            </div>
            <i>trin.ca</i>
          </div>
        </div>
      </div>

      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] flex-1 lg:p-8 items-center container'>
        <div className='max-w-[500px] items-center gap-20 flex flex-col'>
          <div className='flex flex-col space-y-2 text-center items-center gap-6'>
            <Image
              src={"/shared/trinca.svg"}
              alt='Trinca Logo'
              width={48}
              height={48}
              className='w-16 h-16'
            />
            <div>
              <h1 className='text-2xl font-semibold'>
                Bem-vindo à Trinca Churras!
              </h1>
              <span className='text-sm text-muted-foreground'>
                Acompanhe todos os churrascos realizados pelas equipes da{" "}
                <strong>Trinca. </strong>
              </span>
            </div>
            <Button asChild className='w-full h-16'>
              <Link href={"/sign-in"}>Entrar</Link>
            </Button>
            <Button asChild className='w-full h-16' variant={"link"}>
              <Link href={"/sign-up"}>Criar conta</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
