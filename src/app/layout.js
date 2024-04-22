
import "../style/globals.css";
import "../style/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReduxProvider from "@/app/redux-provider";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ReduxProvider>
          {children}
      </ReduxProvider>
      </body>
    </html>
  );
}
