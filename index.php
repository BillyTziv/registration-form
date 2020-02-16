<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="./style.css" />
        <title> Authentication </title>

        <?php
            $active_labels = false;
        ?>
    </head>

    <boby>
        <script src="app.js"></script>

        <form action="auth.php" method="POST">               

            <div class="form_inner">
                <div id="subscribeTitle">
                    <i class="fa fa-user-circle" aria-hidden="true"></i><br />
                    Create your account
                </div>
               
                <?php if ($active_labels) { echo "<label for='_username'> _e('Username:', 'lostark'); </label>"; } ?>
                <div class="col-md-12 fieldBox">
                    <i class="fa fa-user icon fa-lg" aria-hidden="true"></i>
                    <input id="_username" name="username" type="text" placeholder="Type a unique username..." onkeyup="searchForUsers(event)">
                </div>

                <?php if ($active_labels) { echo "<label for='_firstname'> _e('First Name:', 'lostark'); </label>"; } ?>
                <div class="col-md-12 fieldBox">
                    <i class="fa fa-address-card icon fa-sm" aria-hidden="true"></i>
                    <input id="_firstname" name="firstname" placeholder="Type your first name..." type="text">
                </div>

                <?php if ($active_labels) { echo "<label for='_lastname'> _e('Last Name:', 'lostark'); </label>"; } ?>
                <div class="col-md-12 fieldBox">
                    <i class="fa fa-address-card icon fa-sm" aria-hidden="true"></i>
                    <input id="_lastname" name="lastname" placeholder="Type your last name..." type="text">
                </div>

                <?php if ($active_labels) { echo "<label for='_password'> _e('Password:', 'lostark'); </label>"; } ?>
                <div class="col-md-12 fieldBox">
                    <i id="_password_lock_icon" class="fa fa-lock icon fa-lg" aria-hidden="true"></i>
                    <input id="_password" name="password" placeholder="Type a strong password..." type="password" onblur="hideRow()" onfocus="displayRow()" onkeyup="isPasswordStrong()">
                    <span id="reg_pwd_icon" onclick="togglePwdVisibility()"><i class="fa fa-eye fa-lg" aria-hidden="true"></i></span>
                </div>
                <div id="pwd_expand_row" >
                    <div id="reg_progress_bar"> <div id="pwd_prog_bar"></div> </div>
                    <span id="reg_progress_text"></span>
                    
                    <ul>
                        <li id="_special_symbol">At least one special symbol</li>
                        <li id="_lower_case">At least one lower case char</li>
                        <li id="_upper_case">At least one upper case char</li>
                        <li id="_number">At least one number 0 to 9</li>
                        <li id="_min_length">Minimum length is 9 char</li>
                    </ul>
                </div>

                <?php if ($active_labels) { echo "<label for='_email'> _e('Email:', 'lostark'); </label>"; } ?>
                <div class="col-md-12 fieldBox">
                    <i class="fa fa-envelope icon fa-sm" aria-hidden="true"></i>
                    <input id="_email" name="email" placeholder="Type your email..." type="text">
                </div>
               
                <div class="col-md-12 terms_of_service ">
                    <input class="regular-checkbox" name="email" type="checkbox">
                    <span id="terms_of_service_text">I accept the <a target="_blank" href="#">Terms of Service</a></span> 
                </div>

                <div class="col-md-12 submitButton">
                    <input type="submit" value="Register">
                </div>
            </div>
        </form>
    </boby>
</html>