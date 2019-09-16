import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/reducers'
import { Provider } from 'react-redux'

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
          <style jsx global>{`
            @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,800);

            html, body, #__next, main {
              height: 100%;
            }

            .info {
              margin-left: 12px;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
            }

            .name {
              font-size: 1.25rem;
              font-weight: bold;
            }

            .form-container {
              border: thin solid #ddd;
              background-color: #fbfbfb;
              padding: 2rem;
            }

              form {
                display: flex;
                max-width: 500px;
                margin: 0 auto;
              }

              form input[type="text"]{
                margin: 15px 0;
                padding: 15px 10px;
                width: 100%;
                outline: none;
                border: 1px solid #bbb;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                border-right: none;
                display: inline-block;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                -webkit-transition: 0.2s ease all;
                -moz-transition: 0.2s ease all;
                -ms-transition: 0.2s ease all;
                -o-transition: 0.2s ease all;
                transition: 0.2s ease all;
              }
              form button {
                margin: 15px 0;
                padding: 15px 10px;
                width: 100%;
                outline: none;
                border: 1px solid #bbb;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
                display: inline-block;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                -webkit-transition: 0.2s ease all;
                -moz-transition: 0.2s ease all;
                -ms-transition: 0.2s ease all;
                -o-transition: 0.2s ease all;
                transition: 0.2s ease all;
                cursor: pointer;
              }

            .heading {
            	text-align: center;
              font-size: 3rem;
              margin: 0 0 1rem;
            }

            .no-user-found{
              border: 1px solid red !important;
              position: relative;
            }
            .failed-to-find-text{
              position: absolute;
              top: 0;
            }
            .position{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 125px;
              font-size: 2.5rem;
            }
            .position span{
              font-size: 1rem;
              margin: 0 .5rem;
            }
            .examples-container{
              display: flex;
              justify-content: center;
              line-height: 65px;
            }
            .examples{
              flex: 0 1 45rem;
              text-align: center;
            }
              .examples-body {
                justify-content: space-around;
                display: flex;
                margin-bottom: 25px;
              }
            h1 {
              color: #444;
              font: 800 350%/1.4 'Open Sans', sans-serif;
              text-transform: uppercase;
            }

            h1::selection {
              -webkit-text-stroke: 4px #fb8a05;
              color: #fff;
            }

            a {
              color: #fb8a05;
              text-decoration: none;
            }
            a:hover {
            color: #532600;
            }

          `}</style>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
