// Aura Stones - Yönetim Paneli Mantığı

// 1. Varsayılan Ürün Veritabanı (Senkronize)
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

// Ürünleri LocalStorage'dan Çekme / Başlatma (Seeding)
let products = JSON.parse(localStorage.getItem('aura_stones_products'));
if (!products || products.length === 0) {
    products = defaultProducts;
    localStorage.setItem('aura_stones_products', JSON.stringify(products));
}

// 2. Kimlik Doğrulama / Şifre Yönetimi (Şifre varsayılan olarak 'aura2026')
if (!localStorage.getItem('aura_stones_admin_password')) {
    localStorage.setItem('aura_stones_admin_password', 'aura2026');
}

// DOM Elemanları
const loginGate = document.getElementById('loginGate');
const loginForm = document.getElementById('loginForm');
const adminPasswordInput = document.getElementById('adminPassword');
const loginError = document.getElementById('loginError');

const adminHeader = document.getElementById('adminHeader');
const adminMain = document.getElementById('adminMain');
const adminFooter = document.getElementById('adminFooter');
const logoutBtn = document.getElementById('logoutBtn');

const changePwBtnToggle = document.getElementById('changePwBtnToggle');
const passwordModal = document.getElementById('passwordModal');
const passwordModalClose = document.getElementById('passwordModalClose');
const changePasswordForm = document.getElementById('changePasswordForm');
const currentPasswordInput = document.getElementById('currentPassword');
const newPasswordInput = document.getElementById('newPassword');
const newPasswordConfirmInput = document.getElementById('newPasswordConfirm');
const pwChangeError = document.getElementById('pwChangeError');
const pwChangeSuccess = document.getElementById('pwChangeSuccess');

const adminProductList = document.getElementById('adminProductList');
const prodCountElement = document.getElementById('prodCount');
const productForm = document.getElementById('productForm');
const prodImageFileInput = document.getElementById('prodImageFile');
const prodImageBase64Input = document.getElementById('prodImageBase64');
const imagePreview = document.getElementById('imagePreview');
const previewText = document.getElementById('previewText');
const prodCategorySelect = document.getElementById('prodCategory');
const stonePropertiesInputs = document.getElementById('stonePropertiesInputs');

// Çakra İsim Eşlemeleri
const chakraNames = {
    'root-chakra': 'Kök Çakra (Muladhara)',
    'sacral-chakra': 'Sakral Çakra (Svadhisthana)',
    'solar-chakra': 'Solar Pleksus (Manipura)',
    'heart-chakra': 'Kalp Çakrası (Anahata)',
    'throat-chakra': 'Boğaz Çakrası (Vishuddha)',
    'third-eye-chakra': 'Üçüncü Göz Çakrası (Ajna)',
    'crown-chakra': 'Tepe Çakrası (Sahasrara)'
};

// Kategori İsim Eşlemeleri
const categoryNames = {
    'ham-taslar': 'Ham Taşlar',
    'islenmis-taslar': 'İşlenmiş Taşlar',
    'yuzukler': 'Yüzükler',
    'kolyeler': 'Kolyeler',
    'bileklikler': 'Bileklikler',
    'tas-isciligi': 'Taş İşçiliği',
    'ahsap-isciligi': 'Ahşap İşçiliği'
};

// Başlangıç Çalıştırması
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    setupAdminEventListeners();
});

// Kimlik Doğrulama Kontrolü
function checkAuth() {
    const isAuthenticated = sessionStorage.getItem('aura_stones_admin_auth') === 'true';
    
    if (isAuthenticated) {
        // Giriş yapılmış: Arayüzü göster, Giriş ekranını gizle
        loginGate.style.display = 'none';
        adminHeader.classList.remove('auth-hidden');
        adminMain.classList.remove('auth-hidden');
        adminFooter.classList.remove('auth-hidden');
        renderAdminProducts();
    } else {
        // Giriş yapılmamış: Giriş ekranını göster, Arayüzü gizle
        loginGate.style.display = 'flex';
        adminHeader.classList.add('auth-hidden');
        adminMain.classList.add('auth-hidden');
        adminFooter.classList.add('auth-hidden');
    }
}

// Event Listener'lar
function setupAdminEventListeners() {
    // Giriş Formu Gönderimi
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Çıkış Yap Butonu
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    // Şifre Değiştirme Modalı Açma/Kapama
    if (changePwBtnToggle) {
        changePwBtnToggle.addEventListener('click', () => {
            passwordModal.classList.add('active');
        });
    }
    if (passwordModalClose) {
        passwordModalClose.addEventListener('click', () => {
            passwordModal.classList.remove('active');
            changePasswordForm.reset();
            pwChangeError.style.display = 'none';
            pwChangeSuccess.style.display = 'none';
        });
    }

    // Şifre Değiştirme Formu Gönderimi
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', handleChangePassword);
    }

    // Fotoğraf Seçimi -> Base64 Çevrimi
    if (prodImageFileInput) {
        prodImageFileInput.addEventListener('change', handleImageUpload);
    }

    // Kategori Seçimine Göre Form Özellik Etiketlerini Dinamik Değiştirme
    if (prodCategorySelect) {
        prodCategorySelect.addEventListener('change', handleCategoryChange);
    }

    // Form Gönderim
    if (productForm) {
        productForm.addEventListener('submit', handleProductSubmit);
    }
}

// Giriş Yapma İşlemi
function handleLogin(e) {
    e.preventDefault();
    const enteredPassword = adminPasswordInput.value;
    const storedPassword = localStorage.getItem('aura_stones_admin_password');

    if (enteredPassword === storedPassword) {
        sessionStorage.setItem('aura_stones_admin_auth', 'true');
        loginError.style.display = 'none';
        adminPasswordInput.value = '';
        checkAuth();
    } else {
        loginError.innerText = "Hatalı şifre girdiniz. Lütfen tekrar deneyin.";
        loginError.style.display = 'block';
    }
}

// Çıkış Yapma İşlemi
function handleLogout() {
    sessionStorage.removeItem('aura_stones_admin_auth');
    checkAuth();
}

// Şifre Değiştirme İşlemi
function handleChangePassword(e) {
    e.preventDefault();
    
    const currentPassword = currentPasswordInput.value;
    const newPassword = newPasswordInput.value;
    const newPasswordConfirm = newPasswordConfirmInput.value;
    
    const storedPassword = localStorage.getItem('aura_stones_admin_password');
    
    // Hata durumlarını sıfırla
    pwChangeError.style.display = 'none';
    pwChangeSuccess.style.display = 'none';
    
    if (currentPassword !== storedPassword) {
        pwChangeError.innerText = "Mevcut şifreniz yanlış.";
        pwChangeError.style.display = 'block';
        return;
    }
    
    if (newPassword !== newPasswordConfirm) {
        pwChangeError.innerText = "Yeni şifreler eşleşmiyor.";
        pwChangeError.style.display = 'block';
        return;
    }
    
    if (newPassword.length < 4) {
        pwChangeError.innerText = "Yeni şifre en az 4 karakter olmalıdır.";
        pwChangeError.style.display = 'block';
        return;
    }
    
    // Şifreyi güncelle
    localStorage.setItem('aura_stones_admin_password', newPassword);
    pwChangeSuccess.innerText = "Şifre başarıyla güncellendi.";
    pwChangeSuccess.style.display = 'block';
    
    // Formu sıfırla ve modalı kapat
    setTimeout(() => {
        passwordModal.classList.remove('active');
        changePasswordForm.reset();
        pwChangeSuccess.style.display = 'none';
    }, 1500);
}

// Görseli Base64 Formatına Dönüştürme
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Sadece görsellere izin ver
    if (!file.type.startsWith('image/')) {
        alert('Lütfen geçerli bir görsel dosyası seçiniz.');
        prodImageFileInput.value = '';
        return;
    }

    // Dosya boyutu sınırı (Örn: 2MB)
    if (file.size > 2 * 1024 * 1024) {
        alert('Seçtiğiniz dosya çok büyük. Lütfen 2MB altında bir görsel yükleyin.');
        prodImageFileInput.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const base64String = event.target.result;
        prodImageBase64Input.value = base64String;
        
        // Önizleme
        imagePreview.src = base64String;
        imagePreview.style.display = 'block';
        previewText.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

// Kategori Değiştiğinde Girdi Alanlarının Etiketlerini Düzenleme
function handleCategoryChange(e) {
    const category = e.target.value;
    const isWoodCraft = category === 'ahsap-isciligi';

    const hardnessLabel = document.querySelector('label[for="propHardness"]');
    const originLabel = document.querySelector('label[for="propOrigin"]');
    const elementLabel = document.querySelector('label[for="propElement"]');
    const weightLabel = document.querySelector('label[for="propWeight"]');

    const hardnessInput = document.getElementById('propHardness');
    const originInput = document.getElementById('propOrigin');
    const elementInput = document.getElementById('propElement');
    const weightInput = document.getElementById('propWeight');

    if (isWoodCraft) {
        hardnessLabel.innerText = "Ahşap Türü";
        hardnessInput.placeholder = "Örn. Ceviz Ağacı, Zeytin";
        
        originLabel.innerText = "Kullanılan Taşlar";
        originInput.placeholder = "Örn. Turkuaz, Lapis Lazuli";
        
        elementLabel.innerText = "Ölçüler";
        elementInput.placeholder = "Örn. 15 x 10 x 6 cm";
        
        weightLabel.innerText = "Bitiş (Cila)";
        weightInput.placeholder = "Örn. Doğal Balmumu, Teak Yağı";
    } else {
        hardnessLabel.innerText = "Sertlik Derecesi";
        hardnessInput.placeholder = "Örn. 7.0";
        
        originLabel.innerText = "Menşei (Kaynak)";
        originInput.placeholder = "Örn. Brezilya, Madagaskar";
        
        elementLabel.innerText = "Uyumlu Element";
        elementInput.placeholder = "Örn. Hava, Su, Ateş, Toprak";
        
        weightLabel.innerText = "Ortalama Ağırlık";
        weightInput.placeholder = "Örn. 320 gr veya 18 gr";
    }
}

// Ürün Kaydetme/Ekleme
function handleProductSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('prodTitle').value.trim();
    const price = parseFloat(document.getElementById('prodPrice').value);
    const category = document.getElementById('prodCategory').value;
    const chakra = document.getElementById('prodChakra').value;
    const imageBase64 = prodImageBase64Input.value;
    const desc = document.getElementById('prodDesc').value.trim();
    const bestseller = document.getElementById('prodBestseller').checked;

    // Özellik Değerleri
    const propHardness = document.getElementById('propHardness').value.trim();
    const propOrigin = document.getElementById('propOrigin').value.trim();
    const propElement = document.getElementById('propElement').value.trim();
    const propWeight = document.getElementById('propWeight').value.trim();

    if (!imageBase64) {
        alert("Lütfen ürün için bir fotoğraf yükleyin.");
        return;
    }

    // Ürün Özellikleri Objesi Oluşturma
    const properties = {};
    if (category === 'ahsap-isciligi') {
        properties.woodType = propHardness || "Belirtilmemiş";
        properties.stonesUsed = propOrigin || "Belirtilmemiş";
        properties.dimensions = propElement || "Belirtilmemiş";
        properties.finish = propWeight || "Belirtilmemiş";
    } else {
        properties.hardness = propHardness || "Belirtilmemiş";
        properties.origin = propOrigin || "Belirtilmemiş";
        properties.element = propElement || "Belirtilmemiş";
        properties.weight = propWeight || "Belirtilmemiş";
    }

    // Yeni Ürün Objesi
    const newProduct = {
        id: Date.now(), // Eşsiz ID üretimi
        title: title,
        category: category,
        chakra: chakra,
        chakraName: chakraNames[chakra],
        price: price,
        image: imageBase64,
        bestseller: bestseller,
        description: desc,
        properties: properties
    };

    // Diziyi Güncelle ve Kaydet
    products.unshift(newProduct); // En başa ekle ki yeni eklenenler üstte gözüksün
    saveProducts();
    renderAdminProducts();

    // Formu Sıfırla
    productForm.reset();
    prodImageFileInput.value = '';
    prodImageBase64Input.value = '';
    imagePreview.style.display = 'none';
    previewText.style.display = 'block';
    
    // Özellik etiketlerini sıfırla
    handleCategoryChange({ target: { value: '' } });

    alert("Ürün başarıyla eklendi ve mağazada yayına alındı!");
}

// Ürün Silme
window.deleteProduct = function(productId) {
    if (confirm("Bu ürünü silmek istediğinize emin misiniz? Bu işlem geri alınamaz.")) {
        products = products.filter(p => p.id !== productId);
        saveProducts();
        renderAdminProducts();
    }
};

// Veriyi LocalStorage'a Kaydetme
function saveProducts() {
    localStorage.setItem('aura_stones_products', JSON.stringify(products));
}

// Ürünleri Listeleme (Tablo)
function renderAdminProducts() {
    if (!adminProductList) return;

    adminProductList.innerHTML = '';
    prodCountElement.innerText = products.length;

    if (products.length === 0) {
        adminProductList.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">
                    <i class="fa-solid fa-gem" style="font-size: 1.5rem; margin-bottom: 8px; display: block; color: var(--accent-gold);"></i>
                    Sistemde kayıtlı ürün bulunmamaktadır.
                </td>
            </tr>
        `;
        return;
    }

    products.forEach(prod => {
        const tr = document.createElement('tr');
        
        const bestsellerContent = prod.bestseller 
            ? `<i class="fa-solid fa-star table-bestseller-icon"></i>` 
            : `<span style="color: var(--text-muted); font-size: 0.85rem;">-</span>`;

        tr.innerHTML = `
            <td>
                <img src="${prod.image}" alt="${prod.title}" class="table-thumbnail">
            </td>
            <td>
                <strong>${prod.title}</strong>
            </td>
            <td>
                <div>${categoryNames[prod.category]}</div>
                <div class="table-chakra-info">
                    <span class="chakra-dot-sm ${prod.chakra}"></span>
                    ${prod.chakraName.split(' ')[0]}
                </div>
            </td>
            <td class="table-price">
                ${prod.price.toFixed(2)} TL
            </td>
            <td style="text-align: center;">
                ${bestsellerContent}
            </td>
            <td style="text-align: center;">
                <button class="delete-btn" onclick="deleteProduct(${prod.id})" aria-label="Ürünü Sil">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        `;

        adminProductList.appendChild(tr);
    });
}
