import "@/sass/global.sass";
import "react-toastify/ReactToastify.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { CartProvider } from "@/context/cart";
import { Flip, ToastContainer } from "react-toastify";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Catalogo Web",
  description: "O melhor catalogo para sua empressa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <CartProvider>
        <body className={montserrat.className}>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Flip}
            theme="light"
            limit={2}
          />
        </body>
      </CartProvider>
    </html>
  );
}
