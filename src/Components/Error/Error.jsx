import { NavLink } from "react-router-dom"


const Error = () => {
  return (
    <div className="mx-24 averia-serif">
      <h1 className="text-[380px] text-rose-800 font-bold text-center w-full">404</h1>
   <NavLink to='/'>
   <button className="btn btn-gost text-4xl font-medium text-gray-500 w-full mx-auto">GO BACK HOME</button>
   </NavLink>
    </div>
  )
}

export default Error
