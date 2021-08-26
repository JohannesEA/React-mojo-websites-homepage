import {Link as RouterLink} from "react-router-dom";

import "./confirmation.css"


const SuccessPage = () => {


  return (
    <div className="pages section success_page"  >
   Success!!!
   <RouterLink class="page_link" to="/">
                  Home
                </RouterLink>
    </div>
  );
};

export default SuccessPage;
