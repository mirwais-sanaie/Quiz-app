type Main = {
  children: React.ReactNode;
};

function Main({ children }: Main) {
  return <div className="main">{children}</div>;
}

export default Main;
