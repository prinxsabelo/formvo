import { useContext } from 'react';
import { Context } from '../../context/Context';
import NavItem from './NavItem';
const NavBar = () => {

    const { navItems } = useContext(Context);

    return <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white text-black  h-13 flex  justify-center justify-between items-center
                            border-t border-t-8 border-gray-200">
        {navItems.map((item, index) => <NavItem item={item} key={index} />)}

    </div>
}
export default NavBar;