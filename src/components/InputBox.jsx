import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencychange,
  currenyoptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const id = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={id} className="text-black mb-2 inline-block font-bold">
          {label}
        </label>
        <input
        className = "text-black font-bold"
          id={id}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(e.target.value)
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full bold font-bold">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-[#FFBEFB] cursor-pointer outline-none text-black"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) =>
            onCurrencychange && onCurrencychange(e.target.value)
          }
        >
          {currenyoptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
