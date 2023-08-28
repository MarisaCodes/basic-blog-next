import "./globals.css";
import DefaultNavbar from "./layout/navbar";

export default function Home() {
  return (
    <>
      <DefaultNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hello world</h1>
      </main>
    </>
  );
}
