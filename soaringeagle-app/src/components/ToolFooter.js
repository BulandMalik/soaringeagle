export const ToolFooter = (props) => {

  return (
    <footer>
      <small>&copy; {new Date().getFullYear()} {props.companyName}</small>
    </footer>  
  );

};
