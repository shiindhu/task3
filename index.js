var d = new Date();
document.getElementById("demo").innerHTML = d;
window.onload = function() {
	var form = document.getElementById("form");
	var input = document.getElementById("input");
	var btn = document.getElementById("btn");
	var list = document.getElementById("list");	
	var btnClr = document.getElementById("btnClr");	
	var id = 1;
	var liItem = "";
	var todoList = [];
	btn.addEventListener("click", addTodoItem);
	list.addEventListener("click", boxChecked);
	btnClr.addEventListener("click", clearList);

	function addTodoItem() {
		if(input.value === "") {
			alert("Your T0-D0 here!");
		}
		else {
			if(list.style.borderTop === "") {
				console.log("here!")
				list.style.borderTop = "2px solid white";
				btnClr.style.display = "inline";
			}
			var text = input.value;	
			var item = `<li id="li-${id}">${text}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;				
			list.insertAdjacentHTML('beforeend', item);	
			liItem = {item: text, checked: false};
			todoList.push(liItem);		
			id++;
			form.reset();
		}
	}
	function boxChecked(event) {
		const element = event.target;
		if(element.type === "checkbox") {
			element.parentNode.style.textDecoration = "line-through";
		}
	}
	function displayList() {
		todoList.forEach(function(element) {
			console.log(element.item)
			var text = element.item;
			var item = `<li id="li-${id}">${text}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;
			list.insertAdjacentHTML("beforeend", item);
			if(element.checked) {
				var li = document.getElementById("li-"+id);
				li.style.textDecoration = "line-through";
				li.childNodes[1].checked = element.checked;
			}
			id++;
		});
	}
	function clearList() {
		todoList = [];
		list.innerHTML = "";
		btnClr.style.display = "none";
		list.style.borderTop = "";
	}
}