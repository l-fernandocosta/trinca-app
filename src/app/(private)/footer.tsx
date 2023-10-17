import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 container h-20 p-2 items-center justify-center flex">
      <Image src="/shared/trinca.svg" alt='Trinca logo' width={40} height={40} />
    </div>
  )
}
