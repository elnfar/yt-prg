import React,{useState} from 'react'
import { Line } from 'rc-progress'
import ProgressInput from './ProgressInput'
import Button from './Button'

const ProgressCard = () => {

    const [increase,setIncrese] = useState(0)
    const [amount,setAmount] = useState(0)

    const addProgressBar = e => {
        e.preventDefault()
        const numAd = parseInt(amount) + parseInt(increase);
        setAmount(numAd);
        setIncrese('');
    }
    const addAmount = e => {
        setIncrese(e.target.value)
    }

    const clearBar = () => {
        setAmount(0)
    }

  return (
    <div className={`w-full h-screen p-8 ${amount >= 75 ? `bg-red-900` : amount >= 50 ? `bg-yellow-600` : `bg-green-900`}`}>

            <div className='w-2/4 flex flex-col mx-auto border-2 p-8 text-white items-center gap-8'>


                    <h1 className='uppercase text-2xl underline py-2'>Progress Bar</h1>
                    <p className='border-2 px-8'>{amount} %</p>
                    <p className='uppercase'>{amount >= 100 ? 'You Spent Enough!' : 'You still got some money'}</p>

                    <Line percent={amount} strokeWidth="4" strokeColor={amount < 50 ? 'green' : amount < 75 ? 'yellow' : 'red'}/>

                    <form onSubmit={addProgressBar} className='my-4 flex gap-8 justify-between items-center flex-col w-full'>
                        <ProgressInput
                        type='text'
                        increase={increase}
                        placeholder='Add Amount'
                        addAmount={addAmount}
                        />

                        <div className='flex gap-6'>
                        <Button type='submit' click='Click'/>
                        <Button type='button' onClick={clearBar} click='Clear'/>
                        </div>
                    </form>

            </div>


    </div>
  )
}

export default ProgressCard