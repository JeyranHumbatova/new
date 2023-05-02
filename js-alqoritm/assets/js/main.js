function openModal() {
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none")
}
function closeModal() {
    const modal = document.querySelector(".window");
    modal.classList.add("d-none");
}


let index = -1;
function createStudent() {
    let arr = [];
    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");

    arr.push(nameInp.value);
    arr.push(surnameInp.value);
    const tbody = document.querySelector("tbody");
    tbody.innerHTML += `<tr><td>${index += 1}</td><td>${arr.shift(1)}</td><td>${arr.pop(1)}</td><td>    <button class="p-0 " ind="" onclick="removeStudent()" ><i class="las la-trash"></i></button></td></tr>`;
    nameInp.value = '';
    surnameInp.value = '';
    closeModal();
   
}
function removeStudent() {
    let  tab = document.getElementsByClassName("tr");
    for (i = 0; i < tab.length; i++) {
       tab-= tab[i].remove();
    }


}
