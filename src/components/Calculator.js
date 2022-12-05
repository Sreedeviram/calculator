import { useState } from "react";
import { Container } from "reactstrap";

const Calculator = () => {

   const[num, setNum] = useState(0);
   const[operator, setOperator] = useState();
   const[oldNum, setOldNum] = useState(0);

   function inputNum (e){
      let input = e.target.value
      if(num === 0) {
         setNum(input);
      }else {
         setNum(num + input);
      }

   }

   function clear () {
      setNum(0);
   }

   function percentage () {
      setNum(num/100);
   }

   function decimalPoint (e) {
      let input = e.target.value
         if(num >=0) {
      setNum(num +input);
         }else {
            setNum(input + num);
         }
   }

   function signChange() {
      if(num > 0) {
          setNum(-num);
      } else {
          setNum(Math.abs(num));
      }
  }

  function operatorHandler(e) {
   let operatorInput = e.target.value;
   setOperator(operatorInput);
   setOldNum(num);
   setNum(0);
}

function calculate() {
   if (operator === "/") {
       setNum(parseFloat(oldNum) / parseFloat(num));
   } else if (operator === "*") {
       setNum(parseFloat(oldNum) * parseFloat(num));
   } else if (operator === "-") {
       setNum(parseFloat(oldNum) - parseFloat(num));
   }else if (operator === "+") {
       setNum(parseFloat(oldNum) + parseFloat(num));
   }
}

   return (
      <Container className='keypad'>
         <div>
            <h1 className='display'>{num}</h1>
               <button className='special' value='AC' onClick={clear}>AC</button>
               <button className='special' value='+/-' onClick={signChange}>+/-</button>
               <button className='special' value='%' onClick={percentage}>%</button>
               <button className='operator' value='/' onClick={operatorHandler}>/</button><br/>

               <button value='7' onClick={inputNum}>7</button>
               <button value='8' onClick={inputNum}>8</button>
               <button value='9' onClick={inputNum}>9</button>
               <button className='operator' value='*' onClick={operatorHandler}>x</button><br/>

               <button value='4' onClick={inputNum}>4</button>
               <button value='5' onClick={inputNum}>5</button>
               <button value='6' onClick={inputNum}>6</button>
               <button className='operator' value='-' onClick={operatorHandler}>-</button><br/>

               <button value='1' onClick={inputNum}>1</button>
               <button value='2' onClick={inputNum}>2</button>
               <button value='3' onClick={inputNum}>3</button>
               <button className='operator' value='+' onClick={operatorHandler}>+</button><br/>

               <button className='key-0'value='0' onClick={inputNum}>0</button>
               <button value='.' onClick={decimalPoint}>.</button>
               <button className='operator' value='=' onClick={calculate}>=</button>
              </div>
            
        </Container>
      
    );
};

export default Calculator;