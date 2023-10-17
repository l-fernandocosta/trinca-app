import { Spinner } from "@/components/shared/spinner";

const Loading = () => {
  return (
    <div role='spinner' className="h-full items-center flex justify-center">
      <Spinner />
    </div>
  );
};

export default Loading;
