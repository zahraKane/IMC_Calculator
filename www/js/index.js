document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Appeler la fonction pour charger les contacts lors du déclenchement de l'événement "deviceready"
    chargerContacts();

    // Ajouter un gestionnaire d'événements pour le clic sur le bouton "Ajouter un contact"
    document.getElementById("ajouterContactBtn").addEventListener("click", ajouterContact);
}

function chargerContacts() {
    // Ici, vous pouvez ajouter votre logique pour charger les contacts depuis le carnet d'adresses du périphérique
    // Remplacez cette fonction par votre propre code pour récupérer les contacts existants.
    // Pour l'exemple, nous allons simplement créer des contacts fictifs pour l'affichage.

    var contacts = [
        { nom: "John Doe", telephone: "1234567890" },
        { nom: "Jane Smith", telephone: "9876543210" },
    ];

    afficherListeContacts(contacts);
}

function afficherListeContacts(contacts) {
    var contactList = document.getElementById("contactList");
    contactList.innerHTML = "";

    contacts.forEach(function(contact) {
        var contactItem = document.createElement("li");
        contactItem.classList.add("list-group-item");
        contactItem.textContent = contact.nom + " - Téléphone : " + contact.telephone;
        contactList.appendChild(contactItem);
    });
}

function ajouterContact() {
    // Récupérer les valeurs des champs pour le nouveau contact
    var nouveauContactNom = document.getElementById("nom").value;
    var nouveauContactTelephone = document.getElementById("telephone").value;

    // Vous pouvez ajouter ici votre logique pour sauvegarder le nouveau contact dans le carnet d'adresses du périphérique
    // Remplacez cette fonction par votre propre code pour enregistrer le nouveau contact.
    // Pour l'exemple, nous allons simplement ajouter le nouveau contact à la liste existante.

    var nouveauContact = {
        nom: nouveauContactNom,
        telephone: nouveauContactTelephone
    };

    var contactsExistants = getContacts();
    contactsExistants.push(nouveauContact);
    setContacts(contactsExistants);

    // Actualiser la liste des contacts
    chargerContacts();

    // Effacer les champs du formulaire
    document.getElementById("nom").value = "";
    document.getElementById("telephone").value = "";
}

function getContacts() {
    // Récupérer les contacts existants depuis le stockage local du navigateur (ou du périphérique dans le cas d'une application Cordova)
    var contacts = localStorage.getItem("contacts");
    return contacts ? JSON.parse(contacts) : [];
}

function setContacts(contacts) {
    // Sauvegarder les contacts dans le stockage local du navigateur (ou du périphérique dans le cas d'une application Cordova)
    localStorage.setItem("contacts", JSON.stringify(contacts));
}
