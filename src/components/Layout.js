import Header from './Header'
import Meta from './Meta'

export default function Layout(props) {
  return (
    <section
      className={`layout ${props.pathname == 'info' && 'info_page'}`}
      style={{
        backgroundColor: `${props.bgColor && props.bgColor}`,
        color: `${props.pathname == 'info' && 'white'}`,
      }}
    >
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <Header siteTitle={props.siteTitle} />
      <div className="content">{props.children}</div>
      <style jsx>
        {`
          .layout {
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .layout .info_page {
            color: #ebebeb;
          }
          .content {
            flex-grow: 1;
          }
          @media (min-width: 768px) {
            .layout {
              display: block;
            }
            .content {
              flex-grow: none;
              width: 70vw;
              margin-left: 30vw;
            }
          }
        `}
      </style>
      <footer>
        <p>Created for the good people of the internet by Thomas Greco</p>
        <h3>
          Follow him on twitter{' '}
          <a hrf="https://twitter.com/tgrecojs" target="_blank">
            @tgrecojs
          </a>
        </h3>
      </footer>
    </section>
  )
}
