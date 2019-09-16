import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: 'https://github.com/BlakeGeist/react-next-git-profile-example', label: 'GitHub', isExternal: true }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {
  function LinkItem(props){
    if(props.isExternal){
      return <a href={props.href} className="navItem" target="_blank">{props.label}</a>
    } else {
      return <Link href={props.href}><a className="navItem">{props.label}</a></Link>
    }
  }
  return (
    <>
    <nav>
      <ul>
        <li><Link href="/"><a className="navItem">Home</a></Link></li>
        {links.map(({ key, href, label, isExternal }) => (
          <li key={key}>
            <LinkItem href={href} label={label} isExternal={isExternal} />
          </li>
        ))}
      </ul>
    </nav>
    <style global jsx>{`
      .navItem {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: center;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a, .navItem {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>      
    </>
  )
}

export default Nav
