import { ToolHeader } from "../ToolHeader";
import { ToolFooter } from "../ToolFooter";
import { ElectionTable } from "./ElectionTable";
import { ElectionForm } from "./ElectionForm";

export const ElectionTool = () => {                             

    return (  
    <>    
        {/* <ToolHeader headerText="Election Tools" /> */}
        <ElectionTable />
        {/* <ElectionForm /> */}
        {/* <ToolFooter footerText="Copyright 2021. A Cool Company, Inc."/> */}
    </>

    ); 
  }
