import './globals.css';
import ErrorBoundary from '../components/ErrorBoundary';
import { AuthProvider } from '../contexts/AuthContext';
import { ToastProvider } from '../contexts/ToastContext';
import OfflineBanner from '../components/OfflineBanner';
import ToastContainer from '../components/ToastContainer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ToastProvider>
            <ErrorBoundary>
              <OfflineBanner />
              <Header />
              <div className="flex">
                <NavBar />
                <main className="flex-1 p-4">{children}</main>
              </div>
              <ToastContainer />
            </ErrorBoundary>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
