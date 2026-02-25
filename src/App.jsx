import React, { useState } from 'react'

const App = () => {
  const[title,settitle]=useState('')
   const[details,setdetails]=useState('')
   const [task, settask] = useState([])
  const submithandler=(e)=>{
  e.preventDefault()
   const copytask=[...task]
   copytask.push({title,details})
   settask(copytask)
    settitle('')
    setdetails('')
 
  }
     const deletenode=(idx)=>{
      const copyTask=[...task]
      copyTask.splice(idx,1)
     settask(copyTask)


    } 


  
  return (
    <div className='h-screen lg:flex bg-black text-white p-10 '>
     
      <form onSubmit={(e)=>{
        submithandler(e)
      }}className='gap-4 items-start flex lg:w-1/2 flex-col'>
         <h1 className='text-xl font-bold'>Add Notes</h1>
   
         <input
         type="text"
         placeholder='Enter Notes Heading'
        className='w-1/2 px-2 py-2 border-2 rounded outline-none font-medium'
        
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}

        />
         <textarea
         type='text'
         placeholder='write details'
         className='w-1/2 px-5 h-32 py-2 border-2 rounded font-medium'
         value={details}
         onChange={(e)=>{
          setdetails(e.target.value)
         }}
         
         />
        <button className='w-1/2 
       active:bg-black bg-white text-black px-5 py-5 font-medium rounded'>Add anote</button>
       
 
        </form>
        <div className=' lg:w-1/2  p-10 lg:border-l-2'> 
        <h1 className='text-xl font-bold'>Your Notes</h1>
         <div className='flex items-start flex-wrap gap-5 h-full  mt-5 overflow-auto'>
        {task.map(function(elem,idx){
        
          return  <div key={idx} className="h-52 w-40 text-black py-8 px-4 rounded-2xl bg-cover text-black bg-[url('data:image/jpeg;base64,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')]">
           <div>
           <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight font-medium text-gray-800'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deletenode(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-x-3 rounded font-bold text-white'>delete note</button>
            </div>
        })}
      
         </div>
        </div>
       { console.log("hello notes")}
        
         
    </div>
   
   
    
  )
}

export default App