import React, { useState, useContext } from 'react';
import Image from 'next/image'
import DesktopMenu from '@components/DesktopMenu';
import MobileMenu from '@components/MobileMenu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
	const [toggleDesktopMenu, setToggleDesktopMenu]  = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu]  = useState(false);
    const [toggleMyOrder, setToggleMyOrder]  = useState(false);    
    const { state } = useContext(AppContext);

    const handleDesktopMenu = () => {
        setToggleDesktopMenu(!toggleDesktopMenu);
        setToggleMobileMenu(false);
        setToggleMyOrder(false);
    }
    
    const handleMobileMenu = () => {
        setToggleMobileMenu(!toggleMobileMenu);
        setToggleDesktopMenu(false);
        setToggleMyOrder(false);
    }
    const handleMyOrder = () => {
        setToggleMyOrder(!toggleMyOrder);
        setToggleDesktopMenu(false);
        setToggleMobileMenu(false);
    }

	return (
		<nav className={styles.Nav}>
			<Image src={menu} alt="menu" className={styles.menu} onClick={handleMobileMenu}/>
			<div className={styles['navbar-left']}>
				<Image src={logo} alt="logo" className={styles['nav-logo']} />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					<li className={styles['navbar-email']} onClick={handleDesktopMenu}>
						platzi@example.com
					</li>
					<li
						className={styles['navbar-shopping-cart']}
						onClick={handleMyOrder}
					>
						<Image src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggleDesktopMenu && <DesktopMenu />}
            {toggleMobileMenu && <MobileMenu />}
            {toggleMyOrder && <MyOrder />}
		</nav>
	);
}

export default Header;
