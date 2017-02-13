<?php get_header(); ?>

  <main class="main vx-article">

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

    <div class="cx-banner">
      <div class="cx-banner__background" style="background-image: url(https://storage.googleapis.com/echo-site.appspot.com/images/blog/_900xAUTO_crop_center-center_60/Shutterstock-Original-3_cropped.jpg);"></div>
      <div class="cx-banner__inner anim-block-list in">
        <h1 class="type-headline light"><?php the_title(); ?></h1>
      </div>
    </div>

    <div class="ui-body">
      <?php the_content(); ?>
    </div>

  <?php endwhile; else: ?>

    <div class="ui-body">
      <h2 class="page-title inner-title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>
    </div>

  <?php endif; ?>

<?php get_footer(); ?>
