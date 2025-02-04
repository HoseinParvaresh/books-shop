import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home';
import Svg from './components/Utils/Svg';
import BookPage from './components/Pages/Product/SecondHandBook/SecondHandBookPage'
import BookStore from './components/Pages/Store/SecondHandBooks/SecondHandBooksPage'
import UserBookStore from './components/Pages/Store/UserBooks/UserBooksPage'
import UserBookPage from './components/Pages/Product/UserBooks/UserBooksPage'
import Register from './components/Pages/Authentication/Register/Register';
import LoginPage from './components/Pages/Authentication/Login/LoginPage';
import UserDashboardPage from './components/Pages/Dashboard/UserDashboard/UserDashboardPage';
import ChatPage from './components/Pages/Chat/ChatPage';
import { Navigate } from 'react-router-dom';
import EditAccountPage from './components/Pages/Dashboard/UserDashboard/EditAccountPage/EditAccountPage';
import MyBooksPage from './components/Pages/Dashboard/UserDashboard/MyBooksPage/MyBooksPage'
import UserMainPanelPage from './components/Pages/Dashboard/UserDashboard/MainPanel/UserMainPanelPage';
import MyChatsPage from './components/Pages/Dashboard/UserDashboard/MyChatsPage/MyChatsPage';
import MyOrdersPage from './components/Pages/Dashboard/UserDashboard/MyOrdersPage/MyOrdersPage';
import MyTicketPage from './components/Pages/Dashboard/UserDashboard/MyTicketsPage/MyTicketsPage';
import AddBook from './components/Pages/Dashboard/UserDashboard/MyBooksPage/AddBookPage/AddBook';
import AdminDashboardPage from './components/Pages/Dashboard/AdminDashboard/AdminDashboardPage';
import { isAdmin,isLogin } from './components/Utils/helperFunction';
import AdminMainPanelPage from './components/Pages/Dashboard/AdminDashboard/MainPanel/AdminMainPanelPage';

function App() {

  return (
    <>
      <Svg/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book-store' element={<BookStore/>}/>
        <Route path='/book/:id' element={<BookPage/>}/>
        <Route path='/users-book-store' element={<UserBookStore/>}/>
        <Route path='/user-book/:id' element={<UserBookPage/>}/>
        <Route path='/register' element={isLogin ? <Navigate to={'/'}/> : <Register/>}/>
        <Route path='/login' element={isLogin ? <Navigate to={'/'}/> : <LoginPage/>}/>
        <Route path='/chat/:id' element={isLogin ? <ChatPage/> : <Navigate to={'/register'}/>}/>
        <Route path='/user-dashboard' element={isLogin ? <UserDashboardPage/> : <Navigate to={'/'}/>}>
          <Route path='main-panel' element={<UserMainPanelPage/>}/>
          <Route path='my-books' element={<MyBooksPage/>}/>
          <Route path='my-chats' element={<MyChatsPage/>}/>
          <Route path='my-orders' element={<MyOrdersPage/>}/>
          <Route path='my-tickets' element={<MyTicketPage/>}/>
          <Route path='edit-account' element={<EditAccountPage/>}/>
          <Route path='add-book' element={<AddBook/>}/>
        </Route>
        <Route path='/admin-dashboard' element={isAdmin ? <AdminDashboardPage/> : <Navigate to={'/'}/>}>
          <Route path='main-panel' element={<AdminMainPanelPage/>}/>
          <Route path='books' element={''}/>
          <Route path='users' element={''}/>
          <Route path='user-books' element={''}/>
          <Route path='menus' element={''}/>
          <Route path='comments' element={''}/>
          <Route path='chats' element={''}/>
          <Route path='publisher' element={''}/>
          <Route path='quote-card' element={''}/>
          <Route path='discount-code' element={''}/>
          <Route path='tickets' element={''}/>
        </Route>
        {/* <Route path='*' element={<NotFound/>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
