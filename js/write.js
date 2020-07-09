var writeButton = document.querySelector(".btn--write-us");
var writeUsPopup = document.querySelector(".modal-write");
var writeUsClose = writeUsPopup.querySelector(".btn--write__close");
var writeUsForm = writeUsPopup.querySelector(".write-form");
var userName = writeUsPopup.querySelector(".write-form__input--name");
var userEmail = writeUsPopup.querySelector(".write-form__input--email");
var userMessage = writeUsPopup.querySelector(".write-form__input--text-area");

var isStorageSupport = true;
var storageName, storageEmail = "";


try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

writeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-write-show");
  if (storageName) {
    userName.value = storageName;
    userEmail.focus();
  }
  if (storageEmail) {
    userEmail.value = storageEmail;
    userMessage.focus();
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-write-show");
  writeUsPopup.classList.remove("modal-error");
});
console.log(!userName.value);
console.log(!userMessage.value);

writeUsForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-write-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-write-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});
