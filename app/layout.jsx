import "@styles/globals.css";
import Provider from "@components/Provider";
export const metadata = {
  title: "HandiMart",
  description: "Where Handcrafted Dreams Come True",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  },
};
const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
};
export default layout;
