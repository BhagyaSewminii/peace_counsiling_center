import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Layouts from '../Components/layouts/Layouts';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Blog from '../pages/Blog';
import Faqs from '../pages/Faqs';
import Contact from '../pages/Contact';
import AdminLayout from '../Components/layouts/AdminLayout';
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import Appointment_scheduling from '../Components/Appoinments/Appointment_scheduling';
import GoogleMap from '../Components/Map/GoogleMap';
import ClientLayout from '../Components/layouts/ClientLayout';
import ProfileManagement from '../Client/ProfileManagement';
import SecureMessaging from '../Client/SecureMessaging'; 
import ManageAppointments from '../Admin/ManageAppointments';
import ClientManagement from '../Admin/ClientManagement';
import Recommendations from '../Admin/Recommendations';
import SecureMessages from '../Admin/SecureMessages';
import Dashboard from '../Admin/Dashboard';
import Stress from '../Components/Blogs/Stress';


export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Layouts />}>
        <Route path='Home' element={<Home />} />  
        <Route path='About' element={<About />} />  
        <Route path='Services' element={<Services />} />  
        <Route path='Blog' element={<Blog />} />  
        <Route path='Faqs' element={<Faqs />} /> 
        <Route path='Contact' element={<Contact />} /> 
        <Route path='Login' element={<Login />} /> 
        <Route path='SignUp' element={<SignUp />} /> 
        <Route path='Appointment_scheduling' element={<Appointment_scheduling />} />
        <Route path='GoogleMap' element={<GoogleMap />} /> 
        <Route path='Stress' element={<Stress />} /> 

      </Route>

      <Route path='Admin' element={<AdminLayout />}>
        <Route path='Dashboard' element={<Dashboard />} />
        <Route path='ManageAppoinments' element={<ManageAppointments />} />
        <Route path='SecureMessages' element={<SecureMessages />} />
        <Route path='ClientManagement' element={<ClientManagement />} />
        <Route path='Recommendations' element={<Recommendations />} />
      </Route>

      <Route path='Client' element={<ClientLayout />}>
        <Route path='ProfileManagement' element={<ProfileManagement />} />
        <Route path='SecureMessaging' element={<SecureMessaging />} />
        

      </Route>
    </Routes>
  );
};

export default Routers;
