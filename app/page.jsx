import "@styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "Artify",
  description: "Discover and Share Art",
};

const Home = ({children }) => {
  return (
      <>
        <Navbar />
        {/* {children} */}
      </>
  );
};

export default Home;
