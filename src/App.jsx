import React, { useState } from 'react'
import Button from './components/Button'

function App() {
  const [screenColor,setScreenColor] = useState("black");
  return (

    <>
      <div className='w-full h-screen  text-white flex items-end justify-center px-10 py-8 flex-wrap' style={{backgroundColor:screenColor}}>
        <footer className='bg-zinc-700 max-fit w-full rounded-xl shadow-inner shadow-white flex flex-wrap items-center px-10 py-5  justify-evenly gap-2'>
          <Button btext="Red" bg="red" tc="white" changeColor={setScreenColor} />
          <Button btext="Cyan" bg="cyan" tc="black" changeColor={setScreenColor} />
          <Button btext="Green"bg="green" changeColor={setScreenColor} />
          <Button btext="Blue"bg="Blue" changeColor={setScreenColor} />
          <Button btext="White"bg="white" tc='black' changeColor={setScreenColor} />
          <Button btext="Orange" bg="orange" tc='black' changeColor={setScreenColor} />
          <Button btext="Grey" bg="grey" tc='black' changeColor={setScreenColor} />
          <Button btext="Black" bg="black" changeColor={setScreenColor} />
          <Button btext="HotPink" bg="hotpink" tc='black' changeColor={setScreenColor} />
          <Button btext="Silver" bg="silver" tc='black' changeColor={setScreenColor} />
          <Button btext="Burlywood" bg="burlywood" tc='black' changeColor={setScreenColor} />
          <Button btext="Purple" bg="purple" changeColor={setScreenColor} />
          
        </footer>
      </div>
      
    </>
  )
}

export default App