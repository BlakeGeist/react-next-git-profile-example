import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = ({ children, pageMod }) => {
  let containerClass = 'container';
  if(pageMod){
    containerClass += ' mod-' + pageMod + '-page';
  }
  return (
    <>
      <Header />
      <main className="body">
        <div className={containerClass}>
          { children }
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .body {
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}

export default Main;
