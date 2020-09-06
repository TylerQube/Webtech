// Load image preview if file selected on page load
if(document.querySelector('#img-select').files[0]) {
    imgPreview(document.querySelector('#img-select'));
}

function imgPreview(input) {
    if (input.files && input.files[0]) {
        // Used js FileReader docs to create this part
        var fileReader = new FileReader();
        fileReader.onload =  (e) => {
            // Preview image
            document.querySelector('#img-preview').src = e.target.result;
            // Show element
            document.querySelector('#img-preview').style.display = 'block';
        }

        fileReader.readAsDataURL(input.files[0]);
    }
}