<?php get_header(); ?>

  <main class="main vx-category">

    <div class="cx-intro">
      <div class="ui-intro anim-block-list in">
        <h2 class="type-headline"><?php echo sprintf( __( '%s Search Results for ', 'wpeasy' ), $wp_query->found_posts ); echo get_search_query(); ?></h2>
      </div>
    </div>

    <div class="cx-posts">
      <?php get_template_part('loop'); ?>
    </div>

    <?php get_template_part('pagination'); ?>

<?php get_footer(); ?>
