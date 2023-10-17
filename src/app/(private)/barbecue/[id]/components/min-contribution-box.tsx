import { currencyFormat } from "@/packages/helpers/currency-formatter.helper";

export const MinContributionBox = ({ val }: { val?: number }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 border rounded-sm p-4'>
      <h2 className="text-sm font-semibold">Valor mínimo de contribuição</h2>
      <p className="text-5xl font-semibold text-custom-yellow-500">{currencyFormat(val || 0)}</p>
    </div>
  );
};
