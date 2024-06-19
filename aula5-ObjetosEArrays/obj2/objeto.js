let calculadora = {
    x: 5,
    y: 9,
    somar: function () {
        alert(this.x+this.y) 
    }
}

calculadora.somar()

calculadora.x = 50
calculadora.somar()