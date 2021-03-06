<!DOCTYPE html>
<html lang="en">
<head><!-- Head begins here -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Icon files -->
  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="<?php echo get_stylesheet_directory_uri(); ?>/icon.png">
  <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
  <meta property="og:image" content="<?php echo get_stylesheet_directory_uri(); ?>/tile-wide.jpg">

  <meta name="description" content="">
  <meta name="author" content="">

  <title>AdvDentalTemps <?php wp_title('| '); ?></title>

  <!-- Bootstrap core CSS -->
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="<?php echo get_bloginfo('template_directory'); ?>/css/navigation.css" rel="stylesheet">
  <link href="<?php echo get_bloginfo('template_directory'); ?>/css/styles.css" rel="stylesheet">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,900|Raleway:100,400,900" rel="stylesheet">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <?php wp_head();?>

</head><!-- Head ends here. -->

<body><!-- Body begins here. -->

  <div class="preload">
    <img class="loader" src="<?php echo get_bloginfo('template_directory'); ?>/img/loader.gif">
  </div>

  <div id="tooshort">
    <h1>Stop squishing me!</h1>
    <p>Your screen is too short! Resize your browser window to properly view the site.</p>
  </div>

  <div id="toonarrow">
    <h1>Whoa, whoa, whoa!</h1>
    <p>Your screen is too narrow! Resize your browser window to properly view the site.</p>
  </div>

  <div class="content">

  <nav class="col-xs-12">
    <div id="nav-container">
      <a href="">
        <div id="nav-logo">
          <img src="<?php echo get_template_directory_uri(); ?>/img/advdental-logo.png" alt="Advanced Dental Associates, Inc. logo.">
          <h1>Advanced Dental<br> Associates, Inc.</h1>
        </div>
      </a>
      <div id="nav-open">
        <span>Menu</span>
      </div>
    </div>
  </nav>

  <div id="nav-menu" class="col-xs-12">
    <div id="nav-close">
      <span>Close</span>
    </div>
    <div id="nav-list">
      <ul>
        <li><a href="#intro">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#info">Info</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
