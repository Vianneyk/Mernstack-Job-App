import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElement";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to="/">
					<h1>Logo</h1>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to="/jobs" activeStyle>
						Find jobs
					</NavLink>
					<NavLink to="/post-jobs" activeStyle>
						Post Jobs
					</NavLink>
					<NavLink to="/blog" activeStyle>
						Blog
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Sign Up
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/signin">Sign In</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
