import React, { useEffect } from 'react';
import { BarChartRounded, ShoppingCartRounded } from '@mui/icons-material';
import { getAuth } from 'firebase/auth';

/* get user name and photo and how many items in the cart and build header components */
function Header({ cartNum, displayName, photoURL }) {

    const auth = getAuth();

    useEffect(() => {
        //make the icon as DOM
        const toggleMenu = document.querySelector('.toggleMenu');
        //change active variable when clicked on toggle Menu icon
        toggleMenu.addEventListener('click', () => {
            document.querySelector('.rightMenu').classList.toggle('active')
        })
    }, [])

    return (
        <header>

            <img
                src="https://firebasestorage.googleapis.com/v0/b/cowboys-shop-75b1d.appspot.com/o/shoplogo.png?alt=media&token=a2f8a6f4-2d95-4715-9da0-8dc90fd016d7"
                alt=""
                className="logo"
            />

            <div className="shoppingCart">
                <ShoppingCartRounded className="cart" />
                <div className="cart_content">
                    <p>{cartNum}</p>
                </div>
            </div>

            <div className="profileContainer">

                <button className="signout" onClick={() => auth.signOut()}>Sign Out</button>

                <div className="imgBox">
                    <img src={photoURL} rel="noreferrer"
                        alt="" className="profilePic" />
                </div>

                <h2 className="userName"> {displayName}</h2>
            </div>



            <div className="toggleMenu">
                <BarChartRounded className="toggleIcon" />
            </div>

        </header>
    );
}

export default Header;
