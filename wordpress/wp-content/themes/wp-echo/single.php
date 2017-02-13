<?php get_header(); ?>

  <main class="main vx-article">

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

    <ul class="cx-categories">
      <?php wp_list_categories( array(
      'orderby' => 'name',
      'use_desc_for_title' => false,
      'depth' => 1,
      ) ); ?>
    </ul>

    <div class="cx-banner">
      <div class="cx-banner__background" style="background-image: url(https://storage.googleapis.com/echo-site.appspot.com/images/blog/_900xAUTO_crop_center-center_60/Shutterstock-Original-3_cropped.jpg);"></div>
      <div class="cx-banner__inner anim-block-list in">
        <p class="type-heading"><?php the_category(', '); ?></p>
        <h1 class="type-headline light"><?php the_title(); ?></h1>
        <p class="type-body-s light"><published><?php the_time('d F Y'); ?></published> by <?php the_author(); ?></p>
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
