//function to set a cookie with a givern name value and expiration date 

function setCookie(name, value, days) {
    const data = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

//function to get the value of a cookie with the given name

function getCookie(name) {
    const cookies = document.cookie.split(';');
     for(const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if(cookieName.trim() == name){
            return cookieValue;
        }
     }
     return null;
}

//function to set a value in local storage

function setLocalStorageValue(key) {
    return localStorage.setItem(key);
}

//function to handle the language selection

function getLocalStorageValue(key) {
    return localStorage.getItem(key);
}

//function to handle the language selction

function handleLanguageSelection() {
    const enUSRadio = document.getElementById('en-US');
    const roRORadio = document.getElementById('ro-RO');

    const storedLanguage = getCookie('preferredLanguage') || getLocalStorageValue('preferredLanguage');

    if(storedLanguage) {
        if (storedLanguage == 'en-US') {
            enUSRadio.checked = true;
        } else if (storedLanguage === 'ro-RO') {
            roRORadio.checked = true;
        }
    }

enUSRadio.addEventListener('change', function(){
    setCookie('preferredLanguage' , 'en-US' , 365 );
    setLocalStorageValue('preferredLanguage' , 'en-US');
});

roRORadio.addEventListener('change', function(){
    setCookie('preferredLanguage' , 'ro-RO' , 365 );
    setLocalStorageValue('preferredLanguage' , 'ro-RO');
});
}

handleLanguageSelection();