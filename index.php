<?php require('includes/config.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>tepia</title>
  <link rel="stylesheet" href="styles/style.css">
</head>
<body>
  <div id="content">
    <?php
      try {

        $stmt = $db->query('SELECT id, title, content, description, date FROM blog_posts ORDER BY id DESC LIMIT 1');
        $titlePost = $stmt->fetch();
        echo '<h1 class="post-header">';
          echo '<span class="post-title"><a href="veiwpost.php?id='.$titlePost['id'].'">'.$titlePost['title'].'</a></span>';
        echo '</h1>';
        echo '<p>'.$titlePost['content'].'</p>';

      } catch (PDOException $e) {
        echo $e->getMessage();
      }
    ?>
  </div>
</body>
