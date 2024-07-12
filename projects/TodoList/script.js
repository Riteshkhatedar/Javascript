let addBtn = document.getElementById("addBtn");
      addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let data = document.getElementById("inputData").value;
        if (data === "") {
          let parentList = document.getElementById("list");
          parentList.innerHTML = `<span class="error">!invlid input</span>`;
        } else {
          let data = document.getElementById("inputData").value;
          let newLi = document.createElement("li");
          newLi.className = "list-item";
          newLi.innerHTML = `<span>${data}</span><button class="btn" onclick="deletBtn(this)">Delet</button>`;

          let parentList = document.getElementById("list");
          parentList.appendChild(newLi);
        }
      });

      function deletBtn(e) {
        e.parentElement.remove();
      }