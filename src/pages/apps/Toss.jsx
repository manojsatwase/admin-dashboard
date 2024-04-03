import { useState } from "react"
import AdminSidebar from "../../components/admin/AdminSidebar";
import { useCoinToss } from "../../hooks/useCoinToss";

const Toss = () => {
  const { angle, flipCoin } = useCoinToss();

  return (
    <div className="admin-container">
       <AdminSidebar />
       <main className="dashboard-app-container">
           <h1>Toss</h1>
           <section>
              <article className="tosscoin" onClick={flipCoin} style={{
                transform:`rotateY(${angle}deg)`
              }}>
                 <div></div>
                 <div></div>
              </article>
           </section>
       </main>
    </div>
  )
}

export default Toss;