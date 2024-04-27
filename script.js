function selectShape() {
    resetResults()

    const shape = document.getElementById("shape").value;
    document.getElementById("input-fields").style.display = "block";

    const divs = [
        "length-div", "width-div", "base-div", 
        "height-div", "radius-div", "side1-div",
        "side2-div" , "segitiga", "segitiga-rumus1", 
        "segitiga-rumus2", "lingkaran" , "lingkaran-rumus1",
        "lingkaran-rumus2", "lingkaran-rumus3", "keterangan",
        "persegi panjang", "persegi panjang-rumus1", "persegi panjang-rumus2",
        "persegi", "persegi-rumus1",  "persegi-rumus2",
        "jajar genjang", "jajar genjang-rumus1", "jajar genjang-rumus2"
    ];
     
    for (const div of divs) {
        document.getElementById(div).style.display = "none";
    }

    if (shape === "rectangle") {
        document.getElementById("length-div").style.display = "block";
        document.getElementById("width-div").style.display = "block";
        document.getElementById("persegi panjang").style.display = "block";
        document.getElementById("persegi panjang-rumus1").style.display = "block";
        document.getElementById("persegi panjang-rumus2").style.display = "block";
        

    } else if (shape === "triangle") {
        document.getElementById("base-div").style.display = "block";
        document.getElementById("height-div").style.display = "block";
        document.getElementById("side1-div").style.display = "block" ;
        document.getElementById("segitiga").style.display = "block" ;
        document.getElementById("segitiga-rumus1").style.display = "block" ;
        document.getElementById("segitiga-rumus2").style.display = "block" ;
    } else if (shape === "circle") {
        document.getElementById("radius-div").style.display = "block";
        document.getElementById("lingkaran").style.display = "block";
        document.getElementById("lingkaran-rumus1").style.display = "block";
        document.getElementById("lingkaran-rumus2").style.display = "block";
        document.getElementById("lingkaran-rumus3").style.display = "block";
        document.getElementById("keterangan").style.display = "block";
        
    } else if (shape === "square") {
        document.getElementById("side2-div").style.display = "block";
        document.getElementById("persegi").style.display = "block";
        document.getElementById("persegi-rumus1").style.display = "block";
        document.getElementById("persegi-rumus2").style.display = "block";
    } else if (shape === "parallelogram") {
        document.getElementById("base-div").style.display = "block";
        document.getElementById("height-div").style.display = "block";
        document.getElementById("jajar genjang").style.display = "block";
        document.getElementById("jajar genjang-rumus1").style.display = "block";
        document.getElementById("jajar genjang-rumus2").style.display = "block";
    }
}

function calculate() {
    const shape = 
        document.getElementById("shape").value;
    const areaElement = 
        document.getElementById("area");
    const perimeterElement = 
        document.getElementById("perimeter");

    let area, perimeter;

    if (shape === "rectangle") {
        const length = parseFloat(
            document.getElementById("length").value);
        const width = parseFloat(
            document.getElementById("width").value);
        area =  length * width;
        perimeter = 2 * (length + width);
    } else if (shape === "triangle") {
        const base = parseFloat(
            document.getElementById("base").value);
        const height = parseFloat(
            document.getElementById("height").value);
        const side = parseFloat(
            document.getElementById ("side1").value);
        area = 0.5 * base * height;
        perimeter = side * 2 + base;
            
    } else if (shape === "circle") {
        const radius = parseFloat(
            document.getElementById("radius").value);
        area = Math.ceil (Math.PI * Math.pow(radius,2));
        perimeter = Math.ceil (2 * Math.PI * radius);
    } else if (shape === "square") {
        const side = parseFloat(
            document.getElementById("side2").value);
        area = side * side;
        perimeter = 4 * side;
    } else if (shape === "parallelogram") {
        const base = parseFloat(
            document.getElementById("base").value);
        const height = parseFloat(
            document.getElementById("height").value);
        area = base * height;
        perimeter = 2 * (base + height);
    }

    areaElement.textContent = 
        `Luas: ${area.toFixed(1)}`;
    perimeterElement.textContent = 
        `Keliling: ${perimeter.toFixed(1)}`;
    document.getElementById("results")
        .style.display = "block";
}

function resetResults() {
    document.getElementById("results")
        .style.display = "none";
}

document.getElementById('calculate-btn')
    .addEventListener('click', () => {
        calculate()
    });

selectShape();