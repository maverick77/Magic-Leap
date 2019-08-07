import Router from 'next/router'


// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// and use it manually

function onClickHandler (href) {
  return e => {
    e.preventDefault()
    Router.push(href)
  }
}

const Link = ({ children, href }) => (
  <a href='#' onClick={onClickHandler(href)}>
    {children}
    <style jsx>{`
      a {
        margin-right: 10px;
      }
    `}</style>
  </a>
)

export default Link;