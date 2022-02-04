import Header from "./header";

const Navigation = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  );
};

export default Navigation;
