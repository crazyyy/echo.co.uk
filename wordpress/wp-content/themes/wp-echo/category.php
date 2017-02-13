<?php get_header(); ?>

  <main class="main vx-category">
    <ul class="cx-categories">
      <?php wp_list_categories( array(
      'orderby' => 'name',
      'use_desc_for_title' => false,
      'depth' => 1,
      ) ); ?>
    </ul>

    <div class="cx-intro">
      <div class="ui-intro anim-block-list in">
        <h2 class="type-headline"><?php the_category(', '); ?></h2>
      </div>
    </div>

    <div class="cx-posts">
      <?php get_template_part('loop'); ?>
    </div>

    <?php get_template_part('pagination'); ?>

<?php get_footer(); ?>
