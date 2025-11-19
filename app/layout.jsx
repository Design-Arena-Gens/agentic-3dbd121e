export const metadata = {
  title: 'Pixel Study Scene',
  description: '3D pixel art boy studying under a clay oil lamp',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0d0c0a', color: '#f1e9d2' }}>
        {children}
      </body>
    </html>
  );
}
