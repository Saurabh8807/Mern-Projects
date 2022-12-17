import React,{ useState } from "react"

//The below statement means The value of texxt is in the bracket of useState that is Enter text here
// And when we want to update text then we use newText
export default function TextForm(props) {
    const [myStyle,newStyle ]=useState({
        backgroundColor:'white',
        color:'black'
       })
       const [myBtn,newBTN]=useState("Enable dark mode")
   const darkTheme =()=>{
    if(myStyle.backgroundColor==='white'){
      newStyle({
        backgroundColor:'black',
        color:'white'
      })
      newBTN("Enable Light mode")
    }
    else{
      newStyle({
        backgroundColor:'white',
        color:'black'
      })
      newBTN("Enable dark mode")
    }
}

    const handleUpClick =()=>{
        console.log("clicked..."+text ); 
        var new1 = text.toUpperCase()
        newText(new1)
        props.showAlert("Converted to uppercase","success")
    }
    const handlelowClick =()=>{
      console.log("clicked..."+text );
      var new1 = text.toLocaleLowerCase()
      newText(new1)
      props.showAlert("Converted to lowercase",'success')

  }
    const handleOnChange =(event)=>{
        console.log("changed...")
        newText(event.target.value)
    }
    const handleClearClick =(event)=>{
        let new2 =""
        newText(new2)
        props.showAlert("Text has been clear","success")

    }
    const handleCopy =()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard","success")
    }
    const [text , newText] = useState("");
    // text ="New text"
    // setText("New text")
    return (
        <div className="form">
<div className="mb-3">
    <h1>Enter your text here </h1>
  <textarea style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  className="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" placeholder="Enter here" value={text} rows="3"></textarea>
<button disabled={text.length===0} onClick={handleUpClick}>Click here to Uppercase</button>
<button disabled={text.length===0} onClick={handlelowClick}>Click here to Lowercase</button>
<button disabled={text.length===0} onClick={handleClearClick}>Clear all</button>
<button disabled={text.length===0} onClick={handleCopy}>Copied to clipboard</button>
<button disabled={text.length===0} onClick={darkTheme}>{myBtn}</button>
</div>

        <div className="summary" style={{marginLeft:"20vw"}}>
        <h2 style={{color:props.mode==='dark'?'white':'black'}}>Text Summary</h2>
        <p style={{color:props.mode==='dark'?'white':'black'}}>word ={text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} letters = {text.length}</p>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{0.0098*text.split(" ").filter((element)=>{return element.length!==0 }).length} minutes required to read </p>
        <h3 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h3>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text}</p>

        </div>

    </div>
  )
}
