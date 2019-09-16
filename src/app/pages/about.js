import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/features/Header';
import axios from 'axios';
import Main from '../layouts/Main';

const About = () => {
  const links = [
    { href: 'https://reactjs.org/', label: 'React.js' },
    { href: 'https://nextjs.org/', label: 'Next.js' },
    { href: 'https://www.npmjs.com/package/next-redux-wrapper', label: 'Next Redux Wrapper' },
    { href: 'https://www.npmjs.com/package/axios', label: 'Axios' }
  ].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
  })
  return (
    <>
      <Main pageMod="about">
        <h1>About the github cards app</h1>
        <p>
          The github cards app is a sandbox/playground application meant to showcase
          examples of JavaScript, HTML, CSS and API intergrations.
        </p>
        <p>Here are some of the libraries used in this application.</p>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <a href={href} target="_blank">{label}</a>
            </li>
          ))}
        </ul>
      </Main>
      <style jsx>{`
        h1{
          font-size: 24px;
        }
        .container {
          text-align: center;
        }
      `}</style>
    </>
  )

}
export default About
