<?php 
    $host = "xxxx";
    $user = "xxxx";
    $password = "xxxx";
    $database = "xxxx";
    $server = mysql_connect($host, $user, $password);
    $connection = mysql_select_db($database, $server);

    function sql_quote($value) {
        $value = str_replace('<?','',$value);
        $value = str_replace('script','',$value);   
        if (get_magic_quotes_gpc()) {
            $value = stripslashes($value);
        }
        if (!is_numeric($value)) {
            $value = "'" . mysql_real_escape_string($value) . "'";
        } else {
            if ((string)$value[0] == '0') {
                $value = "'" . mysql_real_escape_string($value) . "'";
        }}
        return $value;
    }
    $q = "INSERT INTO newsletter_emails (email,category) VALUES (".sql_quote($_POST['email']).",'1')";

    mysql_query($q);

?>