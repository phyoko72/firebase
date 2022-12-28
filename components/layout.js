import Nav from "./nav";

const Layout = ({children}) => {
    return ( 
        <main className="m-10">
            <Nav/>
            {children}
        </main>
     );
}
 
export default Layout;