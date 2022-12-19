import React from 'react';
import styles from '@styles/DesktopMenu.module.scss';

const DesktopMenu = () => {
	return (
		<div className={styles.DesktopMenu}>
			<ul>
				<li>
					<a href="/" className={styles["title"]}>My orders</a>
				</li>
				<li>
					<a href="/">My account</a>
				</li>
				<li>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
};

export default DesktopMenu;
