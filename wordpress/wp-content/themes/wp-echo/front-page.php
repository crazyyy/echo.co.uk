<?php /* Template Name: Home Page */ get_header(); ?>


  <main class="main vx-home full-height">
    <div class="vx-home__inner">
      <div class="vx-home__slides">
        <div class="cx-circles">
          <div class="cx-circles__inner">
            <div class="cx-circles__circle cx-circles__circle--teal cx-circles__circle--3"></div>
            <div class="cx-circles__circle cx-circles__circle--teal cx-circles__circle--1"></div>
            <div class="cx-circles__circle cx-circles__circle--grey cx-circles__circle--2"></div>
            <div class="cx-circles__circle cx-circles__circle--teal cx-circles__circle--4"></div>
          </div>
        </div>
        <section class="cx-hero cx-section">
          <div class="cx-hero__inner cx-section-content show">
            <div class="cx-hero__content anim-block">
              <h1 class="cx-hero__content__headline type-headline dark">Take control of your NHS repeat prescriptions</h1>
              <p class="cx-hero__content__body type-body dark">Echo is our simple, free service that delivers your medicine to your door. We’ll even remind you when and how to take it.</p>
              <button class="ui-button ui-button--solid cx-hero__content__cta">
                Get the App
                <span>
                  <svg width="19" height="24" viewbox="0 0 19 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.87 12.763c-.027-3.032 2.415-4.507 2.527-4.576-1.383-2.072-3.527-2.355-4.28-2.378-1.8-.196-3.548 1.106-4.465 1.106-.936 0-2.348-1.088-3.87-1.056-1.96.03-3.792 1.197-4.797 3.007-2.074 3.69-.527 9.114 1.46 12.097C3.44 22.426 4.6 24.056 6.12 24c1.49-.064 2.044-.976 3.84-.976 1.778 0 2.3.975 3.85.937 1.597-.024 2.602-1.466 3.562-2.94 1.148-1.673 1.61-3.324 1.628-3.41-.037-.01-3.1-1.213-3.13-4.847zm-2.93-8.916c.8-1.03 1.348-2.427 1.196-3.847-1.158.053-2.607.823-3.44 1.83-.738.885-1.397 2.338-1.227 3.703 1.3.1 2.635-.674 3.47-1.686z" fill-rule="evenodd"/></svg>
                  </span>
              </button>
              <a href="https://itunes.apple.com/gb/app/echo-healthcare/id1031922175" class="cx-hero__content__store cx-hero__content__store--apple">
                <img src="<?php echo get_template_directory_uri(); ?>/img/Echo-NHS-Prescription-Appstore.png" width="174" height="52" >
              </a>
              <div class="cx-hero__content__store cx-hero__content__store--google cx-hero__content__store--inactive">
                <span class="type-heading grey">iOS only<br>Android Coming soon</span>
                <img src="<?php echo get_template_directory_uri(); ?>/img/Echo-NHS-Prescription-Playstore.png" width="178" height="53" >
              </div>
              <div class="cx-hero__content__nhs">
                <img src="<?php echo get_template_directory_uri(); ?>/img/nhs-left-aligned.png" width="166" height="21" >
              </div>
              <ul class="cx-hero__content__press">
                <li class="cx-hero__content__press__item">
                  <a href="http://uk.businessinsider.com/healthcare-startup-echo-launches-prescriptions-localglobe-global-founders-capital-2016-11" target="_blank" style="background-image:url(https://storage.googleapis.com/echo-site.appspot.com/images/press/bi-grey@2x.png); width:170px; height:15px;">Business Insider</a>
                </li>
                <li class="cx-hero__content__press__item">
                  <a href="http://www.wired.co.uk/article/echo-app-nhs-prescriptions-uk" target="_blank" style="background-image:url(https://storage.googleapis.com/echo-site.appspot.com/images/press/wired-grey.png); width:116px; height:24px;">Wired</a>
                </li>
                <li class="cx-hero__content__press__item">
                  <a href="http://www.thetimes.co.uk/edition/business/the-new-way-to-help-the-medicine-go-down-c78rdvzmr" target="_blank" style="background-image:url(https://storage.googleapis.com/echo-site.appspot.com/images/press/the-times-grayscale-small.png); width:125px; height:24px;">The Times</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div class="cx-hero-phone anim-block">
          <div class="cx-hero-phone__inner">
            <div class="cx-phone cx-phone--iphone" style="width:346.5px; height:696.6px; max-width:calc(100vw - 50px);max-height:calc((100vw - 50px) * 2.01038961039)">
              <div class="cx-phone__device" style="background-image:url(https://storage.googleapis.com/echo-site.appspot.com/devices/rose-gold-hero.png); width:346.5px; height:696.6px; max-width:calc(100vw - 50px);max-height:calc((100vw - 50px) * 2.01038961039)">
                <div class="cx-phone__device__screen" style="top:11.4987080103%; left:6.36363636364%; bottom:11.3695090439%; right:6.36363636364%;">
                  <img class="cx-phone__device__screen__content cx-phone__screen__content--image" src="<?php echo get_template_directory_uri(); ?>/img/Echo-NHS-Prescription-Hero-Screen.jpg">
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="cx-step cx-step--1">
          <div class="cx-step__inner">
            <div class="cx-step__content anim-block">
              <h1 class="type-headline cx-step__content__headline">Add your medication</h1>
              <p class="cx-step__content__body type-body">Tell us the medication you need and which NHS GP you’re with. We do the rest.</p>
              <ul class="cx-points">
                <li>
                  <span>
                    <svg width="117" height="91" viewbox="0 0 117 91" xmlns="http://www.w3.org/2000/svg"><path d="M5.052 10.105c0-2.79 2.262-5.053 5.053-5.053h12.63V0h-12.63C4.525 0 0 4.524 0 10.105v12.63h5.052v-12.63zm0 70.732v-12.63H0v12.63c0 5.58 4.524 10.104 10.105 10.104h12.63v-5.05h-12.63c-2.79 0-5.053-2.263-5.053-5.053zm106.098 0c0 2.79-2.262 5.052-5.052 5.052h-12.63v5.05h12.63c5.58 0 10.105-4.523 10.105-10.103v-12.63h-5.053v12.63zM106.098 0h-12.63v5.052h12.63c2.79 0 5.052 2.262 5.052 5.053v12.63h5.053v-12.63c0-5.58-4.525-10.105-10.105-10.105zM5.052 45.47c0 1.395 1.132 2.527 2.526 2.527h101.046c1.395 0 2.526-1.132 2.526-2.526s-1.13-2.526-2.526-2.526H7.578c-1.394 0-2.526 1.132-2.526 2.527zm40.42-30.313h-5.054v22.735h5.053V15.157zm-30.315 0v22.735h5.052V15.157h-5.053zm40.418 0h-5.052v22.735h5.052V15.157zm25.262 0h-5.053v22.735h5.053V15.157zm10.104 0h-5.05v22.735h5.05V15.157zm5.054 0v22.735h5.052V15.157h-5.052zm-60.628 0H25.26v22.735h10.106V15.157zm35.366 0H60.628v22.735h10.104V15.157zM40.418 75.784h5.053V53.05H40.42v22.734zm-20.21 0V53.05h-5.05v22.734h5.05zm30.315 0h5.052V53.05h-5.052v22.734zm25.26 0h5.054V53.05h-5.053v22.734zm10.106 0h5.05V53.05h-5.05v22.734zm15.156 0V53.05h-5.052v22.734h5.052zm-75.785 0h10.106V53.05H25.26v22.734zm35.368 0h10.104V53.05H60.628v22.734z" fill-rule="evenodd"/></svg>
                  </span>
                  <p class="type-body">Scan the barcode</p>
                </li>
                <li>
                  <span>
            <svg width="119" height="116" viewbox="0 0 119 116" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><ellipse id="a" cx="32.519" cy="32.519" rx="32.519" ry="32.519"/><mask id="c" x="-5" y="-5" width="75.038" height="75.038"><path fill="#fff" d="M-5-5h75.038v75.038H-5z"/><use xlink:href="#a"/></mask><path id="b" d="M29 71h5.08v65.038H29z"/><mask id="d" x="-5" y="-5" width="15.081" height="75.038"><path fill="#fff" d="M24 66h15.08v75.038H24z"/><use xlink:href="#b"/></mask></defs><g transform="rotate(45 50.544 93.12)" stroke-width="10" fill="none" fill-rule="evenodd"><use mask="url(#c)" xlink:href="#a"/><use mask="url(#d)" xlink:href="#b"/></g></svg>
          </span>
                  <p class="type-body">Search the database</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div class="cx-step-1-phone anim-block">
          <div class="cx-step-1-phone__inner">
            <div class="cx-phone cx-phone--iphone" style="width:385px; height:774px; max-width:calc(100vw - 50px);max-height:calc((100vw - 50px) * 2.01038961039)">
              <div class="cx-phone__device" style="background-image:url(https://storage.googleapis.com/echo-site.appspot.com/devices/rose-gold-hero.png); width:385px; height:774px; max-width:calc(100vw - 50px);max-height:calc((100vw - 50px) * 2.01038961039)">
                <div class="cx-phone__device__screen" style="top:11.4987080103%; left:6.36363636364%; bottom:11.3695090439%; right:6.36363636364%;">
                  <video class="cx-phone__device__screen__content cx-phone__screen__content--video" playsinline="" muted autoplay>
                    <source src="https://storage.googleapis.com/echo-site.appspot.com/screens/echo-add-levo-3.mp4" type="video/mp4">
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="cx-step cx-step--2">
          <div class="cx-step__inner">
            <div class="cx-step__content anim-block">
              <h1 class="type-headline cx-step__content__headline">It arrives by mail</h1>
              <p class="cx-step__content__body type-body">Once your prescription is approved by your GP, we post it to you via Royal Mail. Free of charge.</p>
              <ul class="cx-points">
                <li>
                  <span>
            <svg width="132" height="132" viewbox="0 0 132 132" xmlns="http://www.w3.org/2000/svg"><path d="M104.796 119.4C93.906 127.324 80.5 132 66 132c-36.45 0-66-29.55-66-66 0-14.5 4.675-27.906 12.6-38.796l3.584 3.583C9.14 40.734 5 52.884 5 66c0 33.69 27.31 61 61 61 13.116 0 25.266-4.14 35.213-11.184l3.583 3.583zM22.752 16.14C34.335 6.087 49.457 0 66 0c36.45 0 66 29.55 66 66 0 16.543-6.087 31.665-16.142 43.248l-3.546-3.546C121.47 95.032 127 81.162 127 66c0-33.69-27.31-61-61-61-15.162 0-29.032 5.532-39.702 14.687l-3.546-3.545zm31.16 52.372l.368 9.298c0 3.902-.465 7.622-1.395 11.16-.93 3.538-2.234 6.474-3.912 8.81h34.205l5.525 5.524h-49.14V97.78h.547c2.554-.546 4.468-2.917 5.745-7.112 1.277-4.194 1.915-8.48 1.915-12.856l-.383-9.63H36.062v-5.58h11.106l-.032-.863 6.775 6.774zm-6.874-28.086c.79-4.666 2.565-8.518 5.327-11.554 3.867-4.25 9.046-6.374 15.538-6.374 6.82 0 11.945 1.887 15.373 5.662 3.43 3.775 5.083 9.164 4.973 15.51h-6.287c0-5.397-1.25-9.346-3.747-11.844-2.5-2.498-5.936-3.748-10.313-3.748-4.56 0-8.16 1.605-10.805 4.815-2.644 3.21-3.967 7.714-3.967 13.513l.006.118-6.098-6.098zm22.174 22.174h9.14v5.58h-3.56l-5.58-5.58zm49.36 63.502c.977.977 2.565.982 3.54.005.984-.984.975-2.562-.005-3.542L8.274 8.735c-.977-.977-2.565-.982-3.54-.005-.984.983-.975 2.56.005 3.54L118.57 126.105z" fill-rule="evenodd"/></svg>
          </span>
                  <p class="type-body">Free delivery</p>
                </li>
                <li>
                  <span>
            <svg width="127" height="110" viewbox="0 0 127 110" xmlns="http://www.w3.org/2000/svg"><path d="M65.538 47.583l57.078-23.212v50.38l1.08-1.8-58.158 31.018V47.583zm-4.076 56.385L31.844 88.172l-28.54-15.22 1.08 1.798V24.37l57.078 23.213v56.385zM63.5 44.01l55.057-22.39-27.414-8.323-54.64 19.734L63.5 44.01zM8.437 21.62L64.094 4.674h-1.19L84.64 11.31 30.856 30.737l-22.42-9.118zm54.104 87.546l.96.512.96-.512 61.154-32.616 1.08-.575V19.83l-1.447-.44L91.68 9.2 64.095.773 63.5.592l-.594.18-61.154 18.62-1.445.44v56.141l1.08.575 28.538 15.22 32.616 17.396z" fill-rule="evenodd"/></svg>
          </span>
                  <p class="type-body">Discreet packaging</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div class="cx-packaging anim-block">
          <div class="cx-packaging__inner">
            <img src="<?php echo get_template_directory_uri(); ?>/img/box-isolated-2.png" sizes="(max-width: 750px) 120vw, (max-width: 1000px) 10vw, 56vw" >
          </div>
        </div>
        <section class="cx-step cx-step--3">
          <div class="cx-step__inner">
            <div class="cx-step__content anim-block">
              <h1 class="type-headline cx-step__content__headline">Stay on top of your condition</h1>
              <p class="cx-step__content__body type-body">We’ll remind you when to take your medicine, when you’re due to reorder and when you need to check in with your GP.</p>
              <ul class="cx-points">
                <li>
                  <span>
            <svg width="101" height="100" viewbox="0 0 101 100" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M50.938 94C27.848 94 9 75.153 9 52.062 9 28.972 27.847 10 50.938 10 74.028 10 93 28.847 93 51.938 93 75.028 74.028 94 50.938 94zm0-79.756c-20.844 0-37.82 16.974-37.82 37.818 0 20.844 17.1 37.694 37.82 37.694s37.818-16.974 37.818-37.818c0-20.844-16.974-37.694-37.818-37.694z"/><path d="M55 56H32v-4.19h18.773V24H55M73 86.042L76.042 83 90 96.958 86.958 100 73 86.042M11 96.958L24.958 83 28 86.042 14.042 100 11 96.958M6.073 28l-1.495-1.487c-6.104-6.07-6.104-15.858 0-21.93C7.568 1.612 11.555 0 15.418 0c3.86 0 8.222 1.61 11.087 4.584L28 6.07 6.073 28zm9.47-23.664c-2.99 0-5.857 1.24-7.975 3.345-3.986 3.966-4.36 10.037-1.245 14.373L22.02 6.443c-1.87-1.487-3.987-2.107-6.478-2.107zM94.857 28L73 6.098l1.482-1.494C77.445 1.618 81.397 0 85.472 0s8.15 1.618 10.99 4.604c6.05 6.098 6.05 15.93 0 22.027L94.857 28zM79.05 6.222l15.807 15.93c3.087-4.356 2.47-10.454-1.235-14.436-2.1-2.116-4.94-3.36-7.903-3.36-2.718-.125-4.817.497-6.67 1.866z"/></g></svg>
          </span>
                  <p class="type-body">Timely reminders</p>
                </li>
                <li>
                  <span>
            <svg width="142" height="95" viewbox="0 0 142 95" xmlns="http://www.w3.org/2000/svg"><path d="M140.01 72.61c-.19-.192-.19-.192-.19-.382 0 0 0-.19-.19-.19-.76-.95-2.093-1.522-5.136-3.044-11.413-5.135-41.467-18.64-45.272-58.396v-.19c-.38-2.283-2.092-3.995-4.184-4.565-2.093-.57-4.375.19-5.707 1.902-5.135 6.467-14.455 13.695-24.156 12.934-7.61-.57-14.267-5.897-19.783-15.79C34.06 2.42 31.397.898 28.354.898c-3.995 0-7.8 2.092-9.89 5.706-1.713 3.424-4.186 7.23-6.66 11.033-2.09 3.424-4.374 6.848-6.086 9.89l-3.994 6.85C.39 36.847.01 39.7.963 42.363c.76 2.663 2.472 4.756 4.754 5.897.95.572 10.462 6.278 54.783 31.767 20.353 11.793 35.95 14.076 56.114 14.076 11.983 0 19.782-3.043 23.206-9.32 2.663-4.566 1.522-9.702.19-12.174zM18.385 50.122c-3.228-1.886-5.42-3.178-7.994-4.705-1.196-.71-1.345-.798-1.62-.96l-.35-.2c.2.11-.366-.236-.366-.236l-.19-.19.707-.707-.514.858c-1.313-.79-2.146-1.8-2.374-3.166-.423-1.23-.234-2.674.496-3.89L8.65 32.55l.502-.884.877.516c4.033 2.373 5.55 3.263 16.04 9.405 17.466 10.23 25.596 15.032 31.397 18.605l1.286.92c12.265 7.792 18.312 11.31 26.13 14.758 10.422 4.595 20.362 6.934 30.573 6.77 8.033-.127 14.695-2.035 19.488-4.81l1.5-.87v1.736c0 1.515-.313 2.77-1.082 3.92C132.85 87.014 125.268 90 115.456 90c-22.32 0-34.688-3.89-52.417-14.245-19.897-11.3-34.293-19.577-44.655-25.632zm9.778-44.14c.907 0 1.615.272 2.154.748.22.194.53.574.455.498.063.062.116.133.16.21 6.58 11.468 14.52 17.608 23.75 18.332 10.118.815 20.73-5.176 28.055-14.277.56-.695 1.68-.365 1.773.522 1.938 18.366 9.316 32.77 20.794 43.946 7.935 7.727 15.94 12.55 26.368 17.26.778.35.786 1.452.014 1.815-4.358 2.05-9.024 3.35-14.087 3.52-10.436.355-20.49-1.866-30.915-6.384-7.79-3.375-13.876-6.91-25.816-14.536l-1.268-.908c-10.69-6.455-32.167-19.092-47.536-27.952-.48-.277-.644-.89-.365-1.37 1.116-1.912 2.102-3.532 4.402-7.27 2.948-4.536 5.1-8.122 6.6-11.125 1.16-1.862 3.358-3.026 5.46-3.026z" fill-rule="evenodd"/></svg>
          </span>
                  <p class="type-body">Get on with your life</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div class="cx-step-3-phone anim-block">
          <div class="cx-step-3-phone__inner">
            <div class="cx-phone cx-phone--iphone" style="width:302px; height:615.5px; max-width:calc(100vw - 50px);max-height:calc((100vw - 50px) * 2.0380794702)">
              <svg class="cx-phone__pulse cx-phone__pulse--1" viewbox="0 0 750 750" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <circle cx="375" cy="375" r="375" />
              </svg>
              <svg class="cx-phone__pulse cx-phone__pulse--2" viewbox="0 0 750 750" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <circle cx="375" cy="375" r="375" />
              </svg>
              <svg class="cx-phone__pulse cx-phone__pulse--3" viewbox="0 0 750 750" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <circle cx="375" cy="375" r="375" />
              </svg>
              <div class="cx-phone__hand"></div>
              <div class="cx-phone__device" style="background-image:url(https://storage.googleapis.com/echo-site.appspot.com/devices/Echo-NHS-Prescription-rose-iphone.png); width:302px; height:615.5px; max-width:calc(100vw - 50px);max-height:calc((100vw - 50px) * 2.0380794702)">
                <div class="cx-phone__device__screen cx-phone__device__screen--notification" style="top:12.83509342%; left:6.95364238411%; bottom:12.0227457352%; right:6.62251655629%;">
                  <img class="cx-phone__device__screen__content cx-phone__screen__content--image" src="<?php echo get_template_directory_uri(); ?>/img/Echo-NHS-Prescription-Camera-Screen.jpg">
                  <img class="cx-phone__device__screen__notification" src="<?php echo get_template_directory_uri(); ?>/img/Echo-NHS-Prescription-Hero-Notification.png">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cx-dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="vx-home__scrollable">
        <section class="cx-user-reviews">
          <div class="cx-user-reviews__inner">
            <h1 class="type-headline light">It really is that simple. See what our users think.</h1>
          </div>
          <ul class="cx-user-reviews__list total-13 selected-2">
            <li class="cx-user-reviews__list__item none">
              <div class="cx-user-reviews__list__item__content">
                <p class="type-body-large dark">Daily reminders to use my inhaler have genuinely helped me get my asthma under control. Echo is an essential app.</p>
                <div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/Mat.jpg" >
                  <p class="type-body-s dark">Mat, 35, Essex</p>
                </div>
              </div>
            </li>
            <li class="cx-user-reviews__list__item none">
              <div class="cx-user-reviews__list__item__content">
                <p class="type-body-large dark">Setting up my account was seamless - I ordered on Monday and received my items on Thursday morning. So, so easy.</p>
                <div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/Jill.jpg" >
                  <p class="type-body-s dark">Jill, 33, London</p>
                </div>
              </div>
            </li>
            <li class="cx-user-reviews__list__item none">
              <div class="cx-user-reviews__list__item__content">
                <p class="type-body-large dark">Getting my medication has never been so convenient. I never run out and it’s just one less thing I have to worry about.</p>
                <div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/ross.jpg" >
                  <p class="type-body-s dark">Ross, 20, Camberley</p>
                </div>
              </div>
            </li>
            <li class="cx-user-reviews__list__item none">
              <div class="cx-user-reviews__list__item__content">
                <p class="type-body-large dark">Great service offering and highly reliable. Game changer.</p>
                <div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/Alex.png" >
                  <p class="type-body-s dark">Alex, 35 London</p>
                </div>
              </div>
            </li>
            <li class="cx-user-reviews__list__item none">
              <a href="http://www.twitter.com" target="_blank">
                <div class="cx-user-reviews__list__item__content">
                  <p class="type-body-large dark">Echo brings ordering repeat prescriptions into 21st century. Just load the app and tap.</p>
                  <div>
                    <img src="<?php echo get_template_directory_uri(); ?>/img/liam.jpg" >
                    <p class="type-body-s dark">Liam, 23, Stoke-on-Trent</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="cx-user-reviews__list__item none">
              <div class="cx-user-reviews__list__item__content">
                <p class="type-body-large dark">Fantastic service, already recommended to lots of people. It makes my life so much easier.</p>
                <div>
                  <p class="type-body-s dark">Amy, 32, Norwich</p>
                </div>
              </div>
            </li>
            <li class="cx-user-reviews__list__item none">
              <div class="cx-user-reviews__list__item__content">
                <p class="type-body-large dark">Great service, so easy to use, fast delivery, reminders when needed, just tap on your app and the items arrive in great packaging.</p>
                <div>
                  <p class="type-body-s dark">Matt, 46, Kent</p>
                </div>
              </div>
            </li>
            <li class="cx-user-reviews__list__item none">
              <div class="cx-user-reviews__list__item__content">
                <p class="type-body-large dark">Speedy, efficient, easy to access and use</p>
                <div>
                  <p class="type-body-s dark">Charlotte, 44, Nottingham</p>
                </div>
              </div>
            </li>
            <li class="cx-user-reviews__list__item none">
              <div class="cx-user-reviews__list__item__content">
                <p class="type-body-large dark">So easy to use. convenient, free, Perfect for a busy lifestyle.</p>
                <div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/imogen.jpg" >
                  <p class="type-body-s dark">Imogen, 25, Norwich</p>
                </div>
              </div>
            </li>
            <li class="cx-user-reviews__list__item none">
              <div class="cx-user-reviews__list__item__content">
                <p class="type-body-large dark">Daily reminders to use my inhaler have genuinely helped me get my asthma under control. Echo is an essential app.</p>
                <div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/Mat.jpg" >
                  <p class="type-body-s dark">Mat, 35, Essex</p>
                </div>
              </div>
            </li>
            <li class="cx-user-reviews__list__item none">
              <div class="cx-user-reviews__list__item__content">
                <p class="type-body-large dark">Setting up my account was seamless - I ordered on Monday and received my items on Thursday morning. So, so easy.</p>
                <div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/Jill.jpg" >
                  <p class="type-body-s dark">Jill, 33, London</p>
                </div>
              </div>
            </li>
            <li class="cx-user-reviews__list__item none">
              <div class="cx-user-reviews__list__item__content">
                <p class="type-body-large dark">Getting my medication has never been so convenient. I never run out and it’s just one less thing I have to worry about.</p>
                <div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/ross.jpg" >
                  <p class="type-body-s dark">Ross, 20, Camberley</p>
                </div>
              </div>
            </li>
            <li class="cx-user-reviews__list__item none">
              <div class="cx-user-reviews__list__item__content">
                <p class="type-body-large dark">Great service offering and highly reliable. Game changer.</p>
                <div>
                  <img src="<?php echo get_template_directory_uri(); ?>/img/Alex.png" >
                  <p class="type-body-s dark">Alex, 35 London</p>
                </div>
              </div>
            </li>
          </ul>
          <ul class="cx-user-reviews__buttons selected-0">
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
          <div class="cx-user-reviews__disclaimer type-body light">Posted with user consent</div>
        </section>




<?php get_footer(); ?>
