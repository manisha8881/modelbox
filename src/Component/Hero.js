import React,{useState} from 'react'
import './Hero.css'


function Hero(props) {
     //text in upper case 
     const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("text in upper case ","success");
    }
    // text in lower case
    const handleLwClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("text in lower case ","success");

    }
    //sentence extra space remove
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("sentence extra space removed!","success");

    };
    //All extra space remove
    const handleAllExtraSpace = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(' '));
        props.showAlert("All extra space removed!","success");

    };         
    // text in capitalize
    const handleCpClick = ()=>{  
        let newText = text.replace( /\b\w/g,(char) => char.toUpperCase());
        setText(newText);
        props.showAlert("text in capitalize ","success");

    }
    // text in sentence case
    const handleScClick = ()=>{
        let newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (match) => match.toUpperCase());
        setText(newText);
        props.showAlert("text in sentence case ","success");

    }
    // because of this we can write in textarea
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    // clear text
    const handleClearTextClick = ()=>{
        let newText= "";
        setText(newText);
        props.showAlert("clear the text ","success");

    }
    // extract email from text
    const handleExtractEmailClick = () => {
        const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
        const extractedEmails = text.match(emailRegex);
            if (extractedEmails) {
            setText(extractedEmails.join(",\n"));
            props.showAlert("Email is found! ","success");
            } else {
            setText("No email found");
            props.showAlert("Email is not found! ","danger");
            }
    }
    // download the text
    const handleDownloadClick = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "text.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        props.showAlert("Downloaded Successfully!","success");

    }
    // copy the text
    const handleCopyClick = async () => {
        if (text){
            try{
                await navigator.clipboard.writeText(text);
                props.showAlert("copied to clipboard! ","success");

            }
            catch (err){
                console.error('Failed to copy text: ', err); }
        }
    }
    
    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState('');
  return (
         <div className="container">
        <div className="main">
            <div className="p-2 box1 main-box">
               <div className='sub1'>
                    
                        <label htmlFor="exampleFormControlTextarea1" className="form-label text-danger"><h4>{props.heading}</h4></label>
                        <textarea className="form-control border-dark border-1" id="exampleFormControlTextarea1" rows="10" style={{
                            backgroundColor: props.mode === 'dark' ? '#010728' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}  value={text} onChange={handleOnChange}></textarea>
               </div>
                <div className="sub3 py-3">
                    <button type="button" class="btn btn-primary Cbtn rounded" onClick={handleCopyClick}>Clip to copy</button>
                </div>
                <div className="sub4">
                    <button type="button" class="btn btn-primary Rbtn rounded"  onClick={handleExtraSpace}>Remove Sentence ExtraSpace</button>
                    <button type="button" class="btn btn-primary Rbtn rounded" onClick={handleAllExtraSpace}>All Remove ExtraSpace</button>
                </div>
               <div className='sub2'>
                    <div class="btn-group" role="group" aria-label="Basic outlined rounded">
                        <button type="button" class="btn btn-outline-primary " onClick={handleUpClick}>Convert to UpperCase</button>
                        <button type="button" class="btn btn-outline-primary"  onClick={handleLwClick}>Convert to LowerCase</button>
                        <button type="button" class="btn btn-outline-primary"  onClick={handleCpClick}>Convert to Capatalize</button>
                        <button type="button" class="btn btn-outline-primary"  onClick={handleScClick}>Convert to SentenceCase</button>
                    </div>
               </div>
                <div className="sub5">
                            <button type="button" class="btn btn-primary Ebtn rounded" onClick={handleExtractEmailClick}>Extract email</button>
                            <button type="button" class="btn btn-primary Ebtn rounded" onClick={handleDownloadClick}>Download</button>
                            <button type="button" class="btn btn-primary Ebtn rounded" onClick={handleClearTextClick}>Clear Text</button>
                </div>
                <div className="sub6">
                        <div className="container mb-1 ">
                            <h5 className='text-danger'>Text summary</h5>
                            <hr />
                            <p style={{color:props.mode === 'dark'?'white':'black'}}>{text.split(" ").filter(Boolean).length} words and {text.replace(/\s/g, "").length} characters (excluding spaces) //
                            {0.008 * text.replace(/\s/g, "").length} Minutes to read</p>
                        </div>
                </div>
             
            </div>
            {/* box 2 */}
            <div className="box2">
            <h3 className="text-danger ms-3 mt-3">Preview</h3>
            <div className="Preview-box bg-success mx-3 my-3 rounded text-white p-2">
                 <p className='text-white'>{text.length>0?text:"Enter something in the textbox beside to preview at here: "}</p>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Hero
