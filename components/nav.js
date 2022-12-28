import Link from "next/link";

const Nav = () => {
    return ( 
        <>
            <nav className=" flex justify-between items-center">
                <Link className=" text-2xl" href={'/'}>Logo</Link>
                <Link className=" py-2 px-3 rounded-md bg-blue-600 text-white" href={'/auth/login'}>Join Now</Link>
            </nav>
        </>
     );
}
 
export default Nav;