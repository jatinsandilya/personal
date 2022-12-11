const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Jatin Sandilya.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <script
        lang="javascript"
        dangerouslySetInnerHTML={{
          __html: `if (!window.localStorage.getItem("theme_default")) {
            window.localStorage.setItem("theme", "dark");
            window.localStorage.setItem("theme_default", "dark");
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
          }`
        }}
      ></script>
    </small>
  )
}
