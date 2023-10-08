import "../style/globals.css";
import "../style/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const metadata = {
  title: "ارزش پرداز یکان",
  description: "پلتفرم تحلیل بازار معاملات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
