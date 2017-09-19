<!DOCTYPE html>
<html <?php echo language_attributes();?> >
<head>
    <?php wp_head(); ?>
</head>

<body <?php body_class(mk_get_body_class(global_get_post_id())); ?> <?php echo get_schema_markup('body'); ?> data-adminbar="<?php echo is_admin_bar_showing() ?>">

	<?php
		// Hook when you need to add content right after body opening tag. to be used in child themes or customisations.
		do_action('theme_after_body_tag_start');
	?>
	
	<div class="preloader-wrapper">
      <div class="preloader">
          <div class="preloader-top">
            <div class="preloader-top-sun">
              <div class="preloader-top-sun-bg"></div>
              <div class="preloader-top-sun-line preloader-top-sun-line-0"></div>
              <div class="preloader-top-sun-line preloader-top-sun-line-45"></div>
              <div class="preloader-top-sun-line preloader-top-sun-line-90"></div>
              <div class="preloader-top-sun-line preloader-top-sun-line-135"></div>
              <div class="preloader-top-sun-line preloader-top-sun-line-180"></div>
              <div class="preloader-top-sun-line preloader-top-sun-line-225"></div>
              <div class="preloader-top-sun-line preloader-top-sun-line-270"></div>
              <div class="preloader-top-sun-line preloader-top-sun-line-315"></div>
            </div>
          </div>
        </div>
    </div>
  



	<!-- Target for scroll anchors to achieve native browser bahaviour + possible enhancements like smooth scrolling -->
	<div id="top-of-page"></div>

		<div id="mk-boxed-layout">

			<div id="mk-theme-container" <?php echo is_header_transparent('class="trans-header"'); ?>>

				<?php mk_get_header_view('styles', 'header-'.get_header_style());