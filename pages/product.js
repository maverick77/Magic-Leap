import Head from "next/head";
import PDP from "../components/PDP";
export default function About() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
      </Head>
      <PDP />
    </div>
  );
}
