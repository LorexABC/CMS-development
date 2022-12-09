function getData(ajaxurl) { 
  return $.ajax({
    url: ajaxurl,
    type: 'GET',
  });
};



                
async function test() {
  try {
    const res = await getData('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyBJebSkQffZPajkYLyKefMr5A9JhvqqXSk')

    // const font_faces = res.items.map( item => item.family + ', ' + item.category );
    const font = res.items.map((index) => {
      return(
        index.family + ', ' + index.category
      )
    });

    const fonts = font.map((index) => {
      return { name: index.split(",")[0] , value: index };
    })
    main(fonts)
  } catch(err) {
    console.log(err);
  }
}
test();

function main(fonts) {

const editor = grapesjs.init({

  container: '#gjs',

  fromElement: true,

  height: window.screen.height - 215,
  width: 'auto',

  panels: { defaults: [] },

  deviceManager: {
    devices: [{
        name: 'Desktop',
        width: '',
      }, {
        name: 'Mobile',
        width: '320px',
        widthMedia: '480px',
    }]
  },

  showOffsets: true,
  allowScripts: true,
  noticeOnUnload: false,

  
  plugins: [
    'grapesjs-custom-code',
    'grapesjs-component-countdown',
    'grapesjs-plugin-export',
    // 'gjs-blocks-basic'
  ],

  // pluginsOpts: {
  //   'gjs-blocks-basic': { blocks: ['column1', 'column2', 'column3', 'column3-7'] }
  // },

  canvas: {
    styles: ['https://pagecdn.io/lib/easyfonts/fonts.css'],
  },
  blockManager: {
    blocks: [
    {
      id: 'my_block1',
      label: '<p style = "font-size: 12px; font-weight:500">Block#1</p>',
      category: 'my_block',
      media: `<i class="fa-solid fa-s" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `<h1 style="padding: 20px">Insert your title text here</h1>`,
    },
    {
      id: 'my_form1',
      label: '<p style = "font-size: 12px; font-weight:500">Form#1</p>',
      category: 'my_form',
      media: `
      `,
      content: `
      <section class="form1_login">
        <div class="form1_login_box">
          <div class="form1_left">
            <div class="form1_top_link"><a href="#"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="">Return home</a></div>
            <div class="form1_contact">
              <form action="">
                <h3>SIGN IN</h3>
                <input type="text" placeholder="USERNAME">
                <input type="text" placeholder="PASSWORD">
                <button class="form1_submit">LET'S GO</button>
              </form>
            </div>
          </div>
          <div class="form1_right">
            <div class="form1_right-text">
              <h2>LONYX</h2>
              <h5>A UX BASED CREATIVE AGENCEY</h5>
            </div>
            <div class="form1_right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt="" class="form1_img"></div>
          </div>
        </div>
      </section>
      <style>
        .form1_img{
          width: 100%;
        }
        .form1_login {
            height: 800px;
            width: 100%;
            background: radial-gradient(#653d84, #332042);
            position: relative;
        }
        .form1_login_box {
            width: 1050px;
            height: 600px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            background: #fff;
            border-radius: 10px;
            box-shadow: 1px 4px 22px -8px #0004;
            display: flex;
            overflow: hidden;
        }
        .form1_left{
          width: 41%;
          height: 100%;
          padding: 25px 25px;
          
        }
        .form1_right{
          width: 59%;
          height: 100%  
        }
        .form1_top_link a {
            color: #452A5A;
            font-weight: 400;
        }
        .form1_top_link{
          height: 20px
        }
        .form1_contact{
          display: flex;
            align-items: center;
            justify-content: center;
            align-self: center;
            height: 100%;
            width: 73%;
            margin: auto;
        }
        .form1_left h3{
          text-align: center;
          margin-bottom: 40px;
        }
        .form1_left input {
            border: none;
            width: 80%;
            margin: 15px 0px;
            border-bottom: 1px solid #4f30677d;
            padding: 7px 9px;
            width: 100%;
            overflow: hidden;
            background: transparent;
            font-weight: 600;
            font-size: 14px;
        }
        .form1_left{
          background: linear-gradient(-45deg, #dcd7e0, #fff);
        }
        .form1_submit {
            border: none;
            padding: 15px 70px;
            border-radius: 8px;
            display: block;
            margin: auto;
            margin-top: 120px;
            background: #583672;
            color: #fff;
            font-weight: bold;
            -webkit-box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
            -moz-box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
            box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
        }



        .form1_right {
          background: linear-gradient(212.38deg, rgba(242, 57, 127, 0.7) 0%, rgba(175, 70, 189, 0.71) 100%),url(https://static.seattletimes.com/wp-content/uploads/2019/01/web-typing-ergonomics-1020x680.jpg);
          color: #fff;
          position: relative;
        }

        .form1_right-text{
          height: 100%;
          position: relative;
          transform: translate(0%, 45%);
        }
        .form1_right-text h2{
          display: block;
          width: 100%;
          text-align: center;
          font-size: 50px;
          font-weight: 500;
        }
        .form1_right-text h5{
          display: block;
          width: 100%;
          text-align: center;
          font-size: 19px;
          font-weight: 400;
        }

        .form1_right-inductor{
          position: absolute;
          width: 70px;
          height: 7px;
          background: #fff0;
          left: 50%;
          bottom: 70px;
          transform: translate(-50%, 0%);
        }
        .form1_top_link img {
            width: 28px;
            padding-right: 7px;
            margin-top: -3px;
        }

      </style>
      `,
    },
    {
      id: 'my_form2',
      label: '<p style = "font-size: 12px; font-weight:500">Form#2</p>',
      category: 'my_form',
      media: `
      `,
      content: `
      
      `
    },
    {
      id: 'my_form3',
      label: '<p style = "font-size: 12px; font-weight:500">Form#3</p>',
      category: 'my_form',
      media: `
      `,
      content: `
      `
    },
    {
      id: 'my_feature1',
      label: '<p style = "font-size: 12px; font-weight:500">Feature#1</p>',
      category: 'my_feature',
      media: `
      `,
      content: `
      <div class="feature1">
      <div class="services">
        <div class="content">
          <h2>our services</h2>
          <div class="first-border">
            <div class="last-border">
            </div>
          </div>
          <div class="description">
            <p>must explain to you how all this mistaken idea of denouncing pleasure and prasing pain was born and i will
              give
              you.
            </p>
          </div>
          <div class="element">
            <div class="cercle-img">
              <i class="fas fa-search-dollar"></i>
            </div>
            <h4>strategy</h4>
            <p>on the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized
            </p>
          </div>
          <div class="element">
            <div class="cercle-img">
              <i class="fas fa-laptop"></i>
            </div>
            <h4>strategy</h4>
            <p>on the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized
            </p>
          </div>

          <div class="element">
            <div class="cercle-img">
              <i class="fas fa-camera-retro"></i>
            </div>
            <h4>strategy</h4>
            <p>on the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized
            </p>
          </div>
          <div class="element">
            <div class="cercle-img">
              <i class="fas fa-search-dollar"></i>
            </div>
            <h4>strategy</h4>
            <p>on the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized
            </p>
          </div>
          <div class="element">
            <div class="cercle-img">
              <i class="fas fa-laptop"></i>
            </div>
            <h4>strategy</h4>
            <p>on the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized
            </p>
          </div>

          <div class="element">
            <div class="cercle-img">
              <i class="fas fa-camera-retro"></i>
            </div>
            <h4>strategy</h4>
            <p>on the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized
            </p>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      </div>
      <style>
        .feature1 .services {
          background: #ccc;
        }
        .feature1 .content {
          width: 70%;
          margin: auto;
          text-align: center;
          font-family: "Century Gothic";
        }
        .feature1 h2,
        h4 {
          padding: 10px 0;
          text-transform: capitalize;
          margin: 0;
        }
        .feature1 .first-border {
          width: 110px;
          height: 2.1px;
          background-color: gray;
          margin: auto;
        }
        .feature1 .last-border {
          width: 50px;
          height: 4px;
          background-color: green;
          margin: auto;
          position: relative;
          top: -1px;
        }
        .feature1 .content p {
          margin: 0px 0 30px 0;
          padding-top: 10px;
          font-size: small;
          color: #555;
        }
        .feature1 .element {
          width: 26%;
          padding: 2%;
          margin: 10px 10px 10px 10px;
          background: #fff;
          float: left;
        }
        .feature1 .cercle-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid #666;
          position: relative;
          left: 35%;
          background: green;
        }
        .feature1 i {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 35%;
          right: 30%;
          color: white;
        }
        .feature1 .clear {
          clear: both;
        }
        .feature1 .description {
          width: 60%;
          margin: auto;
        }

      </style>
      `
    },
    {
      id: 'my_feature2',
      label: '<p style = "font-size: 12px; font-weight:500">Feature#2</p>',
      category: 'my_feature',
      media: `
      `,
      content: `
      <div class="feature2">
      <div class="header">

        <h1 class="title">Services</h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div class="row1-container">
        <div class="box box-down cyan">
          <h2>User Monitoring</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
          <img src="https://image.flaticon.com/icons/png/512/3845/3845863.png" width="55vw" height="60vh" alt="">
        </div>

          <div class="box red">
          <h2>Easy to Use</h2>
          <p>Lorem, ipsum dolor sit amet consectetur</p>
          <img src="https://image.flaticon.com/icons/png/512/3845/3845768.png" width="55vw" height="60vh" alt="">
        </div>


        <div class="box box-down blue">
          <h2>CaTraffic Analysis</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
          <img src="https://image.flaticon.com/icons/png/512/3845/3845793.png" width="55vw" height="60vh" alt="">
        </div>
        </div>
        <div class="row2-container">
        <div class="box orange">
          <h2>System Reporting</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
          <img src="https://image.flaticon.com/icons/png/512/3845/3845803.png" width="55vw" height="60vh" alt="">
        </div>
      </div>
      </div>
      <style>
        :root {
            --red: hsl(0, 78%, 62%);
            --cyan: hsl(140, 86%, 64%);
            --orange: hsl(34, 97%, 64%);
            --blue: hsl(212, 86%, 64%);
            --varyDarkBlue: #A1ACB3;
            --grayishBlue:#fff;
            --veryLightGray: hsl(0, 0%, 98%);
            --weight1: 200;
            --weight2: 400;
            --weight3: 600;
        }

        .feature2 {
          font-size: 15px;
          background-color: #FF3CAC;
          background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);

        }

        .feature2 .attribution { 
            font-size: 11px; text-align: center; 
        }
        .feature2 .attribution a { 
            color: hsl(228, 45%, 44%); 
        }

        .feature2 .title {
            font-weight: var(--weight1);
            color: var(--grayishBlue);
        }


        @media (max-width: 400px) {

        }

        .feature2 .header {
            text-align: center;
            line-height: 0.8;
            margin-bottom: 50px;
            margin-top: 100px;
        }

        .feature2 .header p {
            margin: 0 auto;
            line-height: 2;
            color: var(--grayishBlue);
        }


        .feature2 .box p {
            color: var(--grayishBlue);
        }

        .feature2 .box {
            box-shadow: 0px 30px 40px -20px var(--grayishBlue);
            padding: 30px;
            margin: 20px;  
            transition: transform 250ms;
            background: rgba( 255, 255, 255, 0.15 );
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 4px );
            -webkit-backdrop-filter: blur( 4px );
            border-radius: 10px;
            border: 1px solid rgba( 255, 255, 255, 0.18 );
        }
        .feature2 .box:hover{
          transform: translateY(-10px)
        }

        .feature2 img {
            float: right;
        }

        @media (max-width: 450px) {
          .feature2 .box {
                height: 200px;
            }
        }

        @media (max-width: 950px) and (min-width: 450px) {
          .feature2 .box {
                text-align: center;
                height: 180px;
            }
        }

        .feature2 .cyan {
            border-top: 3px solid var(--cyan);
        }
        .feature2 .red {
            border-top: 3px solid var(--red);
          
        }
        .feature2 .blue {
            border-top: 3px solid var(--blue);
        }
        .feature2 .orange {
            border-top: 3px solid var(--orange);
        }

        .feature2 h2 {
            color: var(--varyDarkBlue);
            font-weight: var(--weight3);
        }


        @media (min-width: 950px) {
          .feature2 .row1-container {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            .feature2 .row2-container {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .feature2 .box-down {
                position: relative;
                top: 150px;
            }
            .feature2 .box {
                width: 20%;
            
            }
            .feature2 .header p {
                width: 30%;
            }
            
        }
      </style>

      `
    },
    {
      id: 'my_footer1',
      label: '<p style = "font-size: 12px; font-weight:500">Footer#1</p>',
      category: 'my_footer',
      media: `
      `,
      content: `
      <footer class = "footer1">
        <div class="footer-top">
          <div class="footer-wrapper">
            <div>
              <div class="footer-nav">
                <h2><span>Browse Our Site</span></h2>
                <div class="footer-nav-wrapper">
                  <ul>
                    <li>
                      <a href="https://www.edgarcayce.org/edgar-cayce/his-life/">About Edgar Cayce</a>
                    </li>
                    <li>
                      <a href="https://www.edgarcayce.org/about-us/blog/">Blog</a>
                    </li>
                    <li>
                      <a href="https://www.edgarcayce.org/about-us/contact-us/">Contact Us</a>
                    </li>
                    <li>
                      <a href="https://www.edgarcayce.org/donate/make-a-donation/">Donate</a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.arecatalog.com/enewspref.aspx">Enews Sign-up</a>
                    </li>
                    <li>
                      <a href="https://www.edgarcayce.org/membership/">Membership</a>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <a href="https://secured.edgarcayce.org/login">Member Login</a>
                    </li>
                    <li>
                      <a href="https://www.edgarcayce.org/about-us/reflections/edgar-cayce-reflections-show/">Reflections</a>
                    </li>
                    <li>
                      <a href="https://www.edgarcayce.org/about-us/privacy-policy-statement/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="https://www.edgarcayce.org/events/event-listings/">Upcoming Events</a>
                    </li>
                    <li>
                      <a href="https://www.edgarcayce.org/about-us/media-center/media-interview-requests/">Media Interview Requests</a>
                    </li>
                  </ul>

                </div>
              </div>
              <div class="social">
                <h2 class="centered"><span>Body, Mind, Spirit Resource</span></h2>
                <p>Edgar Cayce&#39;s A.R.E. is a nonprofit, tax-exempt 501(c)(3) organization dedicated to providing tools for wellness, personal empowerment, and spiritual growth based on the work of Edgar Cayce.</p>
                <ul class="social-icons">
                  <li class="facebook"><a href="http://www.facebook.com/edgarcayce" target="_blank"><i class="fa fa-facebook"></i></a></li>
                  <li class="twitter"><a href="http://twitter.com/EdgarCayceARE" target="_blank"><i class="fa fa-twitter"></i></a></li>
                  <li class="pinterest"><a href="http://pinterest.com/edgarcayce/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                  <li class="youtube"><a href="https://www.youtube.com/user/edgarcaycetv" target="_blank"><i class="fa fa-youtube"></i></a></li>
                  <li class="instagram"><a href="https://www.instagram.com/edgarcayceare/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                </ul>
              </div>
              <div class="contact-information">
                <h2 class="raligned"><span>Keep In Touch</span></h2>
                <div class="content">
                  <p>Edgar Cayce's A.R.E.<br />Association for Research and Enlightenment<br />215 67th Street<br />Virginia Beach, VA 23451<br />Toll-free: 800-333-4499<br />Local: 757-428-3588</p>
                  <p>Membership dues and donations are tax-deductible to the extent allowed by I.R.S. code, section 501(c)(3).</p>
                  <p>*Readings notated with “ECRL” indicate that some of the language has been edited by the author for ease of understanding.</p>
                </div>
              </div>
            </div>
            <div class="footer-ctc visible-xs">
              <a href="tel:+17574283588" class="btn orange"><i class="fa fa-phone"></i> Toll free: 800-333-4499</a><br />
              <a href="tel:+18003334499" class="btn orange"><i class="fa fa-phone"></i> Local: 757-428-3588</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-wrapper">
            <div>
              <div class="copyright-information">
                <div class="copyright">All Content Copyright 2021, Edgar Cayce&#39;s Association for Research and Enlightenment</div>
                <div>Site By: <a href="https://www.marathonus.com/" target="_blank">Marathon Consulting</a></div>
              </div>

            </div>
          </div>
        </div>
      </footer>
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,400&family=Open+Sans:wght@300;400;600&display=swap");

        @font-face {
          font-family: "FontAwesome";
          src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/fonts/fontawesome-webfont.eot?v=4.0.3");
          src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/fonts/fontawesome-webfont.eot?#iefix&v=4.0.3")
              format("embedded-opentype"),
            url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/fonts/fontawesome-webfont.woff?v=4.0.3")
              format("woff"),
            url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/fonts/fontawesome-webfont.ttf?v=4.0.3")
              format("truetype"),
            url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/fonts/fontawesome-webfont.svg?v=4.0.3#fontawesomeregular")
              format("svg");
          font-weight: normal;
          font-style: normal;
        }

        * {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        :after,
        :before {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        .footer1 {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-family: Cantarell, sans-serif;
          font-size: 18px;
          line-height: 1.42857143;
          background-color: #fff;
          color: #505051;
        }

        .footer1 p {
          font-size: 18px;
          line-height: 32px;
        }

        .footer1 p {
          margin: 0 0 12.5px;
        }

        .footer1 a {
          color: #428bca;
          text-decoration: none;
        }

        .footer1 a:active,
        .footer1 a:hover {
          outline: 0;
        }

        .footer1 a:focus,
        .footer1 a:hover {
          color: #2a6496;
          text-decoration: underline;
        }

        .footer1 a:hover {
          text-decoration: none;
        }

        .footer1 .visible-lg,
        .visible-md,
        .visible-sm,
        .visible-xs {
          display: none !important;
        }

        .footer1 .fa {
          display: inline-block;
          font-family: FontAwesome;
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .footer1 .fa-facebook:before {
          content: "\f09a";
        }

        .footer1 .fa-twitter:before {
          content: "\f099";
        }

        .footer1 .fa-pinterest:before {
          content: "\f0d2";
        }

        .footer1 .fa-youtube:before {
          content: "\f167";
        }

        .footer1 .fa-instagram:before {
          content: "\f16d";
        }

        .footer1 .fa-phone:before {
          content: "\f095";
        }

        .footer1 h2 {
          line-height: normal;
          font-size: 22px;
          color: #056ba3;
          font-family: "Open Sans", sans-serif;
          font-weight: 600;
          position: relative;
          overflow: hidden;
          margin: 25px auto 25px auto;
        }

        .footer1 h2.centered,
        h2.text-center {
          text-align: center;
        }

        .footer1 h2.raligned,
        h2.text-right {
          text-align: right;
        }

        .footer1 h2 span {
          display: inline-block;
          vertical-align: baseline;
          zoom: 1;
          position: relative;
          padding-right: 20px;
        }

        .footer1 h2 span:after,
        h2 span:before {
          content: "";
          display: block;
          width: 1200px;
          position: absolute;
          top: 0.73em;
          border-top: 1px solid #dcdcdc;
          border-top: thin solid #dcdcdc;
          margin-left: auto;
          margin-right: auto;
        }

        .footer1 h2 span:before {
          right: 100%;
        }

        .footer1 h2 span:after {
          left: 100%;
        }

        .footer1 h2.centered span,
        h2.text-center span {
          padding: 0 20px;
        }

        .footer1 h2.raligned span,
        h2.text-right span {
          padding-left: 20px;
          padding-right: 0;
        }

        .footer1 .btn {
          font-family: Cantarell, sans-serif;
          color: #fff !important;
          font-size: 16px;
          border-radius: 0;
          text-transform: uppercase;
          border: none;
          min-width: 200px;
          text-align: center;
          padding: 4px 45px;
          opacity: 1;
          border-radius: 7px;
          vertical-align: middle;
          cursor: pointer;
          display: inline-block;
          line-height: 1.42857143;
        }

        .footer1 .btn:focus,
        .btn:hover {
          color: #333;
          text-decoration: none;
        }

        .footer1 .btn.active,
        .btn:active {
          outline: 0;
          background-image: none;
          -webkit-box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);
          box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);
        }

        .footer1 .btn:active,
        .btn:hover {
          opacity: 0.85;
          -moz-transition: all 1s;
          -webkit-transition: all 1s;
          transition: all 1s;
        }

        .footer1 .btn.orange {
          background-image: url(https://www.edgarcayce.org/images/orange-stripe.png);
        }

        .footer1 .footer-top h2 {
          color: #fff;
          font-size: 20px;
        }

        .footer1 .footer-top {
          background: #0e2e60;
          color: #fff;
          padding-top: 50px;
        }

        .footer1 .footer-bottom {
          background: #061c3f;
          padding-top: 15px;
          padding-bottom: 15px;
        }

        .footer1 .footer-wrapper:after,
        .footer-wrapper > div:after {
          clear: both;
        }

        .footer1 .footer-wrapper:before,
        .footer-wrapper:after,
        .footer-wrapper > div:before,
        .footer-wrapper > div:after {
          content: " ";
          display: table;
        }

        .footer1 .footer-wrapper {
          margin-right: auto;
          margin-left: auto;
          padding-left: 15px;
          padding-right: 15px;
          max-width: 100%;
        }

        .footer1 .footer-wrapper > div {
          margin-left: -15px;
          margin-right: -15px;
        }

        .footer1 .footer-top .footer-nav {
          position: relative;
          min-height: 1px;
          padding-left: 15px;
          padding-right: 15px;
          margin-bottom: 40px;
          overflow: hidden;
        }

        .footer1 .footer-top h2 span:after,
        .footer-top h2 span:before {
          border-top: solid 1px #19417e;
          border-top: solid thin #19417e;
        }

        .footer1 .footer-top .footer-nav .footer-nav-wrapper ul {
          position: relative;
          float: left;
          width: 50%;
          min-height: 1px;
          padding-left: 15px;
          padding-right: 15px;
          list-style-type: none;
          margin: 0;
          padding: 0 0 0 10px;
        }

        .footer1 .footer-top .footer-nav .footer-nav-wrapper ul li {
          font-size: 14px;
        }

        .footer1 .footer-top .footer-nav .footer-nav-wrapper ul li a {
          color: #fff;
        }

        .footer1 .footer-top .footer-nav .footer-nav-wrapper ul li:before {
          content: "\f0da";
          font-family: FontAwesome;
          display: block;
          position: relative;
          max-width: 0;
          max-height: 0;
          left: -10px;
        }

        .footer1 .footer-top .social {
          position: relative;
          min-height: 1px;
          padding-left: 15px;
          padding-right: 15px;
          font-size: 12px;
          text-align: center;
          margin-bottom: 40px;
        }

        .footer1 .footer-top .social .social-icons {
          font-size: 18px;
          padding: 0;
          margin: 0;
          list-style-type: none;
        }

        .footer1 .footer-top .social .social-icons li {
          display: inline-block;
          width: 40px;
          border-radius: 100%;
          height: 40px;
          line-height: 40px;
          margin: 5px;
        }

        .footer1 .footer-top .social .social-icons li a {
          color: #fff;
          display: block;
        }

        .footer1 .footer-top .social .social-icons li.facebook {
          background-color: #507bbe;
        }

        .footer1 .footer-top .social .social-icons li.twitter {
          background-color: #64ccef;
        }

        .footer1 .footer-top .social .social-icons li.pinterest {
          background-color: #dd3e60;
        }

        .footer1 .footer-top .social .social-icons li.youtube {
          background-color: #f2513b;
        }

        .footer1 .footer-top .social .social-icons li.instagram {
          background-color: #a236b7;
        }

        .footer1 .footer-top .contact-information {
          position: relative;
          min-height: 1px;
          padding-left: 15px;
          padding-right: 15px;
          text-align: right;
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 40px;
        }

        .footer1 .footer-top .contact-information p {
          font-size: 14px;
          line-height: 24px;
        }

        .footer1 .footer-top .footer-ctc {
          text-align: center;
          margin-bottom: 25px;
        }

        .footer1 .footer-top .footer-ctc .btn {
          max-width: 300px;
          margin-bottom: 10px;
          text-transform: none;
          font-weight: 200;
          font-family: Cantarell, sans-serif;
        }

        .footer1 .footer-bottom .copyright-information {
          position: relative;
          float: left;
          width: 100%;
          min-height: 1px;
          padding-left: 15px;
          padding-right: 15px;
          color: #6880a4;
          text-align: center;
          font-size: 12px;
        }

        @media (max-width: 1199px) {
          .footer1 .btn {
            min-width: 0;
            white-space: normal;
          }
        }

        @media (max-width: 767px) {
          .footer1 .visible-xs {
            display: block !important;
          }
        }

        @media (min-width: 479px) {
          .footer1 .footer-top .footer-nav .footer-nav-wrapper ul li {
            font-size: 14px;
            margin: 11px;
          }
        }

        @media (min-width: 768px) {
          .footer1 .footer-wrapper {
            width: 750px;
          }

          .footer1 h2 span:after,
          h2 span:before {
            max-width: calc(768px - 60px);
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .footer1 .visible-sm {
            display: block !important;
          }
        }

        @media (min-width: 992px) {
          .footer1 .footer-wrapper {
            width: 970px;
          }

          .footer1 .footer-top .footer-nav {
            float: left;
            width: 33.33333333%;
          }

          .footer1 .footer-top .social {
            float: left;
            width: 33.33333333%;
          }

          .footer1 .footer-top .contact-information {
            float: left;
            width: 33.33333333%;
          }

          .footer1 h2 span:after,
          h2 span:before {
            max-width: calc(992px - 60px);
          }

          .footer1 .footer-top .social h2 span:after,
          .footer-top .social h2 span:before {
            border: none;
          }
        }

        @media (min-width: 992px) and (max-width: 1199px) {
          .footer1 .visible-md {
            display: block !important;
          }
        }

        @media (min-width: 1200px) {
          .footer1 .footer-wrapper {
            width: 1170px;
          }

          .footer1 h2 span:after,
          h2 span:before {
            max-width: calc(1200px - 60px);
          }

          .footer1 .visible-lg {
            display: block !important;
          }
        }

      </style>
      `
    },
    {
      id: 'my_footer2',
      label: '<p style = "font-size: 12px; font-weight:500">Footer#2</p>',
      category: 'my_footer',
      media: `
      `,
      content: `
      <footer class="footer2">
        <div class="foot-col">
        <div class="foot-main">
            <div class="foot-row">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="foot-row">
                <h4>Get help</h4>
                <ul>
                    <li><a href="#">Track order</a></li>
                    <li><a href="#">Return</a></li>
                    <li><a href="#">Payment</a></li>
                    <li><a href="#">Shipping</a></li>
                </ul>
            </div>
            <div class="foot-row">
                <h4>Online shop</h4>
                <ul>
                    <li><a href="#">Mens cloths</a></li>
                    <li><a href="#">Watches</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Mobile</a></li>
                </ul>
            </div>
            <div class="foot-row">
                <div class="social-icon">
                <h4>Connect</h4>
                <ul>
                    <li><i class="fab fa-facebook"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-google-plus-g"></i></li>
                </ul>
                </div>
            </div>
        </div>
      </div>
    </footer>
    <style>
      *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
      }
      .footer2{
          width: 100vw;
      }
      .footer2 .foot-main{
          
          background: #005f99;
          display: flex;
          justify-content: space-between;
          flex: 25%;
          flex-wrap: wrap;
      }
      .footer2 .foot-row{
          padding: 20px 40px;
          margin: 20px;


      }
      .footer2 .foot-row h4{
          color: rgb(240, 230, 230);
          margin-bottom: 20px;
          font-size: 1.6rem;
          position: relative;
          text-transform: uppercase;    
          
      }
      .footer2 .foot-row h4::before{
          content: "";
          position: absolute;
          left: 5px;
          bottom: -10px;
          background-color: #e91e63;
          width: 50px;
          height: 2px;

      }
      .footer2 .foot-row ul{
          
      }
      .footer2 .foot-row li{
          list-style: none;
          margin: 15px 0;
      }
      .footer2 .foot-row ul li a{
          color: rgb(177, 173, 173);
          text-decoration: none;
          font-weight: 300;
          display: block; 
          transition: all 0.3s ease;

      }
      .footer2 .foot-row ul li a:hover{
          color: #fff;
          padding-left: 10px;
      }
      .footer2 .social-icon ul{
          
      }
      .footer2 .social-icon ul li{
          list-style: none;
          display: inline-block;
          background: white;
          border-radius: 50%;

      }
      .footer2 .social-icon ul li i{
          color: black;
          margin: 5px;
          display: block; 
          transition: all 0.3s ease;
          
      }
      .footer2 .social-icon ul li i:hover{
          color: rgba(158, 154, 154, 0.788);
          padding-left: 10px;
      }   

      @media(max-width: 768px){
        .footer2 .foot-main{
              width: 100%;    
              margin-bottom: 30px;
              
      }  
    </style>
    `
    },
    {
      id: 'my_team1',
      label: '<p style = "font-size: 12px; font-weight:500">Team#1</p>',
      category: 'my_team',
      media: `
      `,
      content: `
      <div class = "team1">
        <div class="content-wrapper">
          <div class="title"><header>Meet The Dev Team</header></div>

          <div class="panel-wrapper">
            <div class="panel">
              <div>
                <img
                  src="https://cdn3.iconfinder.com/data/icons/developers-iconset/90/Developers_Colorai-12-512.png"
                  alt=""
                />
              </div>
              <h3 class="name">Anna Houston</h3>
              <p class="position">Senior Developer</p>

              <p class="background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                aliquam quam est recusandae nulla nostrum laboriosam porro maxime
                veritatis, nesciunt quibusdam molestiae rem sint blanditiis rerum
                sequi dolorum eveniet saepe.
              </p>
              <div class="soicals">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-pinterest"></i></a>
                <a href="#"><i class="fab fa-twitter-square"></i></a>
              </div>
            </div>

            <div class="panel">
              <div>
                <img
                  src="https://cdn3.iconfinder.com/data/icons/developers-iconset/90/Developers_Colorai-08-512.png"
                  alt=""
                />
              </div>
              <h3 class="name">Colby Collins</h3>
              <p class="position">Senior Developer</p>
              <p class="background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                aliquam quam est recusandae nulla nostrum laboriosam porro maxime
                veritatis, nesciunt quibusdam molestiae rem sint blanditiis rerum
                sequi dolorum eveniet saepe.
              </p>
              <div class="soicals">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-pinterest"></i></a>
                <a href="#"><i class="fab fa-twitter-square"></i></a>
              </div>
            </div>

            <div class="panel">
              <div><img src="https://www.ezsec.org/img/job3.png" alt="" /></div>
              <h3 class="name">Samuel Philp</h3>
              <p class="position">Mid Developer</p>
              <p class="background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                aliquam quam est recusandae nulla nostrum laboriosam porro maxime
                veritatis, nesciunt quibusdam molestiae rem sint blanditiis rerum
                sequi dolorum eveniet saepe.
              </p>
              <div class="soicals">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-pinterest"></i></a>
                <a href="#"><i class="fab fa-twitter-square"></i></a>
              </div>
            </div>

            <div class="panel">
              <div>
                <img
                  src="https://cdn3.iconfinder.com/data/icons/developers-iconset/90/Developers_Colorai-10-512.png"
                  alt=""
                />
              </div>
              <h3 class="name">Lauren Conwell</h3>
              <p class="position">Junior Developer</p>
              <p class="background">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                aliquam quam est recusandae nulla nostrum laboriosam porro maxime
                veritatis, nesciunt quibusdam molestiae rem sint blanditiis rerum
                sequi dolorum eveniet saepe.
              </p>
              <div class="soicals">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-pinterest"></i></a>
                <a href="#"><i class="fab fa-twitter-square"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .team1 {
          background: black;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .team1 .content-wrapper {
          background: white;
          min-height: 600px;
          width: 1200px;
          display: flex;
          flex-direction: column;
          padding: 3rem;
        }

        .team1 .title,
        header {
          display: flex;
          justify-content: center;
          font-family: "Poiret One", cursive;
          font-size: 50px;
        }

        .team1 .panel-wrapper {
          display: flex;
          /* justify-content: space-evenly; */
          align-items: center;
          margin-top: 80px;
          flex-flow: wrap;
        }
        .team1 .panel {
          display: flex;
          flex-direction: column;
          flex: 1;
          text-align: center;
          margin: 20px;
        }

        .team1 img {
          height: 140px;
          width: auto;
          border-radius: 50%;
          border: 2px solid black;
        }

        .team1 .position {
          border-bottom: 4px solid black;
        }
        .team1 .background {
          margin-top: 30px;
          text-align: justify;
          font-size: 13px;
          margin-bottom: 30px;
        }
        .team1 .socials,
        .fab {
          display: flex;
          margin: 10px;
          color: black;
          font-size: 20px;
        }
  
      </style>
      `
    },
    {
      id: 'my_team2',
      label: '<p style = "font-size: 12px; font-weight:500">Team#2</p>',
      category: 'my_team',
      media: `
      `,
      content: `
      <div class = "team2">
        <div class="ourteam">
          <h1>Oor Team</h1>
          <div class="borderdiv"></div>
          <div class="team">
            <div class="teammember">
            <div class="teamimg">
              <img src="https://scontent.fspd1-1.fna.fbcdn.net/v/t1.0-9/69467068_910830709292585_1120866819352035328_o.jpg?_nc_cat=100&_nc_eui2=AeH3gPPjSnvMl_fL2IyNEEC0Idyln2kgR5mHVyv_be9O0LFwKKI5BH-HR7I_AeL1YbEdinYQCXVK3_tpZuDieFrZVLwrC2kUqhp7NkRUlAT1Cg&_nc_oc=AQnEPs0WCZFAY737jSHZ88xA3f7KHgCGU43SoVB3Lk5apjvcu4wiCn1Idp-cGXvbVno&_nc_ht=scontent.fspd1-1.fna&oh=cbf6696616d2133686bf1c4a3f2d0b03&oe=5E662B3E" alt="teamimage" />
              </div>
              <h3>MD Alamin Mia</h3>
              <p class="role">Web Devloper</p>
              <p>Web developers are found working in various types of organizations, including large corporations and governments, small and medium-sized companies, or alone as freelancers. Some web developers work for one organization as a permanent full-time employee</p>
              </div>
              <div class="teammember">
              <div class="teamimg">
              <img src="https://scontent.fspd1-1.fna.fbcdn.net/v/t1.0-9/s960x960/50755808_1139440022899936_4068838350197358592_o.jpg?_nc_cat=101&_nc_eui2=AeGZh4pTzGza_G6MbgbUkTAtqR3tjS3Byf-Y2XlpDF0sD2NtktVZaXE7hHFf8C5tpHg8gEhxKsspMULcYGjl6fHRqkIggXGbuB15-3pXP01HPA&_nc_oc=AQknI8nkOU_7Su98CwTQc6ScKXdXq84A4HQQMu6E0TyoCgkbBF3PjAZagIJB_kkG1zI&_nc_ht=scontent.fspd1-1.fna&oh=036156fb0c0a2b1295e6d94f01bf8ebc&oe=5EB3EF52" alt="teamimage" />
              </div>
              <h3>MD Rayhan Kabir</h3>
              <p class="role">Web Devloper</p>
              <p>Web developers are found working in various types of organizations, including large corporations and governments, small and medium-sized companies, or alone as freelancers. Some web developers work for one organization as a permanent full-time employee</p>
              </div>
              <div class="teammember">
              <div class="teamimg">
              <img src="https://scontent.fspd1-1.fna.fbcdn.net/v/t1.0-9/79693070_854593958292922_2586586956720766976_o.jpg?_nc_cat=108&_nc_eui2=AeGsKRcsi1cz2uPfb2ZoUyor7NbJ7kuvW2Fs6ZmTiT-Oya9swbHgx0sXRU0LNfhOdfmIZLcsBRs5zucbg0Rs0F1oli3jnLcSk54L07X-uzjoLw&_nc_oc=AQnE2w_hSCE2UmDzB5rkLOjGzD2emTdq_nEiMspBXNHz2JQqvZQRuOvLSEICUYpBlmg&_nc_ht=scontent.fspd1-1.fna&oh=441ae42b14efe7a3831e9bde8562a5d0&oe=5EAE4326" alt="teamimage" />
              </div>
              <h3>Fk Firoj Kabir</h3>
              <p class="role">Graphic Design</p>
              <p>Web developers are found working in various types of organizations, including large corporations and governments, small and medium-sized companies, or alone as freelancers. Some web developers work for one organization as a permanent full-time employee</p>
              </div>
            </div>
          </div>
      </div>

      <style>
        @import url('https://fonts.googleapis.com/css?family=Allura|Josefin+Sans&display=swap');
        *{
          padding:0;
          margin:0;
          box-sizing:border-box;
        }
        .team2 {
          background:#81c644;
          font-family: 'Josefin Sans', sans-serif;
        }
        .team2 .ourteam{
          margin-top:10%;
        }
        .team2 .ourteam h1{
          font-size:52px;
          text-align:center;
          font-family: 'Allura', cursive;
        }
        .team2 .team{
          display:flex;
          text-align:center;
          width:auto;
          justify-content:center;
          flex-wrap:wrap;
        }
        .team2 .teammember{
          background:#fff;
          margin: 18px;
          width:300px;
          padding:20px;
          line-height:20px;
          margin-bottom:50px;
          color:#8eb88b;
          position:relative;
        }
        .team2 .teammember h3{
          color:#81c644;
          font-size:26px;
          margin-top:50px;
        }
        .team2 .teammember p.role{
          color:#ccc;
          font-size:12px;
          text-transform:uppercase;
          margin:12px 0px;
        }
        .team2 .team .teammember .teamimg{
          width:100px;
          height:100px;
          position:absolute;
          top: -1%;
          left: 31%;
          transform:translateY(-50%);
          border-radius: 50%;
          background: #fff;
        }
        .team2 .team .teammember .teamimg img{
          width:100px;
          height:100px;
          border-radius: 50%;
          padding: 8px;
        }
        .team2 .borderdiv{
          border-bottom:5px solid orange;
          width: 14%;
          margin:auto;
          margin-bottom: 88px;
        }  
      </style>
      `
    },
    {
      id: 'my_form1',
      label: '<p style = "font-size: 12px; font-weight:500">Block#1</p>',
      category: 'my_form',
      media: `
      `,
      content: ``
    },
    {
      id: 'my_form1',
      label: '<p style = "font-size: 12px; font-weight:500">Block#1</p>',
      category: 'my_form',
      media: `
      `,
      content: ``
    },
    {
      id: 'my_price1',
      label: '<p style = "font-size: 12px; font-weight:500">Price#1</p>',
      category: 'my_price',
      media: `
      `,
      content: `
      <div class="price1_container">
        <div class="price1_inner-container">
            <div class="price1_content">
                <div class="price1_top">
                    <h2>Starter Plan</h2>
                    <p>for those just getting started</p>
                </div>
                <div class="price1_bottom">
                    <ul class="price1_ul">
                        <li><i class="fas fa-check"></i> Access to all readings</li>
                        <li><i class="fas fa-check"></i> 5 code downloads per day</li>
                        <li><i class="fas fa-check"></i> 1 Live tutorial every month</li>
                    </ul>
                    <h1>$68</h1>
                    <p>per Month</p>
                    <button class="price1_button">PURCHASE</button>
                    <P>Minimum spend $816 over 12 months</P>
                </div>
            </div>
            <div class="price1_content">
                <div class="price1_top">
                    <h2>Basic Plan</h2>
                    <p>The perfect all rounder</p>
                </div>
                <div class="price1_bottom">
                    <ul class="price1_ul">
                        <li><i class="fas fa-check"></i> Access to all readings</li>
                        <li><i class="fas fa-check"></i> 20 code downloads per day</li>
                        <li><i class="fas fa-check"></i> 5 Live tutorial every month</li>
                    </ul>
                    <h1>$99</h1>
                    <p>per Month</p>
                    <button class="price1_button">PURCHASE</button>
                    <P>Minimum spend $1,188 over 12 months</P>
                </div>
            </div>
            <div class="price1_content price1_last">
                <div class="price1_top">
                    <h2>Enterprise Plan</h2>
                    <p>For people serious about coding</p>
                </div>
                <div class="price1_bottom">
                    <ul class="price1_ul">
                        <li><i class="fas fa-check"></i> Access to all readings</li>
                        <li><i class="fas fa-check"></i> unlimited code downloads per day</li>
                        <li><i class="fas fa-check"></i> 10 Live tutorial every month</li>
                    </ul>
                    <h1>$250</h1>
                    <p>per Month</p>
                    <button class="price1_button">PURCHASE</button>
                    <P>Minimum spend $3000 over 12 months</P>
                </div>
            </div>
        </div>
      </div>
      <style>
        :root{
            --txt-primary: #fff;
            --bg-light:rgb(240, 232, 232);
            --bg-2:#036958;
            --bg-dark:#02362e;
            --width:80%;
        }
        .price1_container{
            width: var(--width);
            height: auto;
            margin: 4rem auto;
            background: var(--bg-dark);
            padding: 1rem 2rem;

        }
        .price1_container h2 {
            color: var(--txt-primary);
            font-weight:500;
            text-align: center;
        }
        .price1_inner-container {
            
            display: flex;
            margin-bottom: 1rem;
        }

        .price1_content {
            margin-top: 2rem;
            width: 35%;
            height: auto;
            margin-right: 1rem;
            border-radius: 10px;
            box-shadow: 2px 3px 10px 1px #012c26;
        }
        .price1_long{
            margin-top: 1rem;
        }
        .price1_top{
            color: var(--bg-light);
            opacity: .7;
            text-align: center;
            width: 100%;
            height: 100px;
            border-radius: 10px 10px 0 0;
            background: #036958;
            border: 2px solid #036958;;
            outline: none;
        }
        .price1_long .top {
            border-radius: 0 0 0 0 ;
        }
        .price1_top-most{
            width: 100%;
            height: 30px;
            background: rgb(27, 75, 63);
            border-radius: 15px 15px 0 0;
            text-align: center;
            color: rgb(224, 216, 216);
            padding: .5rem 0 0 0 ;
        }
        .price1_bottom{
            text-align: center;
            width: 100%;
            height: auto;
            background: var(--bg-light);
            border-radius: 0 0 15px 15px ;
            color: rgb(29, 28, 28);
            padding-bottom: 1rem;
        }

        .price1_top h2{
            font-weight: 400;
            margin: 1rem 0;
        }

        .price1_button{
            padding: .7rem 2rem;
            margin: 2rem 0;
            color: var(--bg-2);
            font-weight: 800;
            border: 2px solid gray;
            border-radius: 4px;
        }
        .price1_ul {
            padding: 2rem 1rem;
            text-align: left;
            list-style: none;
            border-bottom: 1px solid rgb(202, 200, 200);
            margin-bottom: 2rem ;
            line-height: 1.5rem;
        }
        .price1_ul li i {
            color: var(--bg-dark);
            margin-right: 10px;
        }

        @media(max-width: 1000px) {
            .price1_inner-container{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                justify-content: center;
                align-items: center;
            }
            .price1_container{
                width: 90%;
            }
            .price1_content {
                width: 280px;
                margin-right: 1rem;
            }
            .price1_header{
                padding: 1rem;
            }
        }
        @media(max-width: 700px) {
            .price1_container{
                padding: 0 1rem 1rem;
            }
              
            .price1_inner-container{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
            }
            .price1_bottom{
                padding: .5rem;
            }
            .price1_last{
                margin-top:19rem;
            }
        }
      </style>
    `
    },
    {
      id: 'my_header1',
      label: '<p style = "font-size: 12px; font-weight:500">Header#1</p>',
      category: 'my_header',
      media: `<?xml version="1.0" encoding="iso-8859-1"?>
      <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="70px"
          viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
      <polygon style="fill:#E6EAEA;" points="64.68,147.295 64.68,421.231 147.296,503.847 373.402,503.847 373.402,147.295 "/>
      <polygon style="fill:#CDD4D5;" points="64.68,147.295 64.68,421.231 147.296,503.847 221.215,503.847 221.215,147.295 "/>
      <g>
        <path style="fill:#F0353D;" d="M325.572,220.671H112.51c-4.503,0-8.153-3.649-8.153-8.153c0-4.504,3.65-8.153,8.153-8.153h213.062
          c4.503,0,8.153,3.649,8.153,8.153C333.725,217.022,330.074,220.671,325.572,220.671z"/>
        <path style="fill:#F0353D;" d="M325.572,290.242H112.51c-4.503,0-8.153-3.649-8.153-8.153c0-4.504,3.65-8.153,8.153-8.153h213.062
          c4.503,0,8.153,3.649,8.153,8.153C333.725,286.593,330.074,290.242,325.572,290.242z"/>
        <path style="fill:#F0353D;" d="M325.572,359.813H112.51c-4.503,0-8.153-3.649-8.153-8.153c0-4.504,3.65-8.153,8.153-8.153h213.062
          c4.503,0,8.153,3.649,8.153,8.153C333.725,356.164,330.074,359.813,325.572,359.813z"/>
        <path style="fill:#F0353D;" d="M325.572,429.384H112.51c-4.503,0-8.153-3.649-8.153-8.153s3.65-8.153,8.153-8.153h213.062
          c4.503,0,8.153,3.649,8.153,8.153S330.074,429.384,325.572,429.384z"/>
      </g>
      <polygon style="fill:#9BAAAB;" points="147.296,421.231 64.68,421.231 147.296,503.847 "/>
      <polygon style="fill:#4ACFD9;" points="377.75,8.153 195.126,8.153 125.555,8.153 125.555,86.42 125.555,121.206 153.383,86.42 
        247.304,86.42 247.304,373.401 325.572,373.401 325.572,86.42 419.493,86.42 447.321,121.206 447.321,86.42 447.321,8.153 "/>
      <polygon style="fill:#0295AA;" points="195.126,8.153 125.555,8.153 125.555,86.42 125.555,121.206 153.383,86.42 247.304,86.42 
        247.304,373.401 286.438,373.401 286.438,8.153 "/>
      <g>
        <path style="fill:#FFFFFF;" d="M425.58,46.743h-56.527c-4.503,0-8.153-3.649-8.153-8.153s3.65-8.153,8.153-8.153h56.527
          c4.503,0,8.153,3.649,8.153,8.153S430.083,46.743,425.58,46.743z"/>
        <path style="fill:#FFFFFF;" d="M338.616,46.743h-39.134c-4.503,0-8.153-3.649-8.153-8.153s3.65-8.153,8.153-8.153h39.134
          c4.503,0,8.153,3.649,8.153,8.153S343.119,46.743,338.616,46.743z"/>
      </g>
      <path d="M447.321,0H125.555c-4.503,0-8.153,3.649-8.153,8.153v113.053c0,3.463,2.187,6.546,5.455,7.693
        c3.267,1.145,6.902,0.103,9.065-2.6l25.38-31.726h81.849v44.569H64.68c-4.503,0-8.153,3.649-8.153,8.153v273.933
        c0,0.27,0.014,0.539,0.04,0.809c0.012,0.116,0.034,0.229,0.05,0.345c0.021,0.148,0.039,0.297,0.067,0.444
        c0.027,0.134,0.063,0.264,0.097,0.396c0.032,0.126,0.06,0.253,0.097,0.377c0.039,0.13,0.088,0.257,0.134,0.384
        c0.045,0.124,0.085,0.248,0.135,0.37c0.05,0.12,0.108,0.234,0.162,0.35c0.059,0.125,0.114,0.25,0.179,0.373
        c0.06,0.112,0.128,0.22,0.193,0.328c0.071,0.118,0.138,0.239,0.216,0.355c0.08,0.121,0.171,0.234,0.258,0.35
        c0.073,0.097,0.14,0.197,0.217,0.291c0.161,0.196,0.332,0.384,0.51,0.564c0.011,0.011,0.02,0.023,0.03,0.034l82.616,82.616
        c0.012,0.012,0.026,0.023,0.038,0.035c0.178,0.176,0.364,0.346,0.559,0.505c0.095,0.077,0.193,0.145,0.29,0.216
        c0.116,0.087,0.23,0.177,0.351,0.258c0.114,0.076,0.234,0.143,0.35,0.213c0.111,0.066,0.22,0.136,0.334,0.198
        c0.12,0.064,0.242,0.118,0.365,0.176c0.118,0.057,0.236,0.115,0.358,0.166c0.12,0.049,0.241,0.089,0.362,0.133
        c0.129,0.047,0.259,0.097,0.391,0.137c0.121,0.037,0.242,0.063,0.364,0.094c0.136,0.035,0.271,0.073,0.41,0.1
        c0.141,0.028,0.283,0.045,0.425,0.065c0.122,0.017,0.24,0.04,0.363,0.052c0.267,0.026,0.536,0.04,0.804,0.04H373.4
        c4.503,0,8.153-3.649,8.153-8.153V147.296c0-4.504-3.65-8.153-8.153-8.153h-39.675v-44.57h81.849l25.38,31.727
        c2.163,2.702,5.797,3.745,9.065,2.6c3.268-1.147,5.455-4.231,5.455-7.693V8.153C455.474,3.649,451.824,0,447.321,0z M112.51,429.384
        h26.633v54.78l-54.78-54.78H112.51z M365.249,495.694h-209.8v-74.463c0-4.504-3.65-8.153-8.153-8.153H112.51H72.833V155.448h166.318
        v57.07v69.571v69.571v21.741c0,4.504,3.65,8.153,8.153,8.153h78.268c4.503,0,8.153-3.649,8.153-8.153V351.66v-69.571v-69.571v-57.07
        h31.524V495.694z M439.168,97.964l-13.31-16.637c-1.547-1.933-3.889-3.059-6.366-3.059h-93.921c-4.503,0-8.153,3.649-8.153,8.153
        v60.875v65.223v69.571v69.571v13.588h-61.962V351.66v-69.571v-69.571v-65.223V86.42c0-4.504-3.65-8.153-8.153-8.153h-93.921
        c-2.476,0-4.819,1.126-6.366,3.059l-13.31,16.637V16.306h305.461V97.964z"/>
      <g>
      </svg>
      `,
      content: `
      <header class = "header_1">
        <img src="https://raw.githubusercontent.com/Azuxe/header-html-css/master/images/logo.png" alt="logo">
        <ul class="menu">
            <li>Dashboard</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>Contact</li>
        </ul>
      </header>
      <style>
        .header_1{
            width: 100%;
            height: 100x;
            background-color:yellowgreen;
            display: flex;
            align-items: center;
        }

        .header_1 img{
            align-self: flex-start;
            padding: 10px;
            height: 80px;
            width: 80px;
            padding-left: 50px
        }

        .header_1 .menu{
            width: 100%;
            display: inline-flex;
            list-style-type: none;
            justify-content: flex-end;
            padding-right: 50px;
          
        }

        .header_1 .menu li{
            color: white;
            margin: 0 15px 0 15px;
        }
      </style>
      `,
    },
    {
      id: 'my_header2',
      label: '<p style = "font-size: 12px; font-weight:500">Header#2</p>',
      category: 'my_header',
      media: `<?xml version="1.0" encoding="iso-8859-1"?>
      <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="70px"
          viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
      <polygon style="fill:#E6EAEA;" points="64.68,147.295 64.68,421.231 147.296,503.847 373.402,503.847 373.402,147.295 "/>
      <polygon style="fill:#CDD4D5;" points="64.68,147.295 64.68,421.231 147.296,503.847 221.215,503.847 221.215,147.295 "/>
      <g>
        <path style="fill:#F0353D;" d="M325.572,220.671H112.51c-4.503,0-8.153-3.649-8.153-8.153c0-4.504,3.65-8.153,8.153-8.153h213.062
          c4.503,0,8.153,3.649,8.153,8.153C333.725,217.022,330.074,220.671,325.572,220.671z"/>
        <path style="fill:#F0353D;" d="M325.572,290.242H112.51c-4.503,0-8.153-3.649-8.153-8.153c0-4.504,3.65-8.153,8.153-8.153h213.062
          c4.503,0,8.153,3.649,8.153,8.153C333.725,286.593,330.074,290.242,325.572,290.242z"/>
        <path style="fill:#F0353D;" d="M325.572,359.813H112.51c-4.503,0-8.153-3.649-8.153-8.153c0-4.504,3.65-8.153,8.153-8.153h213.062
          c4.503,0,8.153,3.649,8.153,8.153C333.725,356.164,330.074,359.813,325.572,359.813z"/>
        <path style="fill:#F0353D;" d="M325.572,429.384H112.51c-4.503,0-8.153-3.649-8.153-8.153s3.65-8.153,8.153-8.153h213.062
          c4.503,0,8.153,3.649,8.153,8.153S330.074,429.384,325.572,429.384z"/>
      </g>
      <polygon style="fill:#9BAAAB;" points="147.296,421.231 64.68,421.231 147.296,503.847 "/>
      <polygon style="fill:#4ACFD9;" points="377.75,8.153 195.126,8.153 125.555,8.153 125.555,86.42 125.555,121.206 153.383,86.42 
        247.304,86.42 247.304,373.401 325.572,373.401 325.572,86.42 419.493,86.42 447.321,121.206 447.321,86.42 447.321,8.153 "/>
      <polygon style="fill:#0295AA;" points="195.126,8.153 125.555,8.153 125.555,86.42 125.555,121.206 153.383,86.42 247.304,86.42 
        247.304,373.401 286.438,373.401 286.438,8.153 "/>
      <g>
        <path style="fill:#FFFFFF;" d="M425.58,46.743h-56.527c-4.503,0-8.153-3.649-8.153-8.153s3.65-8.153,8.153-8.153h56.527
          c4.503,0,8.153,3.649,8.153,8.153S430.083,46.743,425.58,46.743z"/>
        <path style="fill:#FFFFFF;" d="M338.616,46.743h-39.134c-4.503,0-8.153-3.649-8.153-8.153s3.65-8.153,8.153-8.153h39.134
          c4.503,0,8.153,3.649,8.153,8.153S343.119,46.743,338.616,46.743z"/>
      </g>
      <path d="M447.321,0H125.555c-4.503,0-8.153,3.649-8.153,8.153v113.053c0,3.463,2.187,6.546,5.455,7.693
        c3.267,1.145,6.902,0.103,9.065-2.6l25.38-31.726h81.849v44.569H64.68c-4.503,0-8.153,3.649-8.153,8.153v273.933
        c0,0.27,0.014,0.539,0.04,0.809c0.012,0.116,0.034,0.229,0.05,0.345c0.021,0.148,0.039,0.297,0.067,0.444
        c0.027,0.134,0.063,0.264,0.097,0.396c0.032,0.126,0.06,0.253,0.097,0.377c0.039,0.13,0.088,0.257,0.134,0.384
        c0.045,0.124,0.085,0.248,0.135,0.37c0.05,0.12,0.108,0.234,0.162,0.35c0.059,0.125,0.114,0.25,0.179,0.373
        c0.06,0.112,0.128,0.22,0.193,0.328c0.071,0.118,0.138,0.239,0.216,0.355c0.08,0.121,0.171,0.234,0.258,0.35
        c0.073,0.097,0.14,0.197,0.217,0.291c0.161,0.196,0.332,0.384,0.51,0.564c0.011,0.011,0.02,0.023,0.03,0.034l82.616,82.616
        c0.012,0.012,0.026,0.023,0.038,0.035c0.178,0.176,0.364,0.346,0.559,0.505c0.095,0.077,0.193,0.145,0.29,0.216
        c0.116,0.087,0.23,0.177,0.351,0.258c0.114,0.076,0.234,0.143,0.35,0.213c0.111,0.066,0.22,0.136,0.334,0.198
        c0.12,0.064,0.242,0.118,0.365,0.176c0.118,0.057,0.236,0.115,0.358,0.166c0.12,0.049,0.241,0.089,0.362,0.133
        c0.129,0.047,0.259,0.097,0.391,0.137c0.121,0.037,0.242,0.063,0.364,0.094c0.136,0.035,0.271,0.073,0.41,0.1
        c0.141,0.028,0.283,0.045,0.425,0.065c0.122,0.017,0.24,0.04,0.363,0.052c0.267,0.026,0.536,0.04,0.804,0.04H373.4
        c4.503,0,8.153-3.649,8.153-8.153V147.296c0-4.504-3.65-8.153-8.153-8.153h-39.675v-44.57h81.849l25.38,31.727
        c2.163,2.702,5.797,3.745,9.065,2.6c3.268-1.147,5.455-4.231,5.455-7.693V8.153C455.474,3.649,451.824,0,447.321,0z M112.51,429.384
        h26.633v54.78l-54.78-54.78H112.51z M365.249,495.694h-209.8v-74.463c0-4.504-3.65-8.153-8.153-8.153H112.51H72.833V155.448h166.318
        v57.07v69.571v69.571v21.741c0,4.504,3.65,8.153,8.153,8.153h78.268c4.503,0,8.153-3.649,8.153-8.153V351.66v-69.571v-69.571v-57.07
        h31.524V495.694z M439.168,97.964l-13.31-16.637c-1.547-1.933-3.889-3.059-6.366-3.059h-93.921c-4.503,0-8.153,3.649-8.153,8.153
        v60.875v65.223v69.571v69.571v13.588h-61.962V351.66v-69.571v-69.571v-65.223V86.42c0-4.504-3.65-8.153-8.153-8.153h-93.921
        c-2.476,0-4.819,1.126-6.366,3.059l-13.31,16.637V16.306h305.461V97.964z"/>
      <g>
      </svg>
      `,
      content: `
      <section class = header2_section>
        <div class="content">
          <h2 style="color: yellowgreen;">Curve Header</h2>
          <p>HTML is Markup language across the web, and use it to create web pages. CSS is It's responsible for the choice of fonts, colors and layout in a website's design. PHP is General-purpose scripting language that is especially suited to web development. Design Skill is Understand how responsive design works because it's need to adapt to the changing screen sizes.</p>
        </div>
      </section>
      <style>
        .header2_section
        {
            position: relative;
            width: 100%;
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }
        .header2_section:before
        {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #a4508b;
            background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
            border-radius: 0 0 50% 50%/0 0 100% 100%;
            transform: scaleX(1.5);
        }
        .header2_section .content
        {
            position: relative;
            z-index: 1;
            margin: 0 auto;
            max-width: 900px;
            text-align: center;
        }
        .header2_section .content h2
        {
            margin: 0;
            padding: 0;
            color: #fff;
            font-size: 3em;
        }
        .header2_section .content p
        {
            color: #fff;
            font-size: 1.2em;
        }
      </style>
      `,
    },
    {
      id: 'my_form1',
      label: '<p style = "font-size: 12px; font-weight:500">Block#1</p>',
      category: 'my_form',
      media: `
      `,
      content: ``
    },
    {
      id: 'my_test1',
      label: '<p style = "font-size: 12px; font-weight:500">Testmonials#1</p>',
      category: 'my_test',
      media: `
      `,
      content: `
      <div class="testimonials">
        <div class="inner">
          <h1>Testimonials</h1>
          <div class="border"></div>
          <div class="row">
            <div class="col">
              <div class="testimonial">
                <img src="" alt = "Image">
                <div class="name">Full Name</div>
                <div class="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque, obcaecati hic qui odio dolorum!</p>
              </div>
            </div>
            
            <div class="col">
              <div class="testimonial">
                <img src="" alt = "Image">
                <div class="name">Full Name</div>
                <div class="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque, obcaecati hic qui odio dolorum!</p>
              </div>
            </div>
            
            <div class="col">
              <div class="testimonial">
                <img src="" alt = "Image">
                <div class="name">Full Name</div>
                <div class="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque, obcaecati hic qui odio dolorum!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }
        .testimonials {
          padding: 40px 0;
          background: #f1f1f1;
          color: #434343;
          text-align: center;
        }
        .testimonials .inner {
          max-width: 1200px;
          margin: auto;
          overflow: hidden;
          padding: 0 20px;
        }
        .testimonials .border {
          width: 160px;
          height: 5px;
          background: #6ab04c;
          margin: 26px auto;
        }
        .testimonials .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .testimonials .col {
          flex: 33.33%;
          max-width: 33.33%;
          padding: 15px;
        }
        .testimonial {
          background: #fff;
          padding: 30px;
        }
        .testimonial img {
          width: 100px;
          height: 100%;
          border-radius: 50%;
        }
        .testimonials .name {
          font-size: 20px;
          text-transform: uppercase;
          margin: 20px 0;
        }
        .testimonials .stars {
          color: #6ab04c;
          margin-bottom: 20px;
        }
        @media screen and (max-width: 960px) {
          .testimonials .col {
            flex: 100%;
            max-width: 80%;
          }
        }
        @media screen and (max-width: 600px) {
          .testimonials .col {
            flex: 100%;
            max-width: 100%;
          }
        }
      </style>
      `
    },
    {
      id: 'my_test2',
      label: '<p style = "font-size: 12px; font-weight:500">Testmonials#2</p>',
      category: 'my_test',
      media: `
      `,
      content: `
      <div class = "testminials2">
      <div class="container">
        <div class="feedback">
          <img src="" alt="Image">
          <div class="content"><h1>This is the best thing...</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dolor necessitatibus. Hic magnam, unt facilis et. Assumenda, repellat nihil.</p>
            <h4>Mark zekerburg</h4>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="feedback">
          <img src="" alt="Image">
          <div class="content"><h1>This is the best thing...</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dolor necessitatibus. Hic magnam, unt facilis et. Assumenda, repellat nihil.</p>
            <h4>Mark zekerburg</h4>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="feedback">
          <img src="" alt="Image">
          <div class="content"><h1>This is the best thing</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dolor necessitatibus. Hic magnam, unt facilis et. Assumenda, repellat nihil.</p>
            <h4>Mark zekerburg</h4>
          </div>
        </div>
      </div>
      </div>

      <style>
        .testminials2 .container{
          width:80%;
          background-image: url("https://i.ibb.co/HgLLxcd/Group-1.jpg");
            margin:25% auto;
            display:flex;
            justify-content:space-around;
            align-items:center;
            border-radius:6px;

          }
          .testminials2 .feedback {
              display:flex;
            padding:1.5rem;
              justify-content:space-around;

            

          }
          .testminials2 .container .feedback img{
            width:150px;
            height:150px;
            border-radius:50%;
            margin: auto;
          }


          .testminials2 .content{
            width:65%;
            position:relative;
          }
          .testminials2 .content:before{
            content:"''";
              font-size:180px;
            position:absolute;
            right:100px;
            top: -40px;
            opacity:.3;
            color:#4AD295;
            
          }
          .testminials2 p{
            font-family: 'Montserrat', sans-serif;
            max-width:80%;
            font-style:italic;
            font-weight:100;
            z-index:999;
          }

          .testminials2 h4 {
            color:#4AD295;
            font-style:italic;
          }
          @media only screen and (max-width: 700px) {
            .testminials2 .feedback {
              display:block;
            text-align:center;
            }
            .testminials2 .content{
              width:100%;
            }
            .testminials2 p{
            max-width:100%;
            }
          }  
      </style>
      `
    },
    ]
  },

  layerManager: {
    appendTo: '.layers-container'
  },
  panels: {
    defaults: [
      // {
      //   id: 'panel-switcher',
      //   el: '.panel__switcher',
      //   buttons: [{
      //       id: 'show-blocks',
      //       active: true,
      //       label: 'Blocks',
      //       command: 'show-blocks',
      //       togglable: false,
      //     }, {
      //       id: 'show-layers',
      //       active: true,
      //       label: 'Layers',
      //       command: 'show-layers',
      //       togglable: false,
      //     }, {
      //       id: 'show-style',
      //       active: true,
      //       label: 'Styles',
      //       command: 'show-styles',
      //       togglable: false,
      //     }],
      // },

      {
        id: 'panel-devices',
        el: '.panel__devices',
        buttons: [{
            id: 'device-desktop',
            label: '<i class="fa-solid fa-display" style="color: rgb(107, 124, 147);font-size: 14px;"></i>',
            command: 'set-device-desktop',
            active: true,
            togglable: false,
          }, {
            id: 'device-mobile',
            label: '<i class="fa-solid fa-mobile-screen-button" style="color: rgb(107, 124, 147);font-size: 14px;"></i>',
            command: 'set-device-mobile',
            togglable: false,
        }],
      },
    ]
  },
  selectorManager: {
    appendTo: '.styles-container'
  },
  styleManager: {
    appendTo: '.styles-container',
    sectors: [{
      name: 'General',
      open: true,
      buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
      properties: [
        {
          id: 'float',
          options:[
            {value: 'none', name: '<i class="fa-solid fa-xmark"></i>'},
            {value: 'left', name: '<i class="fa-solid fa-align-left"></i>'},
            {value: 'right', name: '<i class="fa-solid fa-align-right"></i>'},
          ]
        },
        {
          id: 'position',
          type: 'select',
        },
        {
          property: 'top',
          type: 'slider'
        },
        {
          property: 'bottom',
          type: 'slider'
        },
        {
          property: 'left',
          type: 'slider'
        },
        {
          property: 'right',
          type: 'slider'
        },
      ]
    },{
        name: 'Dimension',
        open: true,
        buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
        properties: [
          {
            property: 'width',
            type: 'slider'
          },
          {
            property: 'height',
            type: 'slider'
          },
          {
            property: 'max-width',
            type: 'slider'
          },
          {
            property: 'min-height',
            type: 'slider'
          },
        ]
      },{
        name: 'Typography',
        open: true,
        buildProps: ['font-family', 'font-weight', 'font-size', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
        properties: [
          {
            id: 'text-align',
            options: [
              { value: 'left', name: '<i class="fa-solid fa-align-left"></i>' },
              { value: 'center', name: '<i class="fa-solid fa-align-center"></i>' },
              { value: 'right', name: '<i class="fa-solid fa-align-right"></i>' },
              { value: 'justify', name: '<i class="fa-solid fa-align-justify"></i>' },
            ],
          },
          {  
            property: 'font-family',
            name: 'Font',
            options: fonts,
          },
          {
            property: 'font-size',
            type: 'slider'
          },
          {
            property: 'line-height',
            type: 'slider'
          },
          {
            property: 'letter-spacing',
            type: 'slider'
          }
        ]
      },{
        name: 'Decorations',
        open: true,
        buildProps: ['opacity', 'border-radius', 'border', 'box-shadow', 'background', 'background-color', 'gradient'],
        properties: [
          {
            name: 'Gradient',
            property: 'background-image',
            type: 'gradient',
            defaults: 'none'
          }
        ]
      },
      {
        name: 'Extra',
        open: true,
        buildProps: ['transition', 'perspective', 'transform'],
        properties: [
          {
            property: 'perspective',
            type: 'slider'
          }
        ]
      },
      {
        name: 'Flex',
        open: true,
        buildProps: ['flex-container', 'flex-direction', 'justify-content', 'align-items', 'order', 'align-self'],
        properties: [
          {
            id: 'flex-container',
            type: 'select',
            name: 'Flex-Container',
            property: 'flex-container',
            default: 'disable',
            options: [
              { value: 'disable', name: 'Disable' },
              { value: 'enable', name: 'Enable' },
            ],
         },
         {
            id: 'flex-direction',
            name: 'Direction',
            property: 'flex-direction',
            options: [
              { value: 'row', name: 'Row' },
              { value: 'row-reverse', name: 'Row-reverse' },
              { value: 'column', name: 'Column' },
              { value: 'column-reverse', name: 'Column-reverse' },
            ],
         },
         {
            id: 'justify',
            name: 'Justify',
            property: 'justify-content',
         },
        ]
      },]
  },

  traitManager: {
    appendTo: '.styles-container',
  },

  storageManager: {
    type: 'local',
    autosave: true,
    autoload: true,
    stepsBeforeSave: 1,
    options: {
      local: {
        key: 'gjsProject',
      },
    }
  },
  
});



editor.Panels.addPanel({
  id: 'panel-top',
  el: '.panel__top',
});
editor.Panels.addPanel({
  id: 'basic-actions',
  el: '.panel__basic-actions',
  buttons: [
    {
      id: 'visibility',
      active: true,
      className: 'btn-toggle-borders',
      label: '<i class="fa-solid fa-eye" style="color: rgb(107, 124, 147); font-size: 14px;"></i>',
      command: 'sw-visibility',
    },
  ],
});

editor.Panels.addPanel({
  id: 'panel_options',
  el: '.panel__options',
  buttons: [{
    id: 'undo',
    label: '<i class="fa-solid fa-arrow-rotate-left" style="color: rgb(107, 124, 147); font-size: 14px;"></i>',
    command(editor) {
      const um = editor.UndoManager;
      um.undo();
    },
    active: false,
  }, {
    id: 'redo',
    label: '<i class="fa-solid fa-arrow-rotate-right" style="color: rgb(107, 124, 147); font-size: 14px;"></i>',
    command(editor) {
      const um = editor.UndoManager;
      um.redo();
    },
      active: false,
  },{
    id: 'export',
    className: 'btn-open-export',
    label: '<i class="fa-solid fa-code" style="color: rgb(107, 124, 147); font-size: 14px;"></i>',
    command: 'export-template',
    context: 'export-template',
  },
  {
    id: 'fullscreen',
    label: '<i class="fa-solid fa-expand" style="color: rgb(107, 124, 147); font-size: 14px;"></i>',
    command: 'fullscreen',
    active: false,
  }, {
    id: 'delete_all',
    label: '<i class="fa-solid fa-trash" style="color: rgb(107, 124, 147); font-size: 14px;"></i>',
    command: 'clear-canvas',
    active: false,
  },
]
});

editor.on('run:export-template:before', opts => {
  console.log('Before the command run');
  if (0) {
    opts.abort = 1;
  }
});
editor.on('run:export-template', () => console.log('After the command run'));
editor.on('abort:export-template', () => console.log('Command aborted'));

editor.Commands.add('show-layers', {
  getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
  getLayersEl(row) { return row.querySelector('.layers-container') },
  
  run(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor));
    lmEl.style.display = '';
  },
  stop(editor, sender) {
    const lmEl = this.getLayersEl(this.getRowEl(editor));
    lmEl.style.display = 'none';
  },
});

editor.Commands.add('show-blocks', {
  getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
  getBlockEl(row) {return row.querySelector('.blocks-container')},
  run(editor, sender) {
    const bmEl = this.getBlockEl(this.getRowEl(editor));
    bmEl.style.display = '';
  },
  stop(editor, sender) {
    const bmEl = this.getBlockEl(this.getRowEl(editor));
    bmEl.style.display = 'none';
  },
})

editor.Commands.add('show-styles', {
  getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
  getStyleEl(row) { return row.querySelector('.styles-container') },
  getTraitsEl(editor) {
    const row = editor.getContainer().closest('.editor-row');
    return row.querySelector('.styles-container');
  },
  run(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = '';
    this.getTraitsEl(editor).style.display = '';
  },
  stop(editor, sender) {
    const smEl = this.getStyleEl(this.getRowEl(editor));
    smEl.style.display = 'none';
    this.getTraitsEl(editor).style.display = 'none';
  },
});

editor.Commands.add('set-device-desktop', {
  run: editor => editor.setDevice('Desktop')
});
editor.Commands.add('set-device-mobile', {
  run: editor => editor.setDevice('Mobile')
});



editor.Commands.add('clear-canvas', function() {
  // if(confirm('Are you sure to clean the canvas?')) {
  //   editor.runCommand('core:canvas-clear')
  //   setTimeout(function(){ localStorage.clear()}, 0)
  // }

  modal.style.display = "block"; 
});


const um = editor.UndoManager;
const config = um.getConfig();

editor.Commands.add('undo-canvas', {
  run: editor => editor.UndoManager.clear()
});


//Custom blocks javascript
//************************************************************************************

editor.DomComponents.addType('custom-carousel',{ 
  model:{ 
    defaults:{ 
      script: 
        function () { 
          const slider = document.querySelector('.gallery');
          let isDown = false;
          let startX;
          let scrollLeft;

          slider.addEventListener('mousedown', e => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
          });
          slider.addEventListener('mouseleave', _ => {
            isDown = false;
            slider.classList.remove('active');
          });
          slider.addEventListener('mouseup', _ => {
            isDown = false;
            slider.classList.remove('active');
          });
          slider.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const SCROLL_SPEED = 3;
            const walk = (x - startX) * SCROLL_SPEED;
            slider.scrollLeft = scrollLeft - walk;
          });
        } 
    }, 
    isComponent(){ 
      return true 
    } 
  }, 
})

editor.RichTextEditor.remove('link');

editor.RichTextEditor.add('dropcap',
{
    icon: '<b>D<sup>c</sup></b>',
    attributes: {title: 'Dropcap'},
    result: rte =>
    {
        var component = editor.getSelected();
        
        if(component.is('text') && component.getClasses().includes('dropCaps'))
        {
            component.replaceWith(`${component.get('content')}`);
        }
        else
        {
            var range = rte.selection().getRangeAt(0);
            
            var container = range.commonAncestorContainer;
            
            if (container.nodeType == 3)
                container = container.parentNode;
            
            if(container.nodeName == "SPAN" && container.classList.contains('dropCaps'))
            {
                var parent = container.parentNode;
                var content = document.createTextNode(container.innerHTML);
                
                // insert all our children before ourselves.
                parent.insertBefore(content, container);
                
                parent.removeChild(container);
            }
            else
            {
                rte.insertHTML(`<span class="dropCaps">${rte.selection()}</span>`);
            }
        }
  }
});

editor.RichTextEditor.add('superscript',
{
  icon: '<b>S<sup>s</sup></b>',
  attributes: {title: 'Superscript'},
  result: rte => rte.exec('superscript')
});

editor.RichTextEditor.add('subscript',
{
  icon: '<b>S<sub>s</sub></b>',
  attributes: {title: 'Subscript'},
  result: rte => rte.exec('subscript')
});

editor.RichTextEditor.add('hyperlink',
{
    icon: '&#128279;',
    attributes: {title: 'Hyperlink'},
    result: rte =>
    {
        var component = editor.getSelected();
        
        if(component.is('link'))
        {
            component.replaceWith(`${component.get('content')}`);
        }
        else
        {
            var range = rte.selection().getRangeAt(0);
            
            var container = range.commonAncestorContainer;
            if (container.nodeType == 3)
                container = container.parentNode;
            
            if(container.nodeName === "A")
            {
                var sel = rte.selection();
                sel.removeAllRanges();
                range = document.createRange();
                range.selectNodeContents(container);
                sel.addRange(range);
                rte.exec('unlink');
            }
            else
            {
                var url = window.prompt('Enter the URL to link to:');
                if (url)
                    rte.insertHTML(`<a class="link" href="${url}">${rte.selection()}</a>`);
            }
        }
  }
});

editor.RichTextEditor.add('indent',
{
  icon: '&#8594;',
  attributes: {title: 'Indent'},
  result: rte => rte.exec('indent')
});

editor.RichTextEditor.add('outdent',
{
  icon: '&#8592;',
  attributes: {title: 'Outdent'},
  result: rte => rte.exec('outdent')
});

editor.RichTextEditor.add('orderedList',
{
  icon: '1.',
  attributes: {title: 'Ordered List'},
  result: rte => rte.exec('insertOrderedList')
});

editor.RichTextEditor.add('unorderedList',
{
  icon: '&#8226;',
  attributes: {title: 'Unordered List'},
  result: rte => rte.exec('insertUnorderedList')
});



const blockManager = editor.Blocks;

//*********************************************************************************************************

blockManager.add('text',{
    id: 'text',
    label: '<p style = "font-size: 12px; font-weight:500">Text</p>',
    media: `<i class="fa-solid fa-font" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
    content: `<div data-gjs-type="text">Insert your text here</div>`,
    category: 'Text'
  },);
blockManager.add('title', 
  {
    id: 'title',
    label: '<p style = "font-size: 12px; font-weight:500">Title</p>',
    category: 'Text',
    media: `<i class="fa-solid fa-heading" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
    content: `<h1 style="padding: 20px" data-gjs-custom-name="Text Headline">Insert your title here</h1>`,
    attributes: {
      title: 'Insert h1 block'
    }
  });
blockManager.add('content box', {
      id: 'content_box',
      label: '<p style = "font-size: 12px; font-weight:500">Content Box</p>',
      media:`<i class="fa-solid fa-window-maximize" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `
        <section style="min-height: 30px; padding: 10px" data-gjs-custom-name="Content Box">
          <div data-gjs-type="text" style="font-size: 40px; padding: 15px" data-gjs-custom-name="Text Headline">Head Title</div>
          <div data-gjs-type="text" style="padding: 10px">
            Insert your text here
          </div>
        </section>
      `,
      category: 'Text'
    }, )

    blockManager.add('Bulleted list', {
      id: 'bulleted_list',
      label: '<p style = "font-size: 12px; font-weight:500">Bulleted List</p>',
      media:`<i class="fa-solid fa-list-ul" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content:`
      <ul class="check-list" data-gjs-custom-name="Bulleted List">
        <li>List1</li>
        <li>List2</li>
        <li>List3</li>
      </ul>
      <style>
        .check-list {
          margin: 0;
          padding-left: 1.2rem;
        }
        
        .check-list li {
          position: relative;
          list-style-type: none;
          padding-left: 2.5rem;
          margin-bottom: 0.5rem;
          font-size: 30px;
        }
        
        .check-list li:before {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: -2px;
          width: 7px;
          height: 18px;
          border-width: 0 2px 2px 0;
          border-style: solid;
          border-color: #00a8a8;
          transform-origin: bottom left;
          transform: rotate(45deg);
        }
      </style>
      `,
      category: 'Text'
    }, )
blockManager.add('image', {
      id: 'image',
      label: '<p style = "font-size: 12px; font-weight:500">Image</p>',
      media: `<i class="fa-solid fa-image" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      select: true,
      content: { 
        type: 'image',
        style: {
          'width': '100%'
        }
      },
      activate: true,
      category: 'Media',
    }, );
blockManager.add('video', {
      id: 'video',
      label: '<p style = "font-size: 12px; font-weight:500">Video</p>',
      media: `<i class="fa-solid fa-video" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      // select: true,
      content: { 
        type: 'video',
        style: {
          'width': '100%'
        }
      },
      // activate: true,
      category: 'Media'
    }, );
blockManager.add('audio', {
      id: 'audio',
      label: '<p style = "font-size: 12px; font-weight:500">Audio</p>',
      media: `<i class="fa-solid fa-volume-high" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      // select: true,
      content: `
        <audio controls data-gjs-custom-name="Audio">
          <source src="horse.ogg" type="audio/ogg">
          <source src="horse.mp3" type="audio/mpeg">
        </audio>
      `,
      // activate: true,
      category: 'Media'
    }, );
blockManager.add('carousel', {
      id: 'carousel',
      label: '<p style = "font-size: 12px; font-weight:500">Carousel</p>',
      media: `<i class="fa-solid fa-images" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      select: true,
      content: `
      <div data-gjs-type="custom-carousel" data-gjs-custom-name="Carousel">
        <ul class="gallery">
          <li class="carousel" style="background: #f6bd60;"></li>
          <li class="carousel" style="background: #f7ede2;"></li>
          <li class="carousel" style="background: #f5cac3;"></li>
          <li class="carousel" style="background: #84a59d;"></li>
          <li class="carousel" style="background: #f28482;"></li>
        </ul>
      <style>
      .gallery {
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(10, 80vw);
        grid-template-rows: 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        overflow: scroll;
        height: 90vh;
        scroll-snap-type: both mandatory;
        scroll-padding: 1rem;
      }
      
      .active {
        scroll-snap-type: unset;
      }
      
      .carousel {
        scroll-snap-align: center;
        display: inline-block;
        border-radius: 3px;
        font-size: 0;
      }
      </style>
      </div>
      `,
      activate: true,
      category: 'Media'
    },);
blockManager.add('4_columns', {
      id: '4_columns',
      label: '<p style = "font-size: 12px; font-weight:500">4 Columns</p>',
      media: `<?xml version="1.0" encoding="iso-8859-1"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" color="rgb(172, 201, 222)"
         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <g>
        <g>
          <g>
            <rect x="277.333" width="85.333" height="512"/>
            <rect x="149.333" width="85.333" height="512"/>
            <rect width="106.667" height="512"/>
            <rect x="405.333" width="106.667" height="512"/>
          </g>
        </g>
      </g>
      </svg>
      `,
      content: `
      <div style = "display: flex;justify-content: flex-start; align-items: stretch; flex-wrap: nowrap; padding: 10px;" data-gjs-custom-name="Section">
        <div style = "width: 25%; min-height: 30px" data-gjs-custom-name="Row"></div>   
        <div style = "width: 25%; min-height: 30px" data-gjs-custom-name="Row"></div>   
        <div style = "width: 25%; min-height: 30px" data-gjs-custom-name="Row"></div>
        <div style = "width: 25%; min-height: 30px" data-gjs-custom-name="Row"></div>
      </div>
      `,
      category: 'Column Layout'
    }, );
blockManager.add('3_columns', {
      id: '3_columns',
      label: '<p style = "font-size: 12px; font-weight:500">3 Columns</p>',
      attributes: { class:'gjs-block-section' },
      media:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" color="rgb(172, 201, 222)"
      viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <g>
        <g>
          <g>
            <rect width="149.333" height="512"/>
            <rect x="192" width="128" height="512"/>
            <rect x="362.667" width="149.333" height="512"/>
          </g>
        </g>
      </g>
      </svg>
      `,
      content: `
      <div style = "display: flex;justify-content: flex-start; align-items: stretch; flex-wrap: nowrap; padding: 10px; " data-gjs-custom-name="Section">
        <div style = "width: 33.33%; min-height: 30px" data-gjs-custom-name="Row"></div>   
        <div style = "width: 33.33%; min-height: 30px" data-gjs-custom-name="Row"></div>   
        <div style = "width: 33.33%; min-height: 30px" data-gjs-custom-name="Row"></div>
      </div>
      `,
      category: 'Column Layout'
    }, );
blockManager.add('2_columns', {
      id: '2_columns',
      label: '<p style = "font-size: 12px; font-weight:500">2 Columns</p>',
      attributes: { class:'gjs-block-section' },
      media:`<?xml version="1.0" encoding="iso-8859-1"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" color="rgb(172, 201, 222)"
         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <g>
        <g>
          <g>
            <rect width="234.667" height="512"/>
            <rect x="277.333" width="234.667" height="512"/>
          </g>
        </g>
      </g>
      </svg>
      `,
      content: `
      <div style = "display: flex;justify-content: flex-start; align-items: stretch; flex-wrap: nowrap; padding: 10px; " data-gjs-custom-name="Section">
        <div style = "width: 50%; min-height: 30px" data-gjs-custom-name="Row"></div>   
        <div style = "width: 50%; min-height: 30px" data-gjs-custom-name="Row"></div>   
      </div>
      `,
      category: 'Column Layout'
    }, );
blockManager.add('row', {
      id: 'row',
      label: '<p style = "font-size: 12px; font-weight:500">Row</p>',
      attributes: { class:'gjs-block-section' },
      media: `<?xml version="1.0" encoding="iso-8859-1"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" color="rgb(172, 201, 222)"
         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <path style="fill:#7DD2F0;" d="M494.03,185.943H17.97c-5.561,0-10.067,4.507-10.067,10.067v119.98
        c0,5.559,4.508,10.067,10.067,10.067H494.03c5.561,0,10.067-4.508,10.067-10.067V196.01
        C504.097,190.45,499.589,185.943,494.03,185.943z"/>
      <g>
        <rect x="195.909" y="219.987" style="fill:#FFFFFF;" width="120.178" height="72.022"/>
        <rect x="41.577" y="219.987" style="fill:#FFFFFF;" width="120.178" height="72.022"/>
        <rect x="350.238" y="219.987" style="fill:#FFFFFF;" width="120.178" height="72.022"/>
      </g>
      <path style="opacity:0.1;enable-background:new    ;" d="M81.664,315.99V196.01c0-5.561,4.508-10.067,10.067-10.067H17.97
        c-5.559,0-10.067,4.507-10.067,10.067v119.98c0,5.559,4.508,10.067,10.067,10.067h73.761
        C86.171,326.057,81.664,321.549,81.664,315.99z"/>
      <path d="M494.03,333.96h-60.21c-4.366,0-7.903-3.538-7.903-7.903s3.537-7.903,7.903-7.903h60.21c1.194,0,2.164-0.97,2.164-2.164
        V196.01c0-1.193-0.97-2.164-2.164-2.164H109.116c-4.366,0-7.903-3.538-7.903-7.903c0-4.365,3.537-7.903,7.903-7.903H494.03
        c9.908,0,17.97,8.061,17.97,17.97v119.98C512,325.898,503.938,333.96,494.03,333.96z"/>
      <path d="M402.208,333.96H17.97C8.061,333.96,0,325.898,0,315.989V196.01c0-9.908,8.061-17.97,17.97-17.97h59.534
        c4.366,0,7.903,3.538,7.903,7.903c0,4.365-3.537,7.903-7.903,7.903H17.97c-1.194,0-2.164,0.97-2.164,2.164v119.98
        c0,1.194,0.97,2.164,2.164,2.164h384.238c4.366,0,7.903,3.538,7.903,7.903S406.573,333.96,402.208,333.96z"/>
      <path d="M316.09,299.914H195.909c-4.366,0-7.903-3.538-7.903-7.903v-72.023c0-4.365,3.537-7.903,7.903-7.903H316.09
        c4.366,0,7.903,3.538,7.903,7.903v72.023C323.993,296.376,320.454,299.914,316.09,299.914z M203.812,284.108h104.375v-56.217
        H203.812V284.108z"/>
      <path d="M161.758,299.914H41.577c-4.366,0-7.903-3.538-7.903-7.903v-72.023c0-4.365,3.537-7.903,7.903-7.903h120.181
        c4.366,0,7.903,3.538,7.903,7.903v72.023C169.661,296.376,166.122,299.914,161.758,299.914z M49.48,284.108h104.375v-56.217H49.48
        V284.108z"/>
      <path d="M470.422,299.914H350.241c-4.366,0-7.903-3.538-7.903-7.903v-72.023c0-4.365,3.537-7.903,7.903-7.903h120.181
        c4.366,0,7.903,3.538,7.903,7.903v72.023C478.325,296.376,474.787,299.914,470.422,299.914z M358.144,284.108h104.375v-56.217
        H358.144V284.108z"/>
      </svg>
      `,
      content: `<div style = "display: flex;justify-content: flex-start; align-items: stretch; flex-wrap: nowrap; padding: 10px; width: 100%; min-height: 30px;"  data-gjs-custom-name="Row">
      <div style = ""></div>
    </div>`,
      category: 'Column Layout'
    }, );
blockManager.add('section', {
      id: 'section',
      label: '<p style = "font-size: 12px; font-weight:500">Section</p>',
      attributes: { class:'gjs-block-section' },
      media: `<?xml version="1.0" encoding="iso-8859-1"?>
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" color="rgb(172, 201, 222)"   viewBox="0 0 58 58" xml:space="preserve">
      <g>
        <polygon style="fill:#acc9de;" points="42,16 42,0 0,0 0,42 16,42 16,58 58,58 58,16 	"/>
        <rect x="16" y="16" style="fill:#92c0e1;" width="26" height="26"/>
      </g>
      </svg>
      `,
      content: `<section style = "display: flex;justify-content: flex-start; align-items: stretch; flex-wrap: nowrap; padding: 10px; ">
      <div style = "width: 100%; min-height: 30px" data-gjs-custom-name="Row"></div>   
    </section>`,
      category: 'Column Layout'
    }, );
blockManager.add('button', {
      id: 'button',
      label: '<p style = "font-size: 12px; font-weight:500">Button</p>',
      attributes: { class:'gjs-block-section' },
      media: `<i class="fa-solid fa-hand-point-up" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `<button data-gjs-droppable="false" type="submit" title="Hello">Button</button>`,
      category: 'Form'
    }, );
blockManager.add('form_input', {
      id: 'form_input',
      label: '<p style = "font-size: 12px; font-weight:500">Form Input</p>',
      attributes: { class:'gjs-block-section' },
      media: `<i class="fa-solid fa-pen-to-square" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `<input data-gjs-type = "input" data-gjs-custom-name="Input"></input>`,
      category: 'Form'
    },);
blockManager.add('form_textarea', {
      id: 'form_textarea',
      label: '<p style = "font-size: 12px; font-weight:500">Form Textarea</p>',
      attributes: { class:'gjs-block-section' },
      media: `<i class="fa-solid fa-clipboard" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `<textarea data-gjs-type = "textarea" data-gjs-custom-name="Textarea"></textarea>`,
      category: 'Form'
    },);
blockManager.add('form_select', {
      id: 'form_select',
      label: '<p style = "font-size: 12px; font-weight:500">Form Select</p>',
      attributes: { class:'gjs-block-section' },
      media: `<i class="fa-solid fa-check-to-slot" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `<select data-gjs-type = "select" data-gjs-custom-name="Select">
        <option data-gjs-type = "option">option1</option>
        <option data-gjs-type = "option">option2</option>
      </select>`,
      category: 'Form'
    }, );
blockManager.add('share_btn', {
      id: 'share_btn',
      label: '<p style = "font-size: 12px; font-weight:500">Share Buttons</p>',
      attributes: { class:'gjs-block-section' },
      media: `<i class="fa-brands fa-twitter" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `
      <div style="width: 100%; text-align: -webkit-center" data-gjs-custom-name="Share Button Group">
      <div class ="frame">
        <a href="#" class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="#3b5998" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </a>
        <a href="#" class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="#00acee" class="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
        </a>
        <a href="#" class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="#ea4c89" class="bi bi-dribbble" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"/>
          </svg>
        </a>
        <a href="#" class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="#0e76a8" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
        </a>
        <a href="#" class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="60%" height="60%" fill="#ee4056">
            <path d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z"/>
          </svg>
        </a>
        <a href="#" class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
        </a>
      </div>
      </div>
      <style>
      .frame{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 80px;
        width: 350px;
        position: relative;
         box-shadow:
         -7px -7px 20px 0px #fff9,
         -4px -4px 5px 0px #fff9,
         7px 7px 20px 0px #0002,
         4px 4px 5px 0px #0001,
         inset 0px 0px 0px 0px #fff9,
         inset 0px 0px 0px 0px #0001,
         inset 0px 0px 0px 0px #fff9,        inset 0px 0px 0px 0px #0001;
       transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
         border-radius: 10px;
         align: center;
      }
      
      .btn{
        height: 35px;
        width: 35px;
        border-radius: 3px;
        background: #e0e5ec;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
        box-shadow:
         -7px -7px 20px 0px #fff9,
         -4px -4px 5px 0px #fff9,
         7px 7px 20px 0px #0002,
         4px 4px 5px 0px #0001,
         inset 0px 0px 0px 0px #fff9,
         inset 0px 0px 0px 0px #0001,
         inset 0px 0px 0px 0px #fff9,        inset 0px 0px 0px 0px #0001;
       transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
        font-size: 16px;
        color: rgba(42, 52, 84, 1);
        text-decoration: none;
      }
      .btn:active{
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                    -4px -4px 6px 0 rgba(116, 125, 136, .2), 
          inset -4px -4px 6px 0 rgba(255,255,255,.5),
          inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
      }
      </style>
      `,
      category: 'Social'
    }, );
blockManager.add('menu', {
      id: 'menu',
      label: '<p style = "font-size: 12px; font-weight:500">Menu</p>',
      attributes: { class:'gjs-block-section' },
      media: `<i class="fa-solid fa-bars" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `
      <div class="topnav" data-gjs-custom-name="Menu">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <style>
      .topnav {
        overflow: hidden;
      }
      
      .topnav a {
        float: left;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }
      
      .topnav a:hover {
        color: black;
      }
      </style>
      `,
      category: 'Other'
    }, );
blockManager.add('hori_line', {
      id: 'hori_line',
      label: '<p style = "font-size: 12px; font-weight:500">Horizontal Line</p>',
      attributes: { class:'gjs-block-section' },
      media: `<?xml version="1.0" encoding="iso-8859-1"?>
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="40px" height="40px" viewBox="0 0 290.658 290.658" style="enable-background:new 0 0 290.658 290.658;"
         xml:space="preserve">
      <g>
        <g>
          <rect y="139.474" style="fill:rgb(172, 201, 222);" width="290.658" height="11.711"/>
        </g>
      </g>
      </svg>
      `,
      content: `<hr style = "margin: 20px; color: black" data-gjs-custom-name="Horizontal Line"></hr>`,
      category: 'Other'
    }, );
blockManager.add('faq', {
      id: 'faq',
      label: '<p style = "font-size: 12px; font-weight:500">FAQ</p>',
      attributes: { class:'gjs-block-section' },
      media: `<i class="fa-regular fa-circle-question" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `

      <div class="faq-content">
        <div class="faq-question" data-gjs-custom-name="FAQ">
          <input id="q1" type="checkbox" class="panel" checked>
          <div class="plus">+</div>
          <label for="q1" class="panel-title">What is the meaning of life?</label>
          <div class="panel-content">42</div>
        </div>
      </div>
      <style>
      .faq-header{
        font-size: 42px;
        border-bottom: 1px dotted #ccc;
        padding: 24px;
      }
      
      .faq-content {
        margin: 0 auto;
      }
      
      .faq-question {
        padding: 20px 0;
        border-bottom: 1px dotted #ccc;
      }
      
      .panel-title {
        font-size: 24px;
        width: 100%;
        position: relative;
        margin: 0;
        padding: 10px 10px 0 48px;
        display: block;
        cursor: pointer;
      }
      
      .panel-content {
        font-size: 20px;
        padding: 0px 14px;
        margin: 0 40px;
        height: 0;
        overflow: hidden;
        z-index: -1;
        position: relative;
        opacity: 0;
        -webkit-transition: .4s ease;
        -moz-transition: .4s ease;
        -o-transition: .4s ease;
        transition: .4s ease;
      }
      
      .panel:checked ~ .panel-content{
        height: auto;
        opacity: 1;
        padding: 14px;
      }
      
      .plus {
        position: absolute;
        margin-left: 20px;
        margin-top: 4px;
        z-index: 5;
        font-size: 42px;
        line-height: 100%;
        -webkit-user-select: none;    
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
        -webkit-transition: .2s ease;
        -moz-transition: .2s ease;
        -o-transition: .2s ease;
        transition: .2s ease;
      }
      
      .panel:checked ~ .plus {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      
      .panel {
        display: none;
      }
      </style>
      `,
      category: 'Other'
    },);


//*********************************************************************************************************


const blocks = blockManager.getAll();
const filtered_Text = blocks.models.filter(block => block.attributes.category.id == 'Text');
const filtered_Media = blocks.models.filter(block => block.attributes.category.id == 'Media');
const filtered_Column = blocks.models.filter(block => block.attributes.category.id == 'Column Layout');
const filtered_Form = blocks.models.filter(block => block.attributes.category.id == 'Form');
const filtered_Social = blocks.models.filter(block => block.attributes.category.id == 'Social');
const filtered_Other = blocks.models.filter(block => block.attributes.category.id == 'Other');
const filtered_Other_Some = blocks.models.filter(block => block.get('category') == 'Other');
const filtered_my_block = blocks.models.filter(block => block.get('category') == 'my_block');
const filtered_my_form = blocks.models.filter(block => block.get('category') == 'my_form');
const filtered_my_feature = blocks.models.filter(block => block.get('category') == 'my_feature');
const filtered_my_footer = blocks.models.filter(block => block.get('category') == 'my_footer');
const filtered_my_team = blocks.models.filter(block => block.get('category') == 'my_team');
const filtered_my_welcome = blocks.models.filter(block => block.get('category') == 'my_welcome');
const filtered_my_price = blocks.models.filter(block => block.get('category') == 'my_price');
const filtered_my_header = blocks.models.filter(block => block.get('category') == 'my_header');
const filtered_my_test = blocks.models.filter(block => block.get('category') == 'my_test');

const newBlocksEl_Text = blockManager.render(filtered_Text, { external: true });
const newBlocksEl_Media = blockManager.render(filtered_Media, { external: true });
const newBlocksEl_Column = blockManager.render(filtered_Column, { external: true });
const newBlocksEl_Form = blockManager.render(filtered_Form, { external: true });
const newBlocksEl_Social = blockManager.render(filtered_Social, { external: true });
const newBlocksEl_Other = blockManager.render(filtered_Other, { external: true });
const newBlocksEl_Other_Some = blockManager.render(filtered_Other_Some, { external: true });
const newBlocksEl_my_block = blockManager.render(filtered_my_block, { external: true });
const newBlocksEl_my_form = blockManager.render(filtered_my_form, { external: true });
const newBlocksEl_my_feature = blockManager.render(filtered_my_feature, { external: true });
const newBlocksEl_my_footer = blockManager.render(filtered_my_footer, { external: true });
const newBlocksEl_my_team = blockManager.render(filtered_my_team, { external: true });
const newBlocksEl_my_welcome = blockManager.render(filtered_my_welcome, { external: true });
const newBlocksEl_my_price = blockManager.render(filtered_my_price, { external: true });
const newBlocksEl_my_header = blockManager.render(filtered_my_header, { external: true });
const newBlocksEl_my_test = blockManager.render(filtered_my_test, { external: true });

document.getElementById('texts').appendChild(newBlocksEl_Text);
document.getElementById('medias').appendChild(newBlocksEl_Media);
document.getElementById('columns').appendChild(newBlocksEl_Column);
document.getElementById('forms').appendChild(newBlocksEl_Form);
document.getElementById('social').appendChild(newBlocksEl_Social);
document.getElementById('others').appendChild(newBlocksEl_Other);
document.getElementById('others').appendChild(newBlocksEl_Other_Some);
document.getElementById('my_blocks').appendChild(newBlocksEl_my_block);
document.getElementById('my_form').appendChild(newBlocksEl_my_form);
document.getElementById('my_feature').appendChild(newBlocksEl_my_feature);
document.getElementById('my_footer').appendChild(newBlocksEl_my_footer);
document.getElementById('my_team').appendChild(newBlocksEl_my_team);
document.getElementById('my_welcome').appendChild(newBlocksEl_my_welcome);
document.getElementById('my_price').appendChild(newBlocksEl_my_price);
document.getElementById('my_header').appendChild(newBlocksEl_my_header);
document.getElementById('my_test').appendChild(newBlocksEl_my_test);



const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.cancel_btn');

closeBtn.addEventListener('click',closeModal);
window.addEventListener('click',outsideClick);

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

$('#btn-delete').click(function(){
  editor.runCommand('core:canvas-clear')
  setTimeout(function(){ localStorage.clear()}, 0)
  modal.style.display = "none"; 
});


}

var i = 0;

function openNav() {
  
}

var modal = document.getElementById("myModal");

$('#view_span').click(function(){ 
  if(i == 0) {
    document.getElementById("mySidenav").style.width = "0";
    i = 1;
  }
  else {
    document.getElementById("mySidenav").style.width = "350px";
    i = 0;
  }
})

$(document).ready(function(){
  $('.sub-btn').click(function(){
    $(this).next('.sub-menu').slideToggle(0);
    // $(this).find('.dropdown').toggleClass('rotate');
  });
});

$('#back_layers').click(function(){openBlock('content_block', 'content_all')});



var activeContent = document.getElementById('content_block');
activeContent.style.display = 'block';

function openStyle(contentId, all){
	document.getElementById(contentId).style.display = 'block';
	document.getElementById(all).style.display = 'none';
}

function openBlock(contentId, all){
	document.getElementById(contentId).style.display = 'block';
	document.getElementById('content_style').style.display = 'none';
	document.getElementById(all).style.display = 'block';
}