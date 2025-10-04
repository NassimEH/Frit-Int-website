'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});



/**
 * food menu filter
 */

const filterBtns = document.querySelectorAll(".filter-btn[data-filter]");
const foodMenuItems = document.querySelectorAll(".food-menu-list li[data-filter]");

filterBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    
    // Remove active class from all buttons
    filterBtns.forEach(button => button.classList.remove("active"));
    
    // Add active class to clicked button
    this.classList.add("active");
    
    const filterValue = this.getAttribute("data-filter");
    
    foodMenuItems.forEach(item => {
      if (filterValue === "all") {
        item.style.display = "block";
      } else if (item.getAttribute("data-filter") === filterValue) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
    
  });
});



/**
 * blog articles modal
 */

function showFullArticle(articleId, event) {
  // Empêcher le comportement par défaut du lien
  if (event) {
    event.preventDefault();
  }
  const articles = {
    'article1': {
      title: "L'inauguration du club Frit'Int et sa naissance",
      content: `
        <h2>L'inauguration du club Frit'Int et sa naissance</h2>
        <p>Le club Frit'Int a vu le jour en octobre 2025 sous l'impulsion de Nassim et Chadi, deux étudiants passionnés de gastronomie et déterminés à révolutionner la culture culinaire du campus de Télécom SudParis.</p>
        
        <h3>Les origines du projet</h3>
        <p>L'idée de créer un club dédié aux frites est née d'une observation simple : les étudiants du campus manquaient d'options culinaires variées et de qualité. Nassim et Chadi, tous deux membres actifs du BDE FISA, ont décidé de relever ce défi en créant Frit'Int.</p>
        
        <h3>L'inauguration officielle</h3>
        <p>Le 15 octobre 2025, Frit'Int a été officiellement inauguré lors d'une cérémonie mémorable qui a rassemblé plus de 200 étudiants. L'événement a marqué le début d'une nouvelle ère culinaire sur le campus, avec des démonstrations de différentes techniques de préparation de frites.</p>
        
        <h3>Les premiers succès</h3>
        <p>Dès les premières semaines, Frit'Int a su conquérir le cœur des étudiants avec ses frites classiques, épicées, belges, au fromage et en forme de gaufres. Le club s'est rapidement imposé comme une référence gastronomique du campus.</p>
        
        <p><em>Rédigé par Nassim - Octobre 2025</em></p>
      `
    },
    'article2': {
      title: "La présence de Frit'Int au SIF 2025",
      content: `
        <h2>La présence de Frit'Int au SIF 2025</h2>
        <p>Le Salon International de la Frite (SIF) 2025 a été l'occasion pour Frit'Int de faire ses premiers pas sur la scène internationale et de représenter fièrement Télécom SudParis.</p>
        
        <h3>Une participation remarquée</h3>
        <p>Frit'Int était le seul club étudiant présent au SIF 2025, ce qui a attiré l'attention des professionnels et des médias. Nassim et Chadi ont présenté leurs innovations culinaires, notamment leurs frites en forme de gaufres qui ont créé la surprise.</p>
        
        <h3>Les innovations présentées</h3>
        <p>Le stand Frit'Int a mis en avant cinq spécialités : les frites classiques traditionnelles, les frites épicées avec un mélange d'épices secret, les frites belges à double cuisson, les frites au fromage fondu, et l'innovation phare : les frites gaufres.</p>
        
        <h3>Reconnaissance internationale</h3>
        <p>La participation au SIF 2025 a valu à Frit'Int une mention spéciale du jury pour l'innovation étudiante. Cette reconnaissance a renforcé la notoriété du club et ouvert de nouvelles perspectives pour l'avenir.</p>
        
        <p><em>Rédigé par Nassim - Octobre 2025</em></p>
      `
    },
    'article3': {
      title: "Les recettes de Frit'Int",
      content: `
        <h2>Les recettes de Frit'Int</h2>
        <p>Découvrez les secrets culinaires qui font le succès de Frit'Int. Nassim et Chadi partagent leurs techniques et leurs recettes exclusives.</p>
        
        <h3>Frites Classiques</h3>
        <p>Nos frites classiques sont préparées avec des pommes de terre Bintje, coupées en bâtonnets de 1cm d'épaisseur, puis trempées dans l'eau froide pendant 30 minutes pour éliminer l'amidon. La première cuisson se fait à 160°C pendant 4 minutes, puis les frites sont égouttées et refroidies. La seconde cuisson à 180°C pendant 2 minutes donne la couleur dorée parfaite.</p>
        
        <h3>Frites Épicées</h3>
        <p>Notre mélange d'épices secret combine paprika fumé, cumin, coriandre, ail en poudre et une pointe de piment de Cayenne. Les frites sont saupoudrées immédiatement après la cuisson pour préserver l'arôme des épices.</p>
        
        <h3>Frites Belges</h3>
        <p>La technique belge authentique nécessite une double cuisson dans de la graisse de bœuf. La première cuisson à 140°C pendant 8 minutes, puis refroidissement complet. La seconde cuisson à 180°C pendant 3 minutes donne cette texture croustillante à l'extérieur et fondante à l'intérieur.</p>
        
        <h3>Frites au Fromage</h3>
        <p>Nous utilisons un mélange de cheddar vieilli et de gouda fumé, fondu avec un peu de lait et de beurre. La sauce est versée sur les frites chaudes et saupoudrée de parmesan râpé.</p>
        
        <h3>Frites Gaufres</h3>
        <p>Notre innovation : les pommes de terre sont coupées avec un couteau spécial qui crée des motifs de gaufres. Cette technique unique donne une surface plus importante pour la cuisson, créant une texture exceptionnelle.</p>
        
        <p><em>Rédigé par Nassim - Octobre 2025</em></p>
      `
    }
  };
  
  const article = articles[articleId];
  if (article) {
    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      max-width: 900px;
      max-height: 85vh;
      overflow-y: auto;
      padding: 0;
      border-radius: 20px;
      position: relative;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      border: 2px solid #ff9d2d;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
      position: absolute;
      top: 15px;
      right: 20px;
      background: #ff9d2d;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10001;
      transition: all 0.3s ease;
    `;
    
    closeBtn.addEventListener('mouseenter', function() {
      this.style.background = '#e8891e';
      this.style.transform = 'scale(1.1)';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
      this.style.background = '#ff9d2d';
      this.style.transform = 'scale(1)';
    });
    
    // Create header
    const header = document.createElement('div');
    header.style.cssText = `
      background: linear-gradient(135deg, #ff9d2d 0%, #ff6b35 100%);
      color: white;
      padding: 30px;
      border-radius: 18px 18px 0 0;
      text-align: center;
      position: relative;
    `;
    
    const title = document.createElement('h1');
    title.innerHTML = article.title;
    title.style.cssText = `
      margin: 0;
      font-size: 28px;
      font-weight: bold;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    `;
    
    header.appendChild(title);
    
    // Create content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.style.cssText = `
      padding: 40px;
      line-height: 1.8;
      font-size: 16px;
    `;
    
    // Style the article content
    const styledContent = article.content
      .replace(/<h2>/g, '<h2 style="color: #ff9d2d; font-size: 24px; margin: 30px 0 15px 0; border-bottom: 2px solid #ff9d2d; padding-bottom: 10px;">')
      .replace(/<h3>/g, '<h3 style="color: #333; font-size: 20px; margin: 25px 0 12px 0; font-weight: 600;">')
      .replace(/<p>/g, '<p style="margin: 15px 0; color: #555; text-align: justify;">')
      .replace(/<em>/g, '<em style="color: #ff9d2d; font-weight: 600; font-style: italic; display: block; text-align: center; margin-top: 30px; padding: 15px; background: #fff5e6; border-left: 4px solid #ff9d2d;">');
    
    contentWrapper.innerHTML = styledContent;
    
    modalContent.appendChild(header);
    modalContent.appendChild(contentWrapper);
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal events
    closeBtn.onclick = () => document.body.removeChild(modal);
    modal.onclick = (e) => {
      if (e.target === modal) document.body.removeChild(modal);
    };
  }
}