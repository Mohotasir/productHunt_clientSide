
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProdiver';
import logo from '../../assets/lgo.png'
const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => alert(error.message))
    }
    const navList = (
        <>
            <li><NavLink to="/" style={({ isActive }) => {
                return {
                    color: isActive && '#5DADE2',

                }
            }}>Home</NavLink></li>
            <li><NavLink to="/allpost" style={({ isActive }) => {
                return {
                    color: isActive && '#5DADE2',

                }
            }}>Products</NavLink></li>

            {
                user?.email ?
                    <>
                        
                    </>

                    :
                    <></>


            }
        </>
    )
    return (
        <div className=" bgClr mulish shadow-sm  fixed w-full z-10">
            <div className='navbar container mx-auto py-3'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" text-black menu-sm flex flex-col gap-4 dropdown-content z-10 mt-3  p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <Link to="/" className='flex items-center justify-center '>
                        <img className='h-12' src={logo} alt="" />
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex lg:mr-12">
                        <ul className="flex text-sm poppin gap-8 menu-horizontal px-1">
                            {navList}
                        </ul>
                    </div>
                    {user ? (
                        <>
                            {/* <button onClick={handleSignOut} className="btn  btn-sm py-2 bg border-none mr-2" to="/login">Sign Out</button> */}
                            <img className="w-[45px]  border-2 p-0.5 h-[45px] rounded-full mr-2 hover:cursor-pointer" src={user.photoURL} alt=""  />
                           
                        </>
                    ) : (
                        <>
                            <Link className=" px-3 py-2  text-sm bg rounded-md mr-2 border text-blue-500 border-blue-300 " to="/signup">Sign Up</Link>
                            <Link to="/login" className="px-3 py-2 clr border text-sm btnstyle rounded-md">Log In</Link>                    </>
                    )}

                </div>
            </div>

        </div>
    );
};

export default Nav;