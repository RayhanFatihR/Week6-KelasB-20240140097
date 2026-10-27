
const dataForm = document.getElementById("dataForm");
const result = document.getElementById("result");

dataForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const favorit = document.getElementById("favorit").value;

    result.innerHTML = `
        <h3>Data Berhasil Dikirim!</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pokémon Favorit:</strong> ${favorit}</p>
    `;
});
