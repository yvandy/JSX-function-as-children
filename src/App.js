import './App.css';
import React from 'react';

const Button = props => {

  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <>
      <div>This is valid HTML &amp; JSX at the same time.</div>
      <div>
        <Button kind="primary" onClick={() => console.log("clicked!")}>
          Hello World!
      </Button>
      </div>
    </>
  );
};
export default App;
