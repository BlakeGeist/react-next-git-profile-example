import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <main className="body">
        <div className="container">
          { children }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Main;
