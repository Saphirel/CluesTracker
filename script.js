function createMap() {
	var i = -38;
	var j = -65;
	var map = document.getElementById("map");
	var row;

	while(j <= 46) {
		map = document.getElementById("map");
		row = map.insertRow(j +65);
		while (i <= 20) {
			var cell = row.insertCell(i +38);
			cell.setAttribute("x", i);
			cell.setAttribute("y", j);
			cell.setAttribute("onclick", "setJalon("+i+","+j+")");
			++i;
		}
		i = -38;
		++j;
	}
}

function setJalon(x, y) {
	var cells = document.getElementsByTagName("td");
	var i = 0;
	var length = cells.length;
	while ((i < length) && ((cells[i].getAttribute("x") != x) || (cells[i].getAttribute("y") != y))) {
		++i;
	}
	cells[i].style.background = "red";
}

function setJalonFromInput() {
	var inputX = document.getElementById("inputX").value;
	var inputY = document.getElementById("inputY").value;
	setJalon(inputX, inputY);
}