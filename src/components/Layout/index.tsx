import Navbar from "./Navbar";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};
