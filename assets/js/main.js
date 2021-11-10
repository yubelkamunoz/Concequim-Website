/**
* Template Name: Day - v4.6.0
* Template URL: https://bootstrapmade.com/day-multipurpose-html-template-for-free/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";
  
  fetch('http://127.0.0.1:8000/salidas-activas')
  .then(response => response.json())
  .then(response => {
    const swiper = document.querySelector('.swiper-wrapper')
    var swipernew = ''
    response.data.map( item => {
      const { route, date_exit, time_exit, driver, number_car, plate_car } = item
      swipernew = swipernew +  `
      <div class="swiper-slide">
        <div class="container p-5">
          <div class="row">
            <div class="col-md-6">
              <div class="carousel-content">
                <blockquote class="blockquote">
                  <p class="animation animated-item-1 pt-5 pb-5">Salida del Transporte Oficial de Concequim de Venezuela</p>
                </blockquote>
                  <h1 class="animation animated-item-2"> ${route} </h1>
                    <h3><i class="bi bi-clock-fill mx-3" style="font-size: 2rem; color:#cc1616;"></i>
                    ${time_exit}</h3> 
                    <h3><i class="bi bi-calendar-month-fill mx-3" style="font-size: 2rem; color: #cc1616;"></i>
                    ${date_exit}</h3>
                    <h3><i class="bi bi-truck mx-3" style="font-size: 2rem; color: #cc1616;"></i> 
                    Nro Bus  ${ number_car } </h3>
                    <h3><i class="bi bi-person-lines-fill mx-3" style="font-size: 2rem; color: #cc1616;"></i> 
                    ${ driver } </h3>
                  <a class="btn-slide animation animated-item-3" href="stops.html">PARADAS Y DESTINOS</a>
              </div>
          </div>
                <div class="col-md-6">
                    <div class="carousel-content">
                    <svg id="e0958169-61ce-49c9-8f2a-5e3a81fc50e8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="780.35125" height="491.63114" viewBox="0 0 886.35125 491.63114"><title>navigator</title><circle cx="232.39589" cy="103.24635" r="50.76267" fill="#ff6584"/><path d="M548.40633,463.86269H299.37989a5.07941,5.07941,0,0,1-.93059-.07373L416.22735,259.78044a8.24649,8.24649,0,0,1,14.35487,0L509.62607,396.686l3.78685,6.55094Z" transform="translate(-156.82437 -204.18443)" fill="#3f3d56"/><polygon points="391.582 259.678 306.558 259.678 348.296 199.052 351.3 194.685 352.802 192.502 356.589 199.052 391.582 259.678" opacity="0.2"/><path d="M687.06247,463.86269H471.67506l41.73786-60.62578,3.0036-4.36731,54.38818-79.007c3.56567-5.17807,12.14357-5.50052,16.33577-.97665a9.82994,9.82994,0,0,1,.7832.97665Z" transform="translate(-156.82437 -204.18443)" fill="#3f3d56"/><circle cx="593.46332" cy="210.81982" r="15.29649" fill="#f5001a"/><polygon points="594.938 256.894 591.805 256.894 593.233 208.516 594.938 256.894" fill="#3f3d56"/><polygon points="593.509 217.685 596.873 213.031 593.463 218.837 593.095 218.192 593.509 217.685" fill="#3f3d56"/><polygon points="593.141 222.384 589.777 217.731 593.187 223.536 593.555 222.891 593.141 222.384" fill="#3f3d56"/><circle cx="733.78005" cy="210.81982" r="15.29649" fill="#f5001a"/><polygon points="735.254 256.894 732.121 256.894 733.55 208.516 735.254 256.894" fill="#3f3d56"/><polygon points="733.826 217.685 737.19 213.031 733.78 218.837 733.411 218.192 733.826 217.685" fill="#3f3d56"/><polygon points="733.458 222.384 730.094 217.731 733.504 223.536 733.872 222.891 733.458 222.384" fill="#3f3d56"/><circle cx="637.77455" cy="188.84646" r="22.59164" fill="#f5001a"/><polygon points="639.952 256.894 635.325 256.894 637.434 185.444 639.952 256.894" fill="#3f3d56"/><polygon points="637.843 198.985 642.81 192.113 637.775 200.687 637.23 199.734 637.843 198.985" fill="#3f3d56"/><polygon points="637.298 205.926 632.331 199.054 637.366 207.627 637.911 206.675 637.298 205.926" fill="#3f3d56"/><circle cx="692.86823" cy="188.84646" r="22.59164" fill="#f5001a"/><polygon points="695.046 256.894 690.419 256.894 692.528 185.444 695.046 256.894" fill="#3f3d56"/><polygon points="692.936 198.985 697.904 192.113 692.868 200.687 692.324 199.734 692.936 198.985" fill="#3f3d56"/><polygon points="692.392 205.926 687.424 199.054 692.46 207.627 693.004 206.675 692.392 205.926" fill="#3f3d56"/><circle cx="549.96899" cy="188.84646" r="22.59164" fill="#f5001a"/><polygon points="552.146 256.894 547.519 256.894 549.629 185.444 552.146 256.894" fill="#3f3d56"/><polygon points="550.037 198.985 555.004 192.113 549.969 200.687 549.425 199.734 550.037 198.985" fill="#3f3d56"/><polygon points="549.493 205.926 544.525 199.054 549.561 207.627 550.105 206.675 549.493 205.926" fill="#3f3d56"/><path d="M974.074,695.81557H236.80819a70.734,70.734,0,1,1,0-141.468H972.44164a27.20538,27.20538,0,0,0,0-54.41076H212.32335v-43.5286H972.44164a70.734,70.734,0,1,1,0,141.468H236.80819a27.20538,27.20538,0,1,0,0,54.41076H974.074Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><rect x="82.70435" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="178.46729" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="274.23022" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="369.99316" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="465.75609" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="561.51903" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="657.28196" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="753.04489" y="272.8999" width="33.73467" height="2.17643" fill="#fff"/><rect x="82.70435" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="178.46729" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="274.23022" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="369.99316" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="465.75609" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="561.51903" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="657.28196" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="753.04489" y="370.83926" width="33.73467" height="2.17643" fill="#fff"/><rect x="82.70435" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="178.46729" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="274.23022" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="369.99316" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="465.75609" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="561.51903" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="657.28196" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><rect x="753.04489" y="468.77863" width="33.73467" height="2.17643" fill="#fff"/><path d="M732.01016,298.87947a28.99191,28.99191,0,0,0-6.04507-5.70351h12.62379A21.11412,21.11412,0,0,0,732.01016,298.87947Z" transform="translate(-156.82437 -204.18443)" fill="none"/><path d="M690.74325,293.176h2.17616c-.46752.32845-.93648.65539-1.38307,1.01036C691.28145,293.84181,691.00932,293.51136,690.74325,293.176Z" transform="translate(-156.82437 -204.18443)" fill="none"/><path d="M748.69208,290.55856a20.83292,20.83292,0,0,1,10.12924,2.6174H738.58888A20.74188,20.74188,0,0,1,748.69208,290.55856Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><path d="M709.43111,287.94117a28.623,28.623,0,0,1,16.534,5.23479H692.91941A28.61637,28.61637,0,0,1,709.43111,287.94117Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><path d="M487.03606,254.80744a53.65615,53.65615,0,0,1,105.27431-11.3126c.65-.02332,1.29951-.04944,1.95522-.04944a53.66909,53.66909,0,0,1,51.48218,38.53833A37.92036,37.92036,0,0,1,690.74325,293.176h-167.372a36.29323,36.29323,0,0,1-36.37313-37.57718Q487.01422,255.2037,487.03606,254.80744Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><path d="M777.58705,338.05522a28.99214,28.99214,0,0,1,6.04507-5.70351H771.00833A21.11388,21.11388,0,0,1,777.58705,338.05522Z" transform="translate(-156.82437 -204.18443)" fill="none"/><path d="M818.854,332.35171h-2.17616c.46752.32845.93647.65539,1.38306,1.01036C818.31576,333.01756,818.5879,332.68711,818.854,332.35171Z" transform="translate(-156.82437 -204.18443)" fill="none"/><path d="M760.90514,329.73431a20.83286,20.83286,0,0,0-10.12924,2.6174h20.23243A20.74171,20.74171,0,0,0,760.90514,329.73431Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><path d="M800.16611,327.11691a28.62293,28.62293,0,0,0-16.534,5.2348h33.04569A28.61635,28.61635,0,0,0,800.16611,327.11691Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><path d="M1022.56115,293.98318a53.65615,53.65615,0,0,0-105.27431-11.31259c-.65-.02333-1.29951-.04945-1.95522-.04945a53.66909,53.66909,0,0,0-51.48218,38.53833A37.92038,37.92038,0,0,0,818.854,332.35171H986.226a36.29324,36.29324,0,0,0,36.37314-37.57719Q1022.583,294.37945,1022.56115,293.98318Z" transform="translate(-156.82437 -204.18443)" fill="#e6e6e6"/><rect x="910.97675" y="662.3144" width="19.45264" height="3.08772" transform="translate(1684.22678 1124.02413) rotate(-179.96937)" fill="#3f3d56"/><path d="M770.33154,663.006l4.01354.92846,152.53335.08154,1.37161-3.19572a32.257,32.257,0,0,0,2.37148-17.44193c-.65694-4.4136-2.30315-8.79914-6.04213-10.70394L917.8105,587.59l-84.38886-.151L800.7719,613.77308s-15.40137-.27686-23.7685,10.13972a24.44959,24.44959,0,0,0-5.1143,13.46591l-.33022,5.41878Z" transform="translate(-156.82437 -204.18443)" fill="#f5001a"/><circle cx="647.00933" cy="458.0675" r="18.83509" fill="#3f3d56"/><circle cx="647.00933" cy="458.0675" r="9.91321" fill="#ccc"/><circle cx="739.94969" cy="458.11718" r="18.83509" fill="#3f3d56"/><circle cx="739.94969" cy="458.11718" r="9.91321" fill="#ccc"/><polygon points="656.92 406.511 702.483 406.53 708.045 406.53 717.435 406.537 717.435 405.852 717.442 397.594 717.449 388.322 711.201 388.322 705.639 388.316 695.787 388.309 690.225 388.309 678.851 388.302 656.92 406.511" fill="#fff"/><polygon points="724.849 406.544 748.929 406.557 748.935 401.832 748.935 393.574 748.942 388.342 745.416 388.342 739.854 388.335 724.856 388.329 724.849 406.544" fill="#fff"/><rect x="871.16473" y="624.30978" width="3.08772" height="5.86667" transform="translate(1588.2574 1050.7682) rotate(-179.96937)" fill="#3f3d56"/><rect x="821.61203" y="614.55698" width="3.08772" height="5.86667" transform="translate(1284.26173 -409.51982) rotate(90.03063)" fill="#3f3d56"/><path d="M817.13838,604.397h.33966a6.45333,6.45333,0,0,1,6.45333,6.45333v0a6.45333,6.45333,0,0,1-6.45333,6.45333h-.33966a0,0,0,0,1,0,0V604.397A0,0,0,0,1,817.13838,604.397Z" transform="translate(1483.91874 1017.9547) rotate(-179.96937)" fill="#3f3d56"/><path d="M771.55888,642.79749a9.97473,9.97473,0,0,0,5.44452-18.88469,24.44959,24.44959,0,0,0-5.1143,13.46591Z" transform="translate(-156.82437 -204.18443)" fill="#3f3d56"/><polygon points="705.639 388.316 717.435 405.852 717.442 397.594 711.201 388.322 705.639 388.316" fill="#f2f2f2"/><polygon points="739.854 388.335 748.935 401.832 748.935 393.574 745.416 388.342 739.854 388.335" fill="#f2f2f2"/><polygon points="690.225 388.309 702.483 406.53 708.045 406.53 695.787 388.309 690.225 388.309" fill="#f2f2f2"/><circle cx="50.0579" cy="260.92953" r="50.0579" fill="#3f3d56"/><path d="M207.09056,480.18425l-25.05073-25.05073a4.35315,4.35315,0,0,1,6.15628-6.15628L206.674,467.45511l58.96394-67.23927a4.35271,4.35271,0,0,1,6.54523,5.7397Z" transform="translate(-156.82437 -204.18443)" fill="#f5001a"/></svg>                        </div>
                </div>
          </div>
        </div>
      </div>`
    })
    swiper.innerHTML = swipernew
  });

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /** 
   * javascript comment 
   * @Author: Mauricio Chacon 
   * @Date: 2021-11-09 23:50:03 
   * @Desc: print letter work 
   */
  on('click', '.letter-work', function(e) {
    e.preventDefault
    const identity =  document.getElementById('identity').value
    if(identity.trim().length > 6){
      const path = document.createElement('a');
      path.href = `http://127.0.0.1:8000/workletter/${identity}`
      path.target = "_blank"
      path.click()
    }
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.swiper', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  
   
   

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()