function showTable() {
  fetch("http://localhost:5207/api/Comment/Index")
    .then((response) => response.json())
    .then((data) => {
      //console.log(libro);
      const table = document.getElementById("tbody");
      table.innerHTML = "";
      data.forEach((libro) => {
        let tr = document.createElement("tr");
        let id = document.createElement("td");
        id.textContent = libro.id;
        let title = document.createElement("td");
        title.textContent = libro.title;

        let author = document.createElement("td");
        author.textContent = libro.author;

        let description = document.createElement("td");
        description.textContent = libro.description;
        let iconDelete = document.createElement("td");
        iconDelete.innerHTML = `<button type="button"  onclick="deleteBook(${libro.id})" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg></button>`;

        let iconUpdate = document.createElement("td");
        iconUpdate.innerHTML = `<button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="showInformation(${libro.id})"class="btn btn-warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
      </svg></button>`;

        tr.appendChild(id);
        tr.appendChild(title);
        tr.appendChild(author);
        tr.appendChild(description);
        tr.appendChild(iconDelete);
        tr.appendChild(iconUpdate);

        table.appendChild(tr);
      });
    })
    .catch((err) => {
      console.log(err);

      
    });
}
showTable();

/*const fetchLibro = async () => {
  const response = await fetch("http://localhost:5207/api/Comment/Index", {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

fetchLibro().then((data) => {
  const table = document.getElementById("tbody");
  data.forEach((libro) => {
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    id.textContent = libro.id;
    let title = document.createElement("td");
    title.textContent = libro.title;

    let author = document.createElement("td");
    author.textContent = libro.author;

    let description = document.createElement("td");
    description.textContent = libro.description;
    let iconDelete = document.createElement("td");
    iconDelete.innerHTML = `<button type="button"  onclick="deleteBook(${libro.id})" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
    </svg></button>`;

    let iconUpdate = document.createElement("td");
    iconUpdate.innerHTML = `<button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="showInformation(${libro.id})"class="btn btn-warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
  </svg></button>`;

    tr.appendChild(id);
    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(description);
    tr.appendChild(iconDelete);
    tr.appendChild(iconUpdate);

    table.appendChild(tr);
  });*/

  /*async function postJSON() {
    try {
      let title = document.getElementById("title").value;
      let author = document.getElementById("author").value;
      let description = document.getElementById("description").value;
      const data2 = {
        title: title,
        author: author,
        description: description,
        CreatedAt: new Date(),
      };

      const response = await fetch("http://localhost:5207/api/Comment/Store", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data2),
      });

      const result = await response.json();
      console.log("Success:", result);
      showTable()
      console.log(title, author, description);
    } catch (error) {
      console.error("Error:", error);
    }
  }*/


const deleteBook = (id) => {
  console.log(id);
  Swal.fire({
    title: "¿Seguro que quieres eliminar el libro?",
    text: "No podrás recuperar la información posteriormente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, ¡Eliminalo!",
    cancelButtonText: "cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      var requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };
      fetch(
        "http://localhost:5207/api/Comment/Destroy?id=" + id,
        requestOptions
      )
        .then((response) => {
          if (response.status == 200) {
            Swal.fire(
              "¡Eliminado!",
              "Su libro ha sido eliminado correctamente.",
              "success"
            );
            showTable();
          } else if (response.status == 400) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No se puede eliminar el libro",
            });
          }
        })
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  });
};

const getById = async (id) =>
  await (await fetch("http://localhost:5207/api/Comment/Show?id=" + id)).json();
const showInformation = async (id) => {
  let { title, description, author, createdAt, id: bookid } = await getById(id);
  document.querySelector("#titleUpdate").value = title;
  document.querySelector("#descriptionUpdate").value = description;
  document.querySelector("#authorUpdate").value = author;
  document.querySelector("#dateUpdate").value = createdAt;
  document.querySelector("#id").value = bookid;
};
const update = async () => {
  let id = document.getElementById("id").value;
  let title = document.getElementById("titleUpdate").value;
  let description = document.getElementById("descriptionUpdate").value;
  let author = document.getElementById("authorUpdate").value;
  let date = document.getElementById("dateUpdate").value;
  let libro = {
    id,
    title,
    description,
    author,
    date,
  };
  let response = await fetch(
    `http://localhost:5207/api/Comment/Update?id=${id}`,
    {
      method: "PUT",
      body: JSON.stringify(libro),
      headers: { "Content-Type": "application/json " },
    }
  );
  if (response.status == 200) {
    console.log("se hizo correctamentee");
    showTable()
  }
};
