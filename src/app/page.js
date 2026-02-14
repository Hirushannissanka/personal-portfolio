import Image from "next/image";
import styles from "./page.module.css";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />

    </>

  );
}
