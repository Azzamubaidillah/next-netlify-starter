import Head from 'next/head';

export default function ContactUs() {
    return (
        <div className="container">
            <Head>
                <title>Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <main>
                <h1>Contact Us</h1>
                <p>
                    If you have any questions, feedback, or need assistance, please feel free to reach out to us at{' '}
                    <a href="mailto:azzam.ubaidillah05@gmail.com">azzam.ubaidillah05@gmail.com</a>.
                </p>

                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </main>

            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 2rem;
                }
                main {
                    padding: 1rem 0;
                }
                h1 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }
                p {
                    margin-bottom: 2rem;
                }
                .form-group {
                    margin-bottom: 1rem;
                }
                label {
                    display: block;
                    margin-bottom: 0.5rem;
                }
                input, textarea {
                    width: 100%;
                    padding: 0.5rem;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-size: 1rem;
                }
                button {
                    padding: 0.75rem 1.5rem;
                    font-size: 1rem;
                    color: white;
                    background-color: #0070f3;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                button:hover {
                    background-color: #005bb5;
                }
            `}</style>
        </div>
    );
}
