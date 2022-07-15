import {HomePage} from '../pages/HomePage/HomePage';
import AdmimHomePage from '../pages/AdminPage/AdminHomePage';
import ApplicationFormPage from '../pages/ApplicationPage/ApplicationFormPage';
import {CreatePage} from '../pages/CreatePage/CreateTripPage';
import {LisTripsPage} from '../pages/ListPage/ListTripsPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import TripDetailsPage from  '../pages/TripsPage/TripDetailsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route index element={ <HomePage /> } />
        <Route path='listtrip' element={ <LisTripsPage /> } />
        <Route path='AdminHomePage' element={ <AdmimHomePage /> } />
        <Route path='LoginPage' element={ <LoginPage /> } />
        <Route path='Create' element={ <CreatePage /> } />
        </Routes>   
        </BrowserRouter>
    )
}


