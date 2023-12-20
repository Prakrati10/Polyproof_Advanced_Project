pragma circom 2.0.0;

template MultiplierCircuit() {

    signal input a;
    signal input b;
    signal output c;

    
    component andGate = AND();
    component notGate = NOT();
    component orGate = OR();

   
    andGate.a <== a;
    andGate.b <== b;

    notGate.in <== b;

    orGate.a <== andGate.out;
    orGate.b <== notGate.out;

    c <== orGate.out;
}

template AND() {

    signal input a;
    signal input b;
    signal output out;

    out <== a * b;
}

template NOT() {
    
    signal input in;
    signal output out;

    out <== 1 - in;
}

template OR() {
    signal input a;
    signal input b;
    signal output out;

    out <== a + b - a * b;
}

component main = MultiplierCircuit();
