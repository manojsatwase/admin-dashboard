import { useEffect, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar"
import { formatTime } from "../../utils/helper";

const Stopwatch = () => {
    const [time,setTime] = useState(0);
    const [isRuning,setIsRunning] = useState(false);
    
 
    useEffect(()=> {
      let intervalID;
       if(isRuning){
        intervalID = setInterval(()=>{
            setTime((prev) => prev +1);
          },1000);
       }
      return () => clearInterval(intervalID)
    },[isRuning])

    const resetHandler = ()=>{
        setTime(0);
        setIsRunning(false);
    }
  return (
    <div className="admin-container">
    <AdminSidebar/>
    <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
            <div className="stopwatch">
                <h2>{formatTime(time)}</h2>
                <button onClick={()=>setIsRunning(prev=>!prev)}>{isRuning ? 'Start' : 'Stop'}</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Stopwatch