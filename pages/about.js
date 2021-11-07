import Head from 'next/head'

const about = () => {
    return (
        <div>
            <Head>
                <title>YS-Data</title>
            </Head>
            <h2>About us</h2>
            <p>
              Content is provided by 'Die Lounge'. 
            </p>
            <iframe src="https://discord.com/widget?id=574287632750608394&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
    );
};

export default about