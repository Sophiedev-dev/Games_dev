
import './App.css'
function App(){
    return(
        <div class="global" className='container' style={{backgroundColor:'aliceBlue'  , border: '1px'}}>
            <div className='container-fluid' style={{marginTop:'40px'}}>
                <div className='container' style={{float:'left',width:'35%' ,backgroundColor:'red'}}>komol danie</div>
                <div className='container' style={{float:'right',width:'30%' ,backgroundColor:'red' }}>score : 5 pts</div>
                <div className='container' style={{float:'right',width:'35%' ,backgroundColor:'red' }}>level : easy</div>
            </div>

            <br></br>

            <div className='container-fluid' style={{marginTop:'25px'}} >
                <center><h1>Guess My NUmber Game</h1></center>
            </div>
            
            <center>
                <div style={{backgroundColor:'red' , width:'15%', borderRadius:'6%'}}><h1>?</h1></div>
                <h5>start guessing ....</h5>
            </center>


            <div className='container' >
                <input type='dropDownList' style={{float:'left'}}></input>
                <p style={{float:'right'}}>Hight score : 100</p>

            </div>

            <center><button className='btn btn-success' type='button' style={{backgroundColor:'red' , border: '1px' , marginBottom:'15px'}}>Check now</button></center>
        </div>
    
    
    );
}





export default App;