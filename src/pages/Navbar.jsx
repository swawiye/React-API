import {Link} from "react-router-dom";
//import {useMatch, useResolvedPath} from "react-router-dom";


function Navbar() {
    return (
        <nav className="bg-yellow-700 flex p-2 text-center items-center">
            <Link to="/" className="font-bold text-2xl">List Buddy</Link>
            <ul>
                <Link to="/list" className="flex ml-100 font-semibold hover:text-yellow-400">List</Link>
            </ul>
        </nav>
    )
}
export default Navbar;

//function CustomLink({to, children}) {
//    const resolvedPath = useResolvedPath(to)
//    const isActive = useMatch({path: resolvedPath.pathname, end: true})
//    return (
//        <li className={isActive ? "active" : ""}> 
//            <Link to={to}>{children}</Link>
//        </li>
//    )
//}