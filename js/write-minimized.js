var storageName,writeButton=document.querySelector(".btn--write-us"),writeUsPopup=document.querySelector(".modal-write"),writeUsClose=writeUsPopup.querySelector(".btn--write__close"),writeUsForm=writeUsPopup.querySelector(".write-form"),userName=writeUsPopup.querySelector(".write-form__input--name"),userEmail=writeUsPopup.querySelector(".write-form__input--email"),userMessage=writeUsPopup.querySelector(".write-form__input--text-area"),isStorageSupport=!0,storageEmail="";try{storageName=localStorage.getItem("userName"),storageEmail=localStorage.getItem("userEmail")}catch(a){isStorageSupport=!1}writeButton.addEventListener("click",function(a){a.preventDefault(),writeUsPopup.classList.add("modal-write-show"),storageName&&(userName.value=storageName,userEmail.focus()),storageEmail&&(userEmail.value=storageEmail,userMessage.focus())}),writeUsClose.addEventListener("click",function(a){a.preventDefault(),writeUsPopup.classList.remove("modal-write-show"),writeUsPopup.classList.remove("modal-error")}),console.log(!userName.value),console.log(!userMessage.value),writeUsForm.addEventListener("submit",function(a){userName.value&&userEmail.value&&userMessage.value?isStorageSupport&&(localStorage.setItem("userName",userName.value),localStorage.setItem("userEmail",userEmail.value)):(a.preventDefault(),writeUsPopup.classList.remove("modal-error"),writeUsPopup.offsetWidth=writeUsPopup.offsetWidth,writeUsPopup.classList.add("modal-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&writeUsPopup.classList.contains("modal-write-show")&&(a.preventDefault(),writeUsPopup.classList.remove("modal-write-show"),writeUsPopup.classList.remove("modal-error"))});