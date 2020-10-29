import React, {useState} from 'react'
import './App.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [input, setInput] = useState({
      currentInput: null,
      prevInput: null,
      operator: null
    })

    const handleInputChange = (number) => {
      console.log(number)
      if(!input.currentInput){
        setInput({
          ...input,
          currentInput: number
        })
      } else {
        console.log("else ran")
        if(number == '.' && input.currentInput.includes(".")) return;
        if(input.currentInput == '0' && number == '0') return;
        
          setInput({
            ...input,
            currentInput: input.currentInput + number
          })
       
      }
      console.log(input.currentInput)
      
    }
    const handleOperator = (op) => {
      const currentInput = input.currentInput || 0;
      if(!input.prevInput && input.prevInput != '0'){
        setInput({
          ...input,
          currentInput: null,
          prevInput: currentInput,
          operator: op
        })
      } else {
        const prevInput = input.prevInput
        let ans;
        switch(input.operator){
          case '+': {
            console.log("add")
            ans = +prevInput + +currentInput;
            break;
          }
          case '-': {
            console.log("sub")
            ans = +prevInput - +currentInput;
            break;
          }
          case '/': {
            console.log("divide")
            ans = +prevInput / +currentInput;
            break;
          }
          case '*': {
            console.log("multiply")
            ans = +prevInput * +currentInput;
            break;
          }
        }
        console.log(ans)
        setInput({
          ...input,
          currentInput: null,
          prevInput: ans,
          operator: op
        })
      }

    }

    const handleEquals = () => {
        const {currentInput, prevInput, operator} = input;
        let ans;
        switch(operator){
          case '+': {
            console.log("add")
            ans = +prevInput + +currentInput;
            break;
          }
          case '-': {
            console.log("sub")
            ans = +prevInput - +currentInput;
            break;
          }
          case '/': {
            console.log("divide")
            ans = +prevInput / +currentInput;
            break;
          }
          case '*': {
            console.log("multiply")
            ans = +prevInput * +currentInput;
            break;
          }
        }

        setInput({
          ...input,
          currentInput: ans,
          prevInput: null,
          operator: null
        })
    }
  

  return (
    <div className="App">
        <h1 className='text-center'>Calculator</h1>
        <div className='row'>
            <div className='col-12'>
              <div className='calculator'> 
  <div id='display' className='display'>{input.currentInput !== null ? input.currentInput : '0'} <p style={{color: "grey", paddingLeft: "10px"}}>{input.prevInput}</p>  </div>
                  <div className='btns'>
                   
                    
                    <button id='seven' onClick={(e) => handleInputChange(e.target.lastChild.textContent) } className='btn btn-primary'><span>7</span></button>
                    <button id='eight' onClick={(e) => handleInputChange(e.target.lastChild.textContent) }  className='btn btn-primary'><span>8</span></button>
                    <button id='nine' onClick={(e) => handleInputChange(e.target.lastChild.textContent) }  className='btn btn-primary'><span>9</span></button>
                    <button id='divide' onClick={(e) => handleOperator(e.target.lastChild.textContent)} className='btn btn-warning'><span>/</span></button>
                    
                    <button id='four' onClick={(e) => handleInputChange(e.target.lastChild.textContent) }  className='btn btn-primary'><span>4</span></button>
                    <button id='five' onClick={(e) => handleInputChange(e.target.lastChild.textContent) }  className='btn btn-primary'><span>5</span></button>
                    <button id='six' onClick={(e) => handleInputChange(e.target.lastChild.textContent) }  className='btn btn-primary'><span>6</span></button>
                    <button id='multiply' onClick={(e) => handleOperator(e.target.lastChild.textContent)} className='btn btn-warning'><span>*</span></button>
                    
                    <button id='one' onClick={(e) => handleInputChange(e.target.lastChild.textContent) }  className='btn btn-primary'><span>1</span></button>
                    <button id='two' onClick={(e) => handleInputChange(e.target.lastChild.textContent) }  className='btn btn-primary'><span>2</span></button>
                    <button id='three' onClick={(e) => handleInputChange(e.target.lastChild.textContent) }  className='btn btn-primary'><span>3</span></button>
                    <button id='subtract' onClick={(e) => handleOperator(e.target.lastChild.textContent)}  className='btn btn-warning'><span>-</span></button>

                    <button id='zero' onClick={(e) => handleInputChange(e.target.lastChild.textContent) }  className='btn btn-primary'><span>0</span></button>
                    <button id="decimal" onClick={(e) => handleInputChange(e.target.lastChild.textContent) }  className='btn btn-primary'><span>.</span></button>
                    <button id='equals' onClick={() => handleEquals()} className='btn btn-info'><span>=</span></button>
                    <button id='add' onClick={(e) => handleOperator(e.target.lastChild.textContent)} className='btn btn-warning'><span>+</span></button>
                 
                  </div>
                  <div className='reset'>
                    <button id='clear' onClick={() => setInput({currentInput: null, prevInput: null})} className='btn btn-danger'>
                        <span>AC</span>
                    </button>
                  </div>
              </div>

            </div>
        </div>

    </div>
  );
}

export default App;
