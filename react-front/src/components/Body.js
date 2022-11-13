import abi from "./build/contracts/JustContract.json";
import { ethers } from "ethers";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';


function Test({ signer }) {
    const [donateAmount, setDonateAmount] = useState("");
    
    const JUSTCONTRACT_ADDRESS = "0x29515cB8Edea05CE0b4d615887993FBeb4De26Ba";
    
    const contract = new ethers.Contract(
        JUSTCONTRACT_ADDRESS,
        abi,
        signer
    );
 
    const handlePrice = (e) => {
        const value = e.target.value;
        setDonateAmount(value)
    };

    return (
     <>
       <InputGroup className="mb-3">
         <Button variant="outline-secondary" id="button-addon1">
           Button
         </Button>
         <Form.Control
           aria-label="Example text with button addon"
           aria-describedby="basic-addon1"
         />
       </InputGroup>
     </>
    );
}

export default Test;

