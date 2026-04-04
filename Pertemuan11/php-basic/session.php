<?php
session_start();

// Menyimpan session
$_SESSION["nama"] = "Alan";

// Mengambil session
echo "Nama dari session: " . $_SESSION["nama"];
?>