import React from 'react'
import Dashboard from './Dashboard';
import ViewTransactions from './viewTransactions';
import ViewAccounts from './viewAccounts';
import CreateAccounts from "./accounts"
import { Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom"
function index() {
  return (
    <>
      <header className='header'>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand" ><i class="fa-solid fa-house"></i></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/dashboard" class="nav-link active" aria-current="page" href="#">Dashboard</Link>
                </li>
                <li class="nav-item">
                  <Link to="/dashboard/viewAccounts" class="nav-link" href="#">Accounts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </header>
      {/* <SideBar2 /> */}

      <div className='contentArea' >
        <Routes>
          <Route to="/*">
            <Route index element={<Dashboard />} />
            <Route path='/viewTransactions' element={<ViewTransactions />} />
            <Route path='/createAccounts' element={<CreateAccounts />} />
            <Route path='/viewAccounts' element={<ViewAccounts />} />
          </Route>
        </Routes>
      </div>
    </>

  )
}

export default index