import { Link } from "react-router-dom";
function Login (){
  return (
    <div className="mt-4 grow flex items-center justify-around" >
      <div className="mb-16">
      <h1 className="text-4xl text-center mb-4">Login</h1>
      <form className="max-w-md mx-auto " >
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button className="primary">Login</button>
        <div className="text-center py-2 text-gray-500">
          Don't have an  accout yet? <Link className="underline text-black" to={"/register"}>Register now</Link>
        </div>
      </form>

      </div>
      
    </div>
  )
}
export default Login;