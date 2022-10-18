import { useState } from 'react'
import duiValidator from './duiValidator'


function App() {
  const [value, setValue]=useState("")
  const onSubmit = ()=>{
    if(duiValidator(value)){
      console.log('is true');
    }else{
      console.log('is not true');
    }
  }

  return (
    <div className='relative bg-slate-300 w-full min-h-screen flex items-center justify-center flex-col'>
      <div className='w-full max-w-lg text-center flex flex-col gap-16'>
        <div>
          
        </div>
      <h1 data-testid='title-test' className='text-5xl font-bold'>Mi DUI es valido?</h1>
      <form className='flex flex-col gap-5 items-center' onSubmit={(e)=>{e.preventDefault(); onSubmit()}}>
        <input data-testid="input-dui"
        type="text"
        placeholder='000000000' 
        className='rounded p-2 w-full'
        value= {value}
        onChange={(e)=>{
          setValue(e.target.value)
        }}/>
        <button data-testid="button-form" className='bg-blue-700 text-white w-auto py-2 px-3 rounded'>Validar</button>
      </form>
      {value && !duiValidator(value) && <span className='text-red-600' data-testid="error-msg">DUI Invalido!.</span>}
      {value && duiValidator(value) && <span className='text-green-600' data-testid="success-msg">DUI Valido!.</span>}
      </div>
    </div>

  )
}

export default App
