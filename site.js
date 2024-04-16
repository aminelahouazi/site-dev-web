// JavaScript source code
// JavaScript source code
let left = true;
let middle = false;
let right = false;

function getAp() {
    if (!left) {
        document.getElementById("left").classList.remove('outl');
        document.getElementById("middle").classList.remove('getm');
        document.getElementById("middle").classList.add('outm');
        document.getElementById("right").classList.remove('getr');
        document.getElementById("right").classList.add('outr');
        
        document.getElementById("left").classList.add('getl');
        
        left = true;
        middle = false;
        right = false;
    }
}

function getSpec() {
    if (!middle) {
        document.getElementById("left").classList.remove('getl');
        document.getElementById("left").classList.add('outl');
        document.getElementById("middle").classList.remove('outm');
        document.getElementById("right").classList.remove('getr');
        document.getElementById("right").classList.add('outr');
        
        document.getElementById("middle").classList.add('getm');
        
        left = false;
        middle = true;
        right = false;
    }
}

function getEvnmt() {
    if (!right) {
        document.getElementById("left").classList.remove('getl');
        document.getElementById("left").classList.add('outl');
        document.getElementById("middle").classList.remove('getm');
        document.getElementById("middle").classList.add('outm');
        document.getElementById("right").classList.remove('outr');
        
        document.getElementById("right").classList.add('getr');
        
        left = false;
        middle = false;
        right = true;
    }
}