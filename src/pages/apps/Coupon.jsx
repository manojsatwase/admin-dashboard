import { useEffect, useState } from "react"
import AdminSidebar from "../../components/admin/AdminSidebar";
import { generateCoupon } from "../../utils/helper";

const Coupen = () => {
  const [size,setSize] = useState(7);
  const [prefix,setPrefix] = useState("");
  const [includeNumbers,setIncludeNumbers] = useState(false);
  const [includeCharacters,setIncludeCharacters] = useState(false);
  const [includeSymbols,setIncludeSymbols] = useState(false);
  const [isCopied,setIsCopied] = useState(false);
  const [coupon,setCoupon] = useState("");

  const copyText = async (coupon) => {
     await window.navigator.clipboard.writeText(coupon); // return a promise function use async function
     setIsCopied(true);
  }  

  const submitHandler = (e) => {
    e.preventDefault();
  
    const result = generateCoupon({
      prefix,
      size,
      includeCharacters,
      includeNumbers,
      includeSymbols,
    });
    if (!result) {
      alert("Please select at least one option.");
    } else {
      setCoupon(result);
    }
  }
  // Reset isCopied state when coupon changes
  useEffect(()=> {
   setIsCopied(false);
  },[coupon]);

  return (
    <div className="admin-container">
        <AdminSidebar />
        <main className="dashboard-app-container">
            <h1>Coupen</h1>
            <section> 
                <form className="coupon-form" onSubmit={submitHandler}>
                   <h1 className="prefix">Prefix: {prefix.length}</h1>
                    <input 
                        type="text"
                        value={prefix}
                        onChange={({target:{value}})=>setPrefix(value)}
                        placeholder="Coupon Length"
                        maxLength={size}
                     />
                      <input 
                        type="number"
                        value={size}
                        onChange={({target:{value}})=>setSize(Number(value))}
                        min={7}
                        maxLength={25}
                        placeholder="Text to include"
                     />
                     <fieldset>
                         <legend>Include</legend>
                           <div>
                           <input 
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={()=>setIncludeNumbers(prev=>!prev)}
                            id="numbers"
                           />
                             <label htmlFor="numbers">Numbers</label>
                           </div>
                           <div>
                           <input 
                            type="checkbox"
                            checked={includeCharacters}
                            onChange={()=>setIncludeCharacters(prev=>!prev)}
                            id="characters"
                           />
                             <label htmlFor="characters">Characters</label>
                           </div>
                           <div>
                           <input 
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={()=>setIncludeSymbols(prev=>!prev)}
                            id="symbol"
                           />
                             <label htmlFor="symbol">Symbol</label>
                           </div>
                     </fieldset>
                     <button type="submit">Generate</button>
                </form>

                 {coupon && <code>{coupon} <span onClick={()=>copyText(coupon)}>
                    {isCopied ? 'Copied' :'Copy'}
                  </span></code>}
            </section>
        </main>
    </div>
  )
}

export default Coupen