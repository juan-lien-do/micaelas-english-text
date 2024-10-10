import { NavLink, useNavigate } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

function goToQuestions(){
    useNavigate("/test")
}

function Home(){
    const [typeEffect] = useTypewriter({
        words: ["Let's begin", "You can do it!", "Good luck!", "Have fun"],
        loop:{},
        typeSpeed:120,
        deleteSpeed: 40,

    })

    return (
        <>
        <div className="my-auto">
            <h1 className="fs-1">Micaela's English Test</h1>
            <h3 className="fst-italic my-5 ">Don't wait. <span className="text-primary">{typeEffect}</span> </h3>

            <NavLink className="btn btn-lg btn-primary" to="/test">Let's go</NavLink>
        </div>
        </>
    )
}

export default Home;