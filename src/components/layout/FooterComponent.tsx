import React from 'react'

function FooterComponent() {
  return (
      <div className="hero is-warning">
        <footer className="hero-footer mt-3 md-3">
            <p className="content has-text-centered">
                &copy; {new Date().getFullYear()} - <a href="https://danielalmenar.com">Dan Almenar Williams</a>
            </p>
        </footer>
      </div>

  )
}

export default FooterComponent