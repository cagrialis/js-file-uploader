function showFileSize() {
    var input, file;

    if (!window.FileReader) {
        bodyAppend("p", "The file API isn't supported on this browser yet.");
        return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
        bodyAppend("p", "Couldn't find the fileinput element.");
    }
    else if (!input.files) {
        bodyAppend("p", "This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
        bodyAppend("p", "Please select a file before clicking 'Load'");
    }
    else {
        file = input.files[0];
        bodyAppend("p", "File Name: " + file.name);
        bodyAppend("p", "File Size: " + file.size);
        bodyAppend("p", "File Type: " + file.type);
    }
}

function bodyAppend(tagName, innerHTML) {
    var elm;

    elm = document.createElement(tagName);
    elm.innerHTML = innerHTML;
    document.body.appendChild(elm);
}