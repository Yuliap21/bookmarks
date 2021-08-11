import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

import Bookmarks from '../pages/Bookmarks';
const routes = [
	// { Component: Bookmarks, key: 'Bookmarks', path: '/bookmarks' },
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},

	{
		Component: About,
		key: 'About',
		path: '/about'
	},

	{
		Component: Bookmarks,
		key: 'HomePage',
		path: '/'
	}
];

export default routes;
