import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
export default function NavBar(){
    return(
        <div>
            <div className='flex flex-row justify-between'>
                <NavLink>
                    <div>LOGO</div>
                </NavLink>
                <div>
                    <NavLink>
                        <p>Home</p>
                    </NavLink>
                    <NavLink>
                        <FaShoppingCart/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}