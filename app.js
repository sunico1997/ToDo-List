document.addEventListener("DOMContentLoaded", function() {

    let addBtn = document.getElementById("MyBtn");

    addBtn.addEventListener("click", myFunction);

    function myFunction() {
        console.log("Button clicked!");

        let inputValue = document.getElementById("MyInput").value.trim(); // Trim whitespace

        // Check if input value is empty
        if (inputValue === "" || !isNaN(inputValue))   
        {
            console.log("Input value is empty. Item not added.");
            return; // Exit function if input value is empty
        }

        let listItem = document.createElement("li");

        listItem.textContent = inputValue;

        // Add delete button to the list item
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete-btn");
        listItem.appendChild(deleteButton);

        // Event listener for delete button
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });

        document.getElementById("list").appendChild(listItem);

        document.getElementById("MyInput").value = "";
    }
});
