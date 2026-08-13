import { useState } from 'react'
import InputBox from './components/InputBox';
import './App.css'
import useCurrencyinfo from './hooks/Currencyinfo';

function App() {
  const [from , setFrom ] = useState("usd");
  const [to , setTo ] = useState("inr");
  const [convertedAmount , setconvertedAmount] = useState(0)
  const [amount , setAmount] = useState(0)
  
  const currenyInfo = useCurrencyinfo(from)
  const options = Object.keys(currenyInfo)

  const swap = () => {
    setFrom(to);
    setTo(from);
  }

  const convert = () => {
    setconvertedAmount(amount*currenyInfo[to])
    console.log(options)
  }

  return (
    <>
   <div
            className="h-screen flex flex-wrap justify-center items-center bg-[#FFF4BF]"
        >
          <h1 className='text-[#333D6D] text-2xl'>Currency Convertor</h1>
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-[#DC95FF]">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div id = "bg" className="w-full mb-1 bg-[#FFBEFB]">
                            <InputBox
                            className='bg-[#FFBEFB]'
                                label="From"
                                amount = {amount}
                                currenyoptions={options}
                                onCurrencychange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5 bg-[#FF7873]">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4 bg-[#FFBEFB]">
                            <InputBox className='bg-[#FFBEFB]'
                                label="To"
                                amount = {convertedAmount}
                                currenyoptions={options}
                                onCurrencychange={(currency) => {
                                  setTo(currency)
                                }}
                                amountDisable
                                selectCurrency={to}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
