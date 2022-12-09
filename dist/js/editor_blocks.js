
const blockManager = editor.Blocks;

//*********************************************************************************************************

blockManager.add('text',{
    id: 'text',
    label: '<p style = "font-size: 12px; font-weight:500">Text</p>',
    media: `<i class="fa-solid fa-font" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
    content: {
      type: "text",
      content: "Insert your text here",
      style: { padding: "10px" },
    },
    category: 'Text'
  },);
blockManager.add('title', 
  {
    id: 'title',
    label: '<p style = "font-size: 12px; font-weight:500">Title</p>',
    category: 'Text',
    media: `<i class="fa-solid fa-heading" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
    content: `<h1 style="padding: 20px">Insert your title here</h1>`,
    attributes: {
      title: 'Insert h1 block'
    }
  });
blockManager.add('content box', {
      id: 'content_box',
      label: '<p style = "font-size: 12px; font-weight:500">Content Box</p>',
      media:`<i class="fa-solid fa-window-maximize" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `
        <section style="min-height: 30px; padding: 10px">
          <div data-gjs-type="text" style="font-size: 40px; padding: 15px">Head Title</div>
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
      <ul class="check-list">
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
      content: { type: 'image' },
      activate: true,
      category: 'Media'
    }, );
blockManager.add('video', {
      id: 'video',
      label: '<p style = "font-size: 12px; font-weight:500">Video</p>',
      media: `<i class="fa-solid fa-video" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      // select: true,
      content: { type: 'video' },
      // activate: true,
      category: 'Media'
    }, );
blockManager.add('audio', {
      id: 'audio',
      label: '<p style = "font-size: 12px; font-weight:500">Audio</p>',
      media: `<i class="fa-solid fa-volume-high" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      // select: true,
      content: `<audio controls>
        <source src="horse.ogg" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
      </audio>`,
      // activate: true,
      category: 'Media'
    }, );
blockManager.add('carousel', {
      id: 'carousel',
      label: '<p style = "font-size: 12px; font-weight:500">Carousel</p>',
      media: `<i class="fa-solid fa-images" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      select: true,
      content: `
      <div data-gjs-type="custom-carousel">
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
      <div style = "display: flex;justify-content: flex-start; align-items: stretch; flex-wrap: nowrap; padding: 10px; ">
        <div style = "width: 25%; min-height: 30px"></div>   
        <div style = "width: 25%; min-height: 30px"></div>   
        <div style = "width: 25%; min-height: 30px"></div>
        <div style = "width: 25%; min-height: 30px"></div>
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
      <div style = "display: flex;justify-content: flex-start; align-items: stretch; flex-wrap: nowrap; padding: 10px; ">
        <div style = "width: 33.33%; min-height: 30px"></div>   
        <div style = "width: 33.33%; min-height: 30px"></div>   
        <div style = "width: 33.33%; min-height: 30px"></div>
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
      <div style = "display: flex;justify-content: flex-start; align-items: stretch; flex-wrap: nowrap; padding: 10px; ">
        <div style = "width: 50%; min-height: 30px"></div>   
        <div style = "width: 50%; min-height: 30px"></div>   
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
      content: `<div style = "display: flex;justify-content: flex-start; align-items: stretch; flex-wrap: nowrap; padding: 10px; width: 100%; min-height: 30px;">
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
      <div style = "width: 100%; min-height: 30px"></div>   
    </section>`,
      category: 'Column Layout'
    }, );
blockManager.add('button', {
      id: 'button',
      label: '<p style = "font-size: 12px; font-weight:500">Button</p>',
      attributes: { class:'gjs-block-section' },
      media: `<i class="fa-solid fa-hand-point-up" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `<button>Button</button>`,
      category: 'Form'
    }, );
blockManager.add('form_input', {
      id: 'form_input',
      label: '<p style = "font-size: 12px; font-weight:500">Form Input</p>',
      attributes: { class:'gjs-block-section' },
      media: `<i class="fa-solid fa-pen-to-square" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `<input data-gjs-type = "input" ></input>`,
      category: 'Form'
    },);
blockManager.add('form_textarea', {
      id: 'form_textarea',
      label: '<p style = "font-size: 12px; font-weight:500">Form Textarea</p>',
      attributes: { class:'gjs-block-section' },
      media: `<i class="fa-solid fa-clipboard" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `<textarea data-gjs-type = "textarea" ></textarea>`,
      category: 'Form'
    },);
blockManager.add('form_select', {
      id: 'form_select',
      label: '<p style = "font-size: 12px; font-weight:500">Form Select</p>',
      attributes: { class:'gjs-block-section' },
      media: `<i class="fa-solid fa-check-to-slot" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `<select data-gjs-type = "select" >
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
      <div style="width: 100%; text-align: -webkit-center">
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
      <div class="topnav">
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
      content: `<hr style = "margin: 20px; color: black" ></hr>`,
      category: 'Other'
    }, );
blockManager.add('faq', {
      id: 'faq',
      label: '<p style = "font-size: 12px; font-weight:500">FAQ</p>',
      attributes: { class:'gjs-block-section' },
      media: `<i class="fa-regular fa-circle-question" style="color: rgb(172, 201, 222); width: 40px;height: 40px"></i>`,
      content: `

      <div class="faq-content">
        <div class="faq-question">
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

document.getElementById('blocks').appendChild(newBlocksEl_Text);
document.getElementById('blocks').appendChild(newBlocksEl_Media);
document.getElementById('blocks').appendChild(newBlocksEl_Column);
document.getElementById('blocks').appendChild(newBlocksEl_Form);
document.getElementById('blocks').appendChild(newBlocksEl_Social);
document.getElementById('blocks').appendChild(newBlocksEl_Other_Some);
document.getElementById('blocks').appendChild(newBlocksEl_Other);
document.getElementById('my_blocks').appendChild(newBlocksEl_my_block);
document.getElementById('my_form').appendChild(newBlocksEl_my_form);
document.getElementById('my_feature').appendChild(newBlocksEl_my_feature);
document.getElementById('my_footer').appendChild(newBlocksEl_my_footer);
document.getElementById('my_team').appendChild(newBlocksEl_my_team);
document.getElementById('my_welcome').appendChild(newBlocksEl_my_welcome);
document.getElementById('my_price').appendChild(newBlocksEl_my_price);
document.getElementById('my_header').appendChild(newBlocksEl_my_header);
document.getElementById('my_test').appendChild(newBlocksEl_my_test);

