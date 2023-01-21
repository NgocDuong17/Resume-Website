import fb from './images/feedback.png';
  
const CuaFeedBack=()=>{
return (
    
    <div align = 'middle'>
        <img src = {fb} alt ='' width = '300'/>
        <form >
             <label><p>May I know your name ? </p></label>
             <input type = 'name' />
        </form>

        <form>
             <label><p>Tell me if you really reallyy LOVE it!!!</p></label>
             <textarea rows = '10' cols = '47'/>
        </form>
   
        <button input type = 'submit' className = 'button'>ENTER</button>
       
    </div>
  )
}
export default CuaFeedBack