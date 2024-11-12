function plus() {
    let input1
    let input2
    let input3
    input1 = document.getElementById("inp1")
    input2 = document.getElementById("inp2")
    input3 = document.getElementById("round")
    let value1
    let value2
    let value3
    value1 = input1.value
    value2 = input2.value
    value3 = input3.value
    let x
    if (value3 > -1) {
       x = (Number(value1) + Number(value2)).toFixed(Number(value3))
    }
    else {
        x = Number(value1) + Number(value2)
    }
    let y
    y = document.getElementById("answer")
    y.innerHTML = x
}
function minus() {
    let input1
    let input2
    let input3
    input1 = document.getElementById("inp1")
    input2 = document.getElementById("inp2")
    input3 = document.getElementById("round")
    let value1
    let value2
    let value3
    value1 = input1.value
    value2 = input2.value
    value3 = input3.value
    let x
    x = (Number(value1) - Number(value2)).toFixed(Number(value3))
    let y
    y = document.getElementById("answer")
    y.innerHTML = x
}
function multi() {
    let input1
    let input2
    let input3
    input1 = document.getElementById("inp1")
    input2 = document.getElementById("inp2")
    input3 = document.getElementById("round")
    let value1
    let value2
    let value3
    value1 = input1.value
    value2 = input2.value
    value3 = input3.value
    let x
    x = (Number(value1) * Number(value2)).toFixed(Number(value3))
    let y
    y = document.getElementById("answer")
    y.innerHTML = x
}
function divis() {
    let input1
    let input2
    let input3
    input1 = document.getElementById("inp1")
    input2 = document.getElementById("inp2")
    input3 = document.getElementById("round")
    let value1
    let value2
    let value3
    value1 = input1.value
    value2 = input2.value
    value3 = input3.value
    let x
    x = (Number(value1) / Number(value2)).toFixed(Number(value3))
    let y
    y = document.getElementById("answer")
    y.innerHTML = x
}
function degree() {
    let input1
    let input2
    let input3
    input1 = document.getElementById("inp1")
    input2 = document.getElementById("inp2")
    input3 = document.getElementById("round")
    let value1
    let value2
    let value3
    value1 = input1.value
    value2 = input2.value
    value3 = input3.value
    let x
    x = (Number(value1) ** Number(value2)).toFixed(Number(value3))
    let y
    y = document.getElementById("answer")
    y.innerHTML = x
}
function sqrt() {
    let input1
    let input2
    let input3
    input1 = document.getElementById("inp1")
    input2 = document.getElementById("inp2")
    input3 = document.getElementById("round")
    let value1
    let value2
    let value3
    value1 = input1.value
    value2 = input2.value
    value3 = input3.value
    let x
    if (value3 > -1) {
        x = (x = Number(value2) ** (1 / Number(value1))).toFixed(Number(value3))
     }
     else {
        x = Number(value2) ** (1 / Number(value1))
     }
     let y
     y = document.getElementById("answer")
     y.innerHTML = x
}
function help() {
    alert("Чтобы не округлять число, введите -1. Введите 0, чтобы округлить до целого числа, и 1, 2, 3 и т.д., чтобы округлить до этого количества знаков после запятой.")
}