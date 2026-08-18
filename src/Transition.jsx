import { useTransition } from "react"

function Transition(){
    
    const[pending,startTransition] = useTransition();

    const handleButton=()=>{
        
        startTransition(async ()=>{
            await new Promise(res=>setTimeout(res,5000));
        })

    }

    return(
        <>
          <h1>useTransition Hook in js</h1>
          {
            pending?
            <img style={{width:"200px"}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhernan4444.github.io%2Fcupos-banner%2Fstatics%2Fimg%2Floading.gif&f=1&nofb=1&ipt=c0e07c02c64dd9ce7e0d2de81ee60eb604bf5172488081181bcd8fac8b15a5c9" alt="" />
            :null
        }
          <button disabled={pending} onClick={handleButton} >Click</button>
        </>
    )

}

export default Transition;