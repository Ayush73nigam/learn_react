import React, {useState} from 'react'

export default function Textform(props) {
  const uppercase= ()=> {
    updatetext(text.toUpperCase());
  }
  const handleOnchange= (e)=>{
    updatetext(e.target.value);
  }
  const lowercase= ()=> {
    updatetext(text.toLowerCase());
  }
  const Reset =()=> {
    updatetext("");
  }
  const [text,updatetext]= useState("");
  return (
    <>
    <div>
<div className="mb-3">
  <h1 className='mt-3'>{props.heading}</h1>
<label htmlfor="mybox" className="form-label"></label>
<textarea className="form-control" id="mybox" rows="7" value={text} onChange={handleOnchange}></textarea>
   </div>
   <button type="button" className="btn btn-primary"  onClick={uppercase}>Convert To Uppercase</button>
   <button type="button" className="btn btn-primary mx-1" onClick={lowercase}>Convert To Lowercase</button>
   {/* <button type="button" class="btn btn-primary">Remove Spaces</button>
   <button type="button" class="btn btn-primary mx-1">Copy Text</button> */}
  <button type="button" className="btn btn-primary" onClick={Reset}>Reset</button>
   <div className="container">
    <h2 className='my-4'>Your Text Summary</h2>
    <p><b>{text.length}</b> characters ,<b>{text.split(" ").filter((ele)=>{return (ele.length!=0)}).length}</b> words</p>
    <p><b>{text.split(" ").filter((ele)=>{return (ele.length!=0)}).length*0.008}</b>   Minutes To Read</p>
   </div>
   <div className="container">
    <h2 className='my-4'>Text Preview</h2>
    <p>{text}</p>
   </div>
    </div>
    </>
  )
}
