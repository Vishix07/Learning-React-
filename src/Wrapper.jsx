function Wrapper ({children, color="green"}) {
    return (
        <div style={{ color:color, border:"5px solid green", width:"900px", margin:"20px"}} >
            {children}
        </div>
    )
}

export default Wrapper;