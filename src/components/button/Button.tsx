// import React from "react";
// import "./Button.css";

// export function Button({ title }: { title: string }) {
//   return <button>{title}</button>;
// }

import React from "react";
import "./Button.css"

interface Props {
  // border: string;
  // color: string;
  children?: React.ReactNode;
  // height: string;
  onClick: () => void;
  // radius: string
  // width: string;
}

const Button: React.FC<Props> = ({ 
    // border,
    // color,
    children,
    // height,
    onClick, 
    // radius,
    // width
  }) => { 
  return (
    <button 
      onClick={onClick}
      // style={{
      //    backgroundColor: color,
      //    border,
      //    borderRadius: radius,
      //    height,
      //    width
      // }}
    >
    {children}
    </button>
  );
}

export default Button;