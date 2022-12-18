
import logo from '@logos/logo_yard_sale.svg';
import Image from 'next/image'
import email from '@icons/email.svg';
import styles from '@styles/SendEmail.module.scss';

const SendEmail = () => {
	return (
		<div className={styles.SendEmail}>
			<div className="form-container">
				<Image src={logo} alt="logo" className="logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={email} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;
