import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Tab bar at the top */}
      <nav className="tab-bar">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />

      {/* Styling for the tab bar */}
      <style jsx>{`
        .tab-bar {
          background-color: #f8f9fa;
          padding: 10px;
          border-bottom: 1px solid #e7e7e7;
          text-align: center;
        }
        .tab-bar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
        }
        .tab-bar li {
          margin: 0 15px;
        }
        .tab-bar a {
          text-decoration: none;
          color: #0070f3;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
