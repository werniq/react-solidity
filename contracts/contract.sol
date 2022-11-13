// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract JustContract {

    uint public immutable priceToEmit;
    uint public counter = 0;
    bool locked = true;

    constructor (uint _priceToEmit) {
        priceToEmit = _priceToEmit;
    }


    struct SomeStruct {
        string str;
        uint timestamp;
        uint paidAmount;
    }


    mapping (uint => SomeStruct) public mappStruct;


    event JustEvent (
        string strInEvent,
        bytes32 hashedBytes,
        uint transactionId,
        uint timestamp
    );



    function emitEvent(string memory _strInEvent, uint _transactionId, uint _timestamp) payable public returns(bytes32) {
        require(msg.value == priceToEmit, "Paid not enough :c");
    
        bytes32 someBytes = keccak256(abi.encodePacked(_strInEvent, _transactionId, _timestamp));
        // Sign
        emit JustEvent(_strInEvent, someBytes, _transactionId, _timestamp);

        return someBytes;
    }


    function anotherThingThatIWantToTestInFrontEnd(string memory _input, uint _timestamp) payable public returns(string memory) {
        require(msg.value > 0, "Pay something please!");
        mappStruct[counter] = SomeStruct({
            str: _input,
            timestamp: _timestamp,
            paidAmount: msg.value
        });
        counter++;
        return "Congratulations! Now you can continue procrastinating!";
    } 

    
    function lock() public payable {
        require(locked = false, "Locked var is already true");
        locked = true;
    }


    function unlock() payable public {
        require(locked = true, "Locked var is already false");
        locked = false;
    }
}