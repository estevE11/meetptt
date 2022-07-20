/*
document.addEventListener('keyup', function (e) { 
    console.log("key");
    if (e == 32) {
        console.log("space");
        e.preventDefault();
        const el = document.querySelector('[jsname="BOHaEe"]');
        el.click();
    }

});
*/
window.addEventListener('load', function () { 
    
});

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32) {        
        e.preventDefault();
        const el = document.querySelector('[jsname="BOHaEe"]');
        el.click();
    }
})

window.addEventListener('keyup', function (e) {
    if (e.keyCode == 32) {
        e.preventDefault();
    }
    console.log(key.key)
    let keyvalue = key.key
    chrome.runtime.sendMessage(null, keyvalue, (response) => {
        console.log("Sent key value" + response)
    })
})
