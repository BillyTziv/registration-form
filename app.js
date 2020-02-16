// Drop your JS code here

$( document ).ready(function() {
    const logo = document.querySelectorAll("#logo path");

    //console.log(logo);

    for(let i=0; i<logo.length; i++) {
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    }

});


$(window).on("load", function() {
    window.setTimeout(function(){
        //$('.form_inner').addClass("visible");
    }, 2000); //<-- Delay in milliseconds
    
 });


$( document ).ready(function() {
    $('#pwd_expand_row').hide();

});

function displayRow() {
    $('#pwd_expand_row').show('fast');
}

function hideRow() {
    $('#pwd_expand_row').hide('fast');

}
// Change the visibility of the password field
function togglePwdVisibility() {
    // Get the current field status
    var pwdStatus = document.getElementById('_password').type;

    // Toggle the visiblity
    if(pwdStatus == 'password') {
        document.getElementById('_password').type = 'text';
        $('#reg_pwd_icon i').removeClass("fa-eye");
        $('#reg_pwd_icon i').addClass("fa-eye-slash");
    }else {
        document.getElementById('_password').type = 'password';
        $('#reg_pwd_icon i').addClass("fa-eye");
        $('#reg_pwd_icon i').removeClass("fa-eye-slash");
    }
}

// At each pwd character inserted, check and verify how strong it is by updaing a progress bar
// located under the passowrd field.
function isPasswordStrong() {
    var strong = 0;     // Indicates how strong the password is
    var pwd = '';       // The current password value
    var speicalCharList = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;


        // Get the current password value
        pwd = $('#_password').val();
        //console.log(pwd);

        // Check for the total length
        if(pwd.length > 9) {
            strong++;
            $('#_min_length').css('color', '#18ff00');

            //console.log("Length is over 8 characters...");
        }

        // Check for numbers
        if(pwd.match(/\d+/g)) {
            strong++;
            
            $('#_number').css('color', '#18ff00');
            //console.log("Number found...");
        }

        if(pwd.match(/[a-z]/)) {
            strong++;
            //console.log("Lowercase character found...");
            $('#_lower_case').css('color', '#18ff00');
        }

        // Check for uppercase characters
        if(pwd.match(/[A-Z]/)) {
            strong++;
            $('#_upper_case').css('color', '#18ff00');

            //console.log("Uppercase character found...");
        }

        // Check for special characters
        if(speicalCharList.test(pwd)) {
            strong++;
            $('#_special_symbol').css('color', '#18ff00');

            //console.log("Special character found...");
        }
        
        // Update the text below the progress bar
        switch(strong) {
            case 1:
                $('#reg_progress_text').text('Too short');
                $('#reg_progress_text').css('color', '#a3a3a3');
                $('#pwd_prog_bar').css('background', '#a3a3a3');
                $('#_password_lock_icon').css('color', '#a3a3a3');
                break;
            case 2:
                $('#reg_progress_text').text('Weak');
                $('#reg_progress_text').css('color', '#f00');
                $('#pwd_prog_bar').css('background', '#f00');
                $('#_password_lock_icon').css('color', '#f00');
                break;
            case 3:
                $('#reg_progress_text').text('Fair');
                $('#reg_progress_text').css('color', '#ffbf00');
                $('#pwd_prog_bar').css('background', '#ffbf00');
                $('#_password_lock_icon').css('color', '#ffbf00');
                break;
            case 4:
                $('#reg_progress_text').text('Good');
                $('#reg_progress_text').css('color', '#0080ff');
                $('#pwd_prog_bar').css('background', '#0080ff');
                $('#_password_lock_icon').css('color', '#0080ff');
                break;
            case 5:
                $('#reg_progress_text').text('Strong');
                $('#reg_progress_text').css('color', '#18ff00');
                $('#pwd_prog_bar').css('background', '#18ff00');
                $('#_password_lock_icon').css('color', '#18ff00');
                break;
            default:
                $('#reg_progress_text').text('');
                $('#_password_lock_icon').css('color', 'white');
                $('#reg_progress_text').css('color', '#0080ff');
                $('#_lower_case').css('color', 'white');
                $('#_upper_case').css('color', 'white');
                $('#_special_symbol').css('color', 'white');
                $('#_number').css('color', 'white');
                $('#_min_length').css('color', 'white');
                break;
        }

        // Update the progress bar according to the strengh of the password found (sum is 100)
        $('#pwd_prog_bar').width(strong*20 + '%');
        if(pwd.length >= 1) {
            $('#reg_pwd_icon svg').css('padding-top', '6px');
        }else {
            $('#reg_pwd_icon svg').css('padding-top', '25px');
        }
}

function updateUsernameField() {
    var mail = document.getElementById("reg_email").value;
        //console.log("function called: email ::" + mail);
        document.getElementById('reg_username').value = mail;
}