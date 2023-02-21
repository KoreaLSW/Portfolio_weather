import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className='main'>
                <Navbar />
                <Outlet />
            </div>
        </QueryClientProvider>
    );
}

export default App;
