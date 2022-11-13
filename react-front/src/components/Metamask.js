import { Button } from "react-bootstrap";
import useMetamask from "./hooks/ConnectHook";

function Metamask() {
    const { connect, disconnect, isActive, account } = useMetamask();

    return (
      <>
        {!isActive ? 
        	<div>
        	  <Button variant="primary" size="sm" className="mr-3" onClick={connect}>
        	  	Connect
        	  </Button>
        	  <img src="src/components/images/R(2).jpg" width="25" height="25" />
        	  </div>
						 :
						<div>
        	  	<Button variant="danger" size="sm" onClick={disconnect}>
        	      Disconnect 
        	    </Button>
        	    <img src="src/components/images/R(2).jpg" width="25" height="25" />
        	  </div>
        }
      </>
    )
}

export default Metamask;