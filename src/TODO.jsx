function Todo() {

    function callFun() {
        alert("Button Clicked")
    }

    return (
        <div>
            <h1>Vansh Kumar Todo</h1>
            <img src="todo-image.jpg" alt="Todo Image" />

            <ul>
                <li>Invent new traffic lights</li>  
                <li>Improve the spectrum technology</li>
                <li>Rehearse a movie scene</li>
            </ul>
             <button onClick={callFun} > Click me </button> 

        </div>
    )
}

export default Todo;