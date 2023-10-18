"use client"

const ErrorPage = () => {
  return (
    <div className='flex flex-col w-full h-full items-center bg-bbq-pattern'>
      <div className='absolute inset-0 bg-white container h-auto max-w-lg'>
        <span>Houve um problema na conexão. </span>
      </div>
    </div>
  );
};

export default ErrorPage;
