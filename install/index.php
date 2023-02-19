<?php

use App\Http\Controllers\Admin\UpdateController;

require '../../vendor/autoload.php';
$api = new UpdateController;
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Bicrypto - Installer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.2/css/bulma.min.css"
        crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        crossorigin="anonymous" />
    <style type="text/css">
    body,
    html {
        background: #F4F5F7;
    }
    </style>
</head>

<body>
    <?php
    $errors = false;
    $step = isset($_GET['step']) ? $_GET['step'] : '';
    ?>
    <div class="container" style="padding-top: 20px;">
        <div class="section">
            <div class="columns is-centered">
                <div class="column is-two-fifths">
                    <center>
                        <h1 class="title" style="padding-top: 20px">Bicrypto Installer</h1><br>
                    </center>
                    <div class="box">
                        <?php
                        switch ($step) {
                            default: ?>
                        <div class="tabs is-fullwidth">
                            <ul>
                                <li class="is-active">
                                    <a>
                                        <span><b>Requirements</b></span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>Verify</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>Database</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>Finish</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <?php
                                // Add or remove your script's requirements below
                                if (phpversion() > "8.0") {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> You are running PHP version " . phpversion() . "</div>";
                                } else {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> Minimum PHP 5.5 or higher required.</div>";
                                }
                                if (!extension_loaded('mysqli')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> MySQLi PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> MySQLi PHP extension available</div>";
                                }
                                if (!extension_loaded('bcmath')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> BCMath PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> BCMath PHP extension available</div>";
                                }
                                if (!extension_loaded('ctype')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> Ctype PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> Ctype PHP extension available</div>";
                                }
                                if (!extension_loaded('fileinfo')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> Fileinfo PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> Fileinfo PHP extension available</div>";
                                }
                                if (!extension_loaded('json')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> JSON PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> JSON PHP extension available</div>";
                                }
                                if (!extension_loaded('mbstring')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> Mbstring PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> Mbstring PHP extension available</div>";
                                }
                                if (!extension_loaded('openSSL')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> OpenSSL PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> OpenSSL PHP extension available</div>";
                                }
                                if (!extension_loaded('pdo')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> PDO PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> PDO PHP extension available</div>";
                                }
                                if (!extension_loaded('pdo_mysql')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> PDO_MYSQL PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> PDO_MYSQL PHP extension available</div>";
                                }
                                if (!extension_loaded('tokenizer')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> Tokenizer PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> Tokenizer PHP extension available</div>";
                                }
                                if (!extension_loaded('xml')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> XML PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> XML PHP extension available</div>";
                                }
                                if (!extension_loaded('curl')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> CURL PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> CURL PHP extension available</div>";
                                }
                                if (!extension_loaded('gd')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> GD PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> GD PHP extension available</div>";
                                }
                                if (!extension_loaded('gmp')) {
                                    $errors = true;
                                    echo "<div class='notification is-danger is-light' style='padding:12px;'><i class='fa fa-times'></i> GMP PHP extension missing!</div>";
                                } else {
                                    echo "<div class='notification is-success is-light' style='padding:12px;'><i class='fa fa-check'></i> GMP PHP extension available</div>";
                                } ?>
                        <div style='text-align: right;'>
                            <?php if ($errors == true) { ?>
                            <a href="#" class="button is-link is-rounded" disabled>Next</a>
                            <?php } else { ?>
                            <a href="index.php?step=0" class="button is-link is-rounded">Next</a>
                            <?php } ?>
                        </div><?php
                                        break;
                                    case "0": ?>
                        <div class="tabs is-fullwidth">
                            <ul>
                                <li>
                                    <a>
                                        <span><i class="fa fa-check-circle"></i> Requirements</span>
                                    </a>
                                </li>
                                <li class="is-active">
                                    <a>
                                        <span><b>Verify</b></span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>Database</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>Finish</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <?php
                                        $license_code = null;
                                        $client_name = null;
                                        if (!empty($_POST['license']) && !empty($_POST['client'])) {
                                            $license_code = strip_tags(trim($_POST["license"]));
                                            $client_name = strip_tags(trim($_POST["client"]));
                                            $activate_response = $api->activate_license($license_code, $client_name);
                                            if (empty($activate_response)) {
                                                $msg = 'Server is unavailable.';
                                            } else {
                                                $msg = $activate_response['message'];
                                            }
                                            if ($activate_response['status'] != true) { ?>
                        <form action="index.php?step=0" method="POST">
                            <div class="notification is-danger is-light"><?php echo ucfirst($msg); ?></div>
                            <div class="field">
                                <label class="label">License code</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Enter your purchase/license code"
                                        name="license" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Your name</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Enter your name/envato username"
                                        name="client" required>
                                </div>
                            </div>
                            <div style='text-align: right;'>
                                <button type="submit" class="button is-link is-rounded">Verify</button>
                            </div>
                        </form><?php
                                            } else { ?>
                        <form action="index.php?step=1" method="POST">
                            <div class="notification is-success is-light"><?php echo ucfirst($msg); ?></div>
                            <input type="hidden" name="lcscs" id="lcscs"
                                value="<?php echo ucfirst($activate_response['status']); ?>">
                            <div style='text-align: right;'>
                                <button type="submit" class="button is-link">Next</button>
                            </div>
                        </form><?php
                                            }
                                        } else { ?>
                        <form action="index.php?step=0" method="POST">
                            <div class="field">
                                <label class="label">License code</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Enter your purchase/license code"
                                        name="license" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Your name</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="Enter your name/envato username"
                                        name="client" required>
                                </div>
                            </div>
                            <div style='text-align: right;'>
                                <button type="submit" class="button is-link is-rounded">Verify</button>
                            </div>
                        </form>
                        <?php }
                                        break;
                                    case "1": ?>
                        <div class="tabs is-fullwidth">
                            <ul>
                                <li>
                                    <a>
                                        <span><i class="fa fa-check-circle"></i> Requirements</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span><i class="fa fa-check-circle"></i> Verify</span>
                                    </a>
                                </li>
                                <li class="is-active">
                                    <a>
                                        <span><b>Database</b></span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>Finish</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <?php
                                        if ($_POST && isset($_POST["lcscs"])) {
                                            $valid = strip_tags(trim($_POST["lcscs"]));
                                            $db_host = strip_tags(trim($_POST["host"]));
                                            $db_user = strip_tags(trim($_POST["user"]));
                                            $db_pass = strip_tags(trim($_POST["pass"]));
                                            $db_name = strip_tags(trim($_POST["name"]));
                                            $site_url = strip_tags(trim($_POST["site_url"]));
                                            if (!empty($db_host)) {
                                                $con = @mysqli_connect($db_host, $db_user, $db_pass, $db_name);
                                                if (mysqli_connect_errno()) { ?>
                        <form action="index.php?step=1" method="POST">
                            <div class='notification is-danger is-light'>Failed to connect to MySQL:
                                <?php echo mysqli_connect_error(); ?></div>
                            <input type="hidden" name="lcscs" id="lcscs" value="<?php echo $valid; ?>">
                            <div class="field">
                                <label class="label">Site URL</label>
                                <div class="control">
                                    <input class="input" type="text" id="site_url" placeholder="enter your site url"
                                        name="site_url" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Database Host</label>
                                <div class="control">
                                    <input class="input" type="text" id="host" placeholder="enter your database host"
                                        name="host" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Database Username</label>
                                <div class="control">
                                    <input class="input" type="text" id="user"
                                        placeholder="enter your database username" name="user" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Database Password</label>
                                <div class="control">
                                    <input class="input" type="text" id="pass"
                                        placeholder="enter your database password" name="pass">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Database Name</label>
                                <div class="control">
                                    <input class="input" type="text" id="name" placeholder="enter your database name"
                                        name="name" required>
                                </div>
                            </div>
                            <div style='text-align: right;'>
                                <button type="submit" class="button is-link is-rounded">Connect</button>
                            </div>
                        </form><?php
                                                    exit;
                                                }
                                                $env  = "APP_NAME=Laravel\n" . "APP_ENV=local\n" . "APP_KEY=\n" . "APP_DEBUG=false\n" . "APP_URL=" . $site_url . "\n\n" . "LOG_CHANNEL=stack\n" . "LOG_LEVEL=debug\n\n" . "DB_CONNECTION=mysql\n" . "DB_HOST=" . $db_host . "\n" . "DB_PORT=3306\n" . "DB_DATABASE=" . $db_name . "\n" . "DB_USERNAME=" . $db_user . "\n" . "DB_PASSWORD=" . $db_pass . "\n\n" . "BROADCAST_DRIVER=log\n" . "CACHE_DRIVER=array\n" . "QUEUE_CONNECTION=sync\n" . "SESSION_DRIVER=database\n" . "SESSION_LIFETIME=120\n\n" . "MEMCACHED_HOST=127.0.0.1\n\n" . "REDIS_HOST=127.0.0.1\n" . "REDIS_PASSWORD=null\n" . "REDIS_PORT=6379\n\n" . "MAIL_MAILER=smtp\n" . "MAIL_HOST=smtp.gmail.com\n" . "MAIL_PORT=465\n" . "MAIL_USERNAME=null\n" . "MAIL_PASSWORD=null\n" . "MAIL_ENCRYPTION=ssl\n" . "MAIL_FROM_ADDRESS=null\n" . "MAIL_FROM_NAME='${APP_NAME}'\n\n" . "AWS_ACCESS_KEY_ID=\n" . "AWS_SECRET_ACCESS_KEY=\n" . "AWS_DEFAULT_REGION=us-east-1\n" . "AWS_BUCKET=\n\n" . "PUSHER_APP_ID=\n" . "PUSHER_APP_KEY=\n" . "PUSHER_APP_SECRET=\n" . "PUSHER_APP_CLUSTER=mt1\n\n" . "MIX_PUSHER_APP_KEY='${PUSHER_APP_KEY}'\n" . "MIX_PUSHER_APP_CLUSTER='${PUSHER_APP_CLUSTER}'";
                                                $fp = fopen($_SERVER['DOCUMENT_ROOT'] . "/.env", "wb");
                                                fwrite($fp, $env);
                                                fclose($fp); ?>
                        <form action="index.php?step=2" method="POST">
                            <div class='notification is-success is-light'>Database was successfully connected.</div>
                            <input type="hidden" name="dbscs" id="dbscs" value="true">
                            <div style='text-align: right;'>
                                <button type="submit" class="button is-link">Next</button>
                            </div>
                        </form><?php
                                            } else { ?>
                        <form action="index.php?step=1" method="POST">
                            <input type="hidden" name="lcscs" id="lcscs" value="<?php echo $valid; ?>">
                            <div class="field">
                                <label class="label">Site URL</label>
                                <div class="control">
                                    <input class="input" type="text" id="site_url" placeholder="enter your site url"
                                        name="site_url" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Database Host</label>
                                <div class="control">
                                    <input class="input" type="text" id="host" placeholder="enter your database host"
                                        name="host" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Database Username</label>
                                <div class="control">
                                    <input class="input" type="text" id="user"
                                        placeholder="enter your database username" name="user" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Database Password</label>
                                <div class="control">
                                    <input class="input" type="text" id="pass"
                                        placeholder="enter your database password" name="pass">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Database Name</label>
                                <div class="control">
                                    <input class="input" type="text" id="name" placeholder="enter your database name"
                                        name="name" required>
                                </div>
                            </div>
                            <div style='text-align: right;'>
                                <button type="submit" class="button is-link is-rounded">Connect</button>
                            </div>
                        </form><?php
                                            }
                                        } else { ?>
                        <div class='notification is-danger is-light'>Sorry, something went wrong.</div>
                        <?php
                                        }
                                        break;
                                    case "2": ?>
                        <div class="tabs is-fullwidth">
                            <ul>
                                <li>
                                    <a>
                                        <span><i class="fa fa-check-circle"></i> Requirements</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span><i class="fa fa-check-circle"></i> Verify</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span><i class="fa fa-check-circle"></i> Database</span>
                                    </a>
                                </li>
                                <li class="is-active">
                                    <a>
                                        <span><b>Finish</b></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <?php
                                        if ($_POST && isset($_POST["dbscs"])) {
                                            $valid = $_POST["dbscs"];
                                ?>
                        <center>
                            <p><strong>License is successfully verified.</strong></p><br>
                            <div>now you can start the stage 2 of installation by clicking the link below</div><br>
                            <a href="./step2.php"><button class="button is-link is-rounded">Step 2</button></a>
                        </center>
                        <?php
                                        } else { ?>
                        <div class='notification is-danger is-light'>Sorry, something went wrong.</div><?php
                                                                                                                }
                                                                                                                break;
                                                                                                        } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content has-text-centered">
        <p>Copyright <?php echo date('Y'); ?> Mashdiv, All rights reserved.</p><br>
    </div>
</body>

</html>