<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ali Traders & Commission Shop</title>

    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>

<header>

<div class="logo">
<h2>🌾 Ali Traders</h2>
<p>Commission Shop</p>
</div>

<nav>

<ul>

<li><a href="index.html">Home</a></li>

<li><a href="about.html">About</a></li>

<li><a href="products.html">Products</a></li>

<li><a href="gallery.html">Gallery</a></li>

<li><a href="contact.html">Contact</a></li>

</ul>

</nav>

</header>


<section class="hero">

<div class="hero-text">

<h1>Ali Traders & Commission Shop</h1>

<h3>زرعی کھاد، زرعی ادویات اور بیج</h3>

<p>

We provide high quality Fertilizers, Pesticides,
Seeds and Agricultural Solutions for Farmers.

</p>

<a href="contact.html" class="btn">

Contact Us

</a>

</div>


<div class="hero-image">

<img src="images/shop.jpg" alt="Ali Traders">

</div>

</section>



<section class="services">

<h2>Our Products</h2>

<div class="cards">

<div class="card">

<h3>🌾 Fertilizers</h3>

<p>

DAP, Urea, NPK and all types of Fertilizers.

</p>

</div>


<div class="card">

<h3>🧪 Pesticides</h3>

<p>

Quality crop protection products.

</p>

</div>


<div class="card">

<h3>🌱 Seeds</h3>

<p>

Certified seeds for all major crops.

</p>

</div>


<div class="card">

<h3>💧 Micronutrients</h3>

<p>

Plant growth promoters and nutrients.

</p>

</div>

</div>

</section>



<section class="about">

<h2>About Us</h2>

<p>

Ali Traders & Commission Shop
is committed to supplying genuine agricultural products.

ہم کسانوں کو معیاری کھاد،
زرعی ادویات،
بیج اور بہترین مشورہ فراہم کرتے ہیں۔

</p>

</section>



<section class="contact">

<h2>Contact Information</h2>

<p>

<b>Owner:</b> Zaman Maqsood

</p>

<p>

📞 +92 324 7791453

</p>

<p>

📧 zamanmaqsood453@gmail.com

</p>

<a class="whatsapp"

href="https://wa.me/923247791453"

target="_blank">

WhatsApp Now

</a>

</section>



<footer>

<p>

© 2026 Ali Traders & Commission Shop

</p>

</footer>

<script src="script.js"></script>

</body>

</html>

/* ==========================
   Ali Traders & Commission Shop
   style.css
========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Poppins',sans-serif;
    background:#f8fff5;
    color:#333;
    line-height:1.6;
}

/* Header */

header{
    background:#0b6b2d;
    color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 8%;
    position:sticky;
    top:0;
    z-index:1000;
}

.logo h2{
    color:#ffd700;
}

.logo p{
    font-size:14px;
}

nav ul{
    display:flex;
    list-style:none;
}

nav ul li{
    margin-left:25px;
}

nav ul li a{
    color:white;
    text-decoration:none;
    font-weight:600;
    transition:.3s;
}

nav ul li a:hover{
    color:#ffd700;
}

/* Hero */

.hero{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:60px 8%;
    flex-wrap:wrap;
}

.hero-text{
    flex:1;
}

.hero-text h1{
    font-size:45px;
    color:#0b6b2d;
}

.hero-text h3{
    margin:20px 0;
    color:#b8860b;
}

.hero-text p{
    margin-bottom:25px;
}

.btn{
    display:inline-block;
    background:#0b6b2d;
    color:white;
    padding:12px 25px;
    border-radius:6px;
    text-decoration:none;
    transition:.3s;
}

.btn:hover{
    background:#ffd700;
    color:black;
}

.hero-image{
    flex:1;
    text-align:center;
}

.hero-image img{
    width:100%;
    max-width:500px;
    border-radius:15px;
    box-shadow:0 8px 20px rgba(0,0,0,.2);
}

/* Products */

.services{
    padding:60px 8%;
    text-align:center;
}

.services h2{
    color:#0b6b2d;
    margin-bottom:40px;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.card{
    background:white;
    padding:25px;
    border-radius:12px;
    box-shadow:0 4px 12px rgba(0,0,0,.1);
    transition:.3s;
}

.card:hover{
    transform:translateY(-8px);
}

.card h3{
    color:#0b6b2d;
    margin-bottom:15px;
}

/* About */

.about{
    padding:60px 8%;
    text-align:center;
    background:#eef8ea;
}

.about h2{
    color:#0b6b2d;
    margin-bottom:20px;
}

/* Contact */

.contact{
    padding:60px 8%;
    text-align:center;
}

.contact h2{
    color:#0b6b2d;
    margin-bottom:20px;
}

.whatsapp{
    display:inline-block;
    margin-top:20px;
    background:#25D366;
    color:white;
    text-decoration:none;
    padding:12px 25px;
    border-radius:6px;
    font-weight:bold;
}

/* Footer */

footer{
    background:#0b6b2d;
    color:white;
    text-align:center;
    padding:20px;
}

/* Responsive */

@media(max-width:768px){

header{
flex-direction:column;
}

nav ul{
margin-top:15px;
flex-wrap:wrap;
justify-content:center;
}

.hero{
flex-direction:column;
text-align:center;
}

.hero-text h1{
font-size:32px;
}

.hero-image{
margin-top:30px;
}

}
