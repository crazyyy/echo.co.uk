<?php if (have_posts()): while (have_posts()) : the_post(); ?>

  <a href="<?php the_permalink(); ?>" class="cx-posts__post anim-block anim-block-1 in">
    <div class="cx-posts__post__thumbnail">
      <?php if ( has_post_thumbnail()) :
        the_post_thumbnail('medium');
      else: ?>
        <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
      <?php endif; ?>
    </div>
    <h3 class="type-headline-s cx-posts__post__headline"><?php the_title(); ?></h3>
    <p class="type-body-s cx-posts__post__date"><?php the_time('j F Y'); ?></p>
    <p class="type-body cx-posts__post__summary"><?php wpeExcerpt('wpeExcerpt10'); ?></p>
    <p class="type-body-s alt cx-posts__post__more">Read More
      <svg width="10" height="7" viewBox="0 0 10 7" xmlns="http://www.w3.org/2000/svg"><path d="M8.982 3.625l.447.446.588-.588L6.482-.053l-.59.59L8.34 2.98H.98v1H8.34L5.892 6.43l.59.588 3.535-3.536-.59-.59-.446.447v.285z" fill-rule="evenodd"></path></svg>
    </p>
  </a>
  <?php endwhile; else: ?>
  <div class="cx-posts__post anim-block anim-block-1 in">
    <h2 class="title"><?php _e( 'Sorry, nothing to display.', 'wpeasy' ); ?></h2>
  </div><!-- /article -->

<?php endif; ?>
