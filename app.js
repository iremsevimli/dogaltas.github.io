// Aura Stones - Web Uygulaması Mantığı

// 1. Varsayılan Ürün Veritabanı (Seeding)
const defaultProducts = [
    {
        id: 1,
        title: "Ham Ametist Kristal Kümesi",
        category: "ham-taslar",
        chakra: "root-chakra",
        chakraName: "Kök Çakra (Muladhara)",
        price: 850.00,
        image: "assets/images/amethyst_raw.jpg",
        bestseller: true,
        description: "Brezilya'nın derinliklerinden çıkarılan bu ham ametist kristali, bulunduğu ortama huzur, dinginlik ve koruyucu enerji yayar. İşlenmemiş doğal formuyla kristal uçlarının tüm gücünü hissedebilirsiniz.",
        properties: {
            hardness: "7.0",
            origin: "Brezilya",
            element: "Hava / Su",
            weight: "320 gr"
        }
    },
    {
        id: 2,
        title: "Labradorit Gümüş Sarkıt Kolye",
        category: "kolyeler",
        chakra: "heart-chakra",
        chakraName: "Kalp Çakrası (Anahata)",
        price: 1450.00,
        image: "assets/images/labradorite_necklace.jpg",
        bestseller: true,
        description: "Işığa göre mavi, yeşil ve altın sarısı tonlarında parlayan birinci kalite labradorit taşından yapılmıştır. 925 ayar gümüş çerçeve ve zincirle atölyemizde el işçiliğiyle bir araya getirilmiştir.",
        properties: {
            hardness: "6.0 - 6.5",
            origin: "Madagaskar",
            element: "Ateş / Su",
            weight: "18 gr (Zincir Dahil)"
        }
    },
    {
        id: 3,
        title: "Ahşap & Turkuaz Kakmalı Mücevher Kutusu",
        category: "ahsap-isciligi",
        chakra: "crown-chakra",
        chakraName: "Tepe Çakrası (Sahasrara)",
        price: 2800.00,
        image: "assets/images/wooden_jewelry_box.jpg",
        bestseller: true,
        description: "Geleneksel ceviz ağacından oyularak hazırlanan kutumuzun kapağı, turkuaz ve lapis lazuli taşlarının kakma (inlay) tekniğiyle bezenmesiyle yapılmıştır. Değerli eşyalarınızı enerjik bir ortamda saklar.",
        properties: {
            woodType: "Ceviz Ağacı",
            stonesUsed: "Turkuaz, Lapis Lazuli",
            dimensions: "15 x 10 x 6 cm",
            finish: "Doğal Balmumu"
        }
    },
    {
        id: 4,
        title: "Ham Siyah Turmalin Koruma Taşı",
        category: "ham-taslar",
        chakra: "root-chakra",
        chakraName: "Kök Çakra (Muladhara)",
        price: 620.00,
        image: "assets/images/amethyst_raw.jpg",
        bestseller: false,
        description: "Topraklanma ve negatif enerjilerden korunma dendiğinde akla gelen ilk kristal olan siyah turmalin, ham ve güçlü yapısıyla elektro-manyetik radyasyonu emmeye yardımcı olur.",
        properties: {
            hardness: "7.0 - 7.5",
            origin: "Afrika",
            element: "Toprak",
            weight: "150 gr"
        }
    },
    {
        id: 5,
        title: "Cilalanmış Pembe Kuvars Avuç İçi Taşı",
        category: "islenmis-taslar",
        chakra: "sacral-chakra",
        chakraName: "Sakral Çakra (Svadhisthana)",
        price: 450.00,
        image: "assets/images/labradorite_necklace.jpg",
        bestseller: false,
        description: "Sevginin ve şefkatin taşı pembe kuvars, pürüzsüzce cilalanmış formuyla meditasyon sırasında avuç içinde tutulmak üzere tasarlanmıştır. Kalbinizi sevgiye açar.",
        properties: {
            hardness: "7.0",
            origin: "Madagaskar",
            element: "Su",
            weight: "95 gr"
        }
    },
    {
        id: 6,
        title: "Sitrin Kuvars Gümüş Yüzük",
        category: "yuzukler",
        chakra: "solar-chakra",
        chakraName: "Solar Pleksus (Manipura)",
        price: 1250.00,
        image: "assets/images/labradorite_necklace.jpg",
        bestseller: false,
        description: "Bolluk, bereket ve özgüven taşı olan sitrin, 925 ayar el yapımı gümüş yüzük üzerine yerleştirilmiştir. Ayarlanabilir halkası sayesinde her parmağa uygundur.",
        properties: {
            hardness: "7.0",
            origin: "Brezilya",
            element: "Ateş",
            weight: "6 gr"
        }
    },
    {
        id: 7,
        title: "Lapis Lazuli Denge Bilekliği",
        category: "bileklikler",
        chakra: "throat-chakra",
        chakraName: "Boğaz Çakrası (Vishuddha)",
        price: 720.00,
        image: "assets/images/wooden_jewelry_box.jpg",
        bestseller: false,
        description: "İletişimi, dürüstlüğü ve içsel bilgeliği simgeleyen lacivert tonlarındaki lapis lazuli taşlarından üretilmiştir. Elastik ipiyle günlük kullanıma uygundur.",
        properties: {
            hardness: "5.0 - 5.5",
            origin: "Afganistan",
            element: "Hava / Su",
            weight: "22 gr"
        }
    },
    {
        id: 8,
        title: "Obsidyen Oyma Sanatsal Figür",
        category: "tas-isciligi",
        chakra: "third-eye-chakra",
        chakraName: "Üçüncü Göz Çakrası (Ajna)",
        price: 1950.00,
        image: "assets/images/hero_workshop.jpg",
        bestseller: false,
        description: "Atölyemizdeki usta eller tarafından siyah obsidyen volkanik camından özenle oyulmuş bu figür, içsel gerçeği görme ve odaklanmayı sembolize eder. Güçlü bir odak taşıdır.",
        properties: {
            hardness: "5.0 - 5.5",
            origin: "Meksika",
            element: "Toprak / Ateş",
            weight: "180 gr"
        }
    }
];

let products = JSON.parse(localStorage.getItem('aura_stones_products'));
if (!products || products.length === 0) {
    products = defaultProducts;
    localStorage.setItem('aura_stones_products', JSON.stringify(products));
}

// 2. Alışveriş Sepeti Durumu (Cart State)
let cart = JSON.parse(localStorage.getItem('aura_stones_cart')) || [];

// DOM Elemanları
const productGrid = document.getElementById('productGrid');
const bestsellersGrid = document.getElementById('bestsellersGrid');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartCountElement = document.getElementById('cartCount');
const startShoppingBtn = document.getElementById('startShopping');
const checkoutBtn = document.getElementById('checkoutBtn');

const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const chakraFilterBtns = document.querySelectorAll('.chakra-filter-btn');
const customDesignForm = document.getElementById('customDesignForm');

// Sayfa Yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    renderBestsellers();
    updateCartUI();
    setupEventListeners();
});

// Event Listener'ları Kurma
function setupEventListeners() {
    // Mobil Menü Toggle
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if(navMenu.classList.contains('active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars-staggered';
        }
    });

    // Menü Link Tıklamaları (Kapatma)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars-staggered';
        });
    });

    // Çakra Kategorisi Filtreleme
    chakraFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            chakraFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            renderProducts(filterValue);
        });
    });

    // Footer Kategori Linkleri Filtreleme Tetikleyicisi
    document.querySelectorAll('.footer-cat-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const filterValue = link.getAttribute('data-filter');
            const targetBtn = document.querySelector(`.chakra-filter-btn[data-filter="${filterValue}"]`);
            if(targetBtn) {
                targetBtn.click();
            }
        });
    });

    // Sepet Çekmecesini Aç/Kapat
    cartToggle.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    if(startShoppingBtn) {
        startShoppingBtn.addEventListener('click', (e) => {
            closeCart();
        });
    }

    // Modal Kapatma
    modalClose.addEventListener('click', closeModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal();
    });

    // Sipariş Formu Gönderimi (WhatsApp Lead)
    if(customDesignForm) {
        customDesignForm.addEventListener('submit', handleCustomOrderSubmit);
    }

    // Sepet Tamamlama (WhatsApp E-Ticaret)
    checkoutBtn.addEventListener('click', handleCheckout);
}

// Ürünleri Listeleme (Grid)
function renderProducts(filter) {
    if(!productGrid) return;
    
    productGrid.innerHTML = '';
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `<p class="no-products-msg">Bu kategoride şu anda ürün bulunmamaktadır.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        productGrid.appendChild(card);
    });
}

// Çok Satanları Listeleme
function renderBestsellers() {
    if(!bestsellersGrid) return;

    bestsellersGrid.innerHTML = '';
    const bestsellerList = products.filter(p => p.bestseller);

    bestsellerList.forEach(product => {
        const card = createProductCard(product);
        bestsellersGrid.appendChild(card);
    });
}

// Ürün Kartı HTML Şablonu Oluşturma
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);

    // Çakra Dot Sınıfı Bulma
    const chakraClass = product.chakra;

    card.innerHTML = `
        <div class="product-badge-list">
            ${product.bestseller ? '<span class="product-badge bestseller-badge">Çok Satan</span>' : ''}
            <span class="product-badge">${product.category.replace('-', ' ')}</span>
        </div>
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <div class="product-actions">
                <button class="quick-view-btn" onclick="openProductDetail(${product.id})">
                    <i class="fa-solid fa-eye"></i> Hızlı Bakış
                </button>
                <button class="add-to-cart-quick" onclick="addToCart(${product.id}, 1)">
                    <i class="fa-solid fa-cart-plus"></i> Sepete Ekle
                </button>
            </div>
        </div>
        <div class="product-info">
            <div class="product-category-meta">
                <span class="meta-chakra-dot ${chakraClass}"></span>
                ${product.chakraName}
            </div>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">${product.price.toFixed(2)} TL</div>
        </div>
    `;

    // Mobil kullanıcılar için tüm karta tıklandığında modalın açılması kolaylık sağlar
    card.querySelector('.product-image-container').addEventListener('click', (e) => {
        if(e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
            openProductDetail(product.id);
        }
    });

    return card;
}

// Detay Modalı Açma
window.openProductDetail = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const chakraClass = product.chakra;
    const isWoodCraft = product.category === 'ahsap-isciligi';

    // Özellikleri listeleme
    let propertiesHtml = '';
    if(isWoodCraft) {
        propertiesHtml = `
            <li><span>Ahşap Türü:</span> <strong>${product.properties.woodType}</strong></li>
            <li><span>Kullanılan Taşlar:</span> <strong>${product.properties.stonesUsed}</strong></li>
            <li><span>Ölçüler:</span> <strong>${product.properties.dimensions}</strong></li>
            <li><span>Bitiş:</span> <strong>${product.properties.finish}</strong></li>
        `;
    } else {
        propertiesHtml = `
            <li><span>Sertlik Derecesi:</span> <strong>${product.properties.hardness}</strong></li>
            <li><span>Menşei (Kaynak):</span> <strong>${product.properties.origin}</strong></li>
            <li><span>Uyumlu Element:</span> <strong>${product.properties.element}</strong></li>
            <li><span>Ortalama Ağırlık:</span> <strong>${product.properties.weight}</strong></li>
        `;
    }

    modalContent.innerHTML = `
        <div class="modal-img-col">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="modal-info-col">
            <div class="modal-chakra-tag">
                <span class="chakra-dot ${chakraClass}"></span>
                ${product.chakraName}
            </div>
            <h2>${product.title}</h2>
            <div class="modal-price">${product.price.toFixed(2)} TL</div>
            <p class="modal-desc">${product.description}</p>
            
            <div class="stone-properties">
                <h4>Ürün Özellikleri</h4>
                <ul>
                    ${propertiesHtml}
                </ul>
            </div>
            
            <div class="modal-buy-actions">
                <div class="qty-btn-group">
                    <button class="qty-btn" onclick="adjustModalQty(-1)">-</button>
                    <span class="qty-val" id="modalQty">1</span>
                    <button class="qty-btn" onclick="adjustModalQty(1)">+</button>
                </div>
                <button class="btn btn-primary" onclick="addFromModal(${product.id})">
                    <i class="fa-solid fa-bag-shopping"></i> SEPETE EKLE
                </button>
            </div>
        </div>
    `;

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Arkaplan kaydırmayı engelle
};

// Modal Miktarını Düzenleme
let currentModalQty = 1;
window.adjustModalQty = function(amount) {
    const qtySpan = document.getElementById('modalQty');
    if(!qtySpan) return;

    currentModalQty = parseInt(qtySpan.innerText) + amount;
    if (currentModalQty < 1) currentModalQty = 1;
    qtySpan.innerText = currentModalQty;
};

// Modal Üzerinden Sepete Ekleme
window.addFromModal = function(productId) {
    addToCart(productId, currentModalQty);
    closeModal();
};

// Modalı Kapatma
function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
    currentModalQty = 1; // Sıfırla
}

// Alışveriş Sepeti İşlemleri (Cart Management)
window.addToCart = function(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    updateCartUI();
    openCart();
};

window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
};

window.updateQty = function(productId, amount) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
    }
    saveCart();
    updateCartUI();
};

function saveCart() {
    localStorage.setItem('aura_stones_cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Sepet Sayısı
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.innerText = totalItems;

    // Sepet İçi Ürünler
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-gem"></i>
                <p>Sepetiniz şu anda boş.</p>
                <a href="#shop" class="btn btn-outline" id="startShopping" onclick="closeCart()">Alışverişe Başla</a>
            </div>
        `;
        cartTotalElement.innerText = "0.00 TL";
        checkoutBtn.disabled = true;
        return;
    }

    checkoutBtn.disabled = false;
    cartItemsContainer.innerHTML = '';
    let totalCost = 0;

    cart.forEach(item => {
        totalCost += item.price * item.quantity;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-price">${item.price.toFixed(2)} TL</div>
                <div class="cart-item-controls">
                    <div class="qty-btn-group">
                        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    cartTotalElement.innerText = totalCost.toFixed(2) + " TL";
}

function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

window.closeCart = function() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

// WhatsApp Sipariş Tamamlama
function handleCheckout() {
    if (cart.length === 0) return;

    let totalVal = 0;
    let messageText = "Merhaba Aura Stones! Web siteniz üzerinden aşağıdaki siparişi vermek istiyorum:\n\n";
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalVal += itemTotal;
        messageText += `${index + 1}. ${item.title} (${item.quantity} adet) - Tekil Fiyat: ${item.price.toFixed(2)} TL - Tutar: ${itemTotal.toFixed(2)} TL\n`;
    });

    messageText += `\n*Toplam Sipariş Tutarı: ${totalVal.toFixed(2)} TL*\n\nAdres ve ödeme bilgileri için benimle iletişime geçer misiniz? Teşekkürler.`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/905551234567?text=${encodedMessage}`;
    
    // Yeni sekmede WhatsApp'a yönlendir
    window.open(whatsappUrl, '_blank');
}

// Özel Tasarım İstek Formu (WhatsApp Lead)
function handleCustomOrderSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('clientName').value.trim();
    const contact = document.getElementById('clientContact').value.trim();
    const designType = document.getElementById('designType').value;
    const message = document.getElementById('clientMessage').value.trim();

    if(!name || !contact || !designType) {
        alert("Lütfen gerekli alanları doldurunuz.");
        return;
    }

    let leadText = `Merhaba Aura Stones, Özel Tasarım Talebi Oluşturmak İstiyorum:\n\n`;
    leadText += `*Ad Soyad:* ${name}\n`;
    leadText += `*İletişim/Tel:* ${contact}\n`;
    leadText += `*Tasarım Türü:* ${designType}\n`;
    if(message) {
        leadText += `*Açıklama:* ${message}\n`;
    }

    const encodedLead = encodeURIComponent(leadText);
    const whatsappLeadUrl = `https://wa.me/905551234567?text=${encodedLead}`;

    window.open(whatsappLeadUrl, '_blank');
}
