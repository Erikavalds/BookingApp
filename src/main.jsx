import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import AppRouter from './Routes/AppRouter';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<AppRouter />,
	</BrowserRouter>,
);
