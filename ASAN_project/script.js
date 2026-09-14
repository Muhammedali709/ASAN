document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Switch hamburger icon to solid color if menu is open at the top
        if(window.scrollY <= 50) {
            if(navLinks.classList.contains('active')) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Mock Data for Demo Listings (С прямыми ссылками на красивые фото)
    // Mock Data for Demo Listings
    const mockListings = [
        {
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80', // Новое фото для Баку (Современный интерьер)
            title: 'Dəniz Mənzərəli Premium Mənzil',
            location: 'Bakı',
            type: 'Mənzil',
            guests: 4,
            rooms: 2,
            rating: 4.9,
            price: 120,
            badge: 'Yeni'
        },
        {
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80', // Новое фото для Габалы (Роскошная вилла)
            title: 'Dağ Mənzərəli Lüks Villa',
            location: 'Qəbələ',
            type: 'Villa',
            guests: 8,
            rooms: 4,
            rating: 4.8,
            price: 250,
            badge: 'Populyar'
        },
        {
            image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80',
            title: 'Meşə İçi Rahat Kottec',
            location: 'Quba',
            type: 'Ev',
            guests: 4,
            rooms: 2,
            rating: 4.7,
            price: 90,
            badge: null
        },
        {
            image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
            title: 'Tarixi Memarlıqlı Ənənəvi Ev',
            location: 'Şəki',
            type: 'Ev',
            guests: 5,
            rooms: 3,
            rating: 4.9,
            price: 110,
            badge: 'Təsdiqlənmiş'
        },
        {
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
            title: 'Dəniz Kənarında Rahat Villa',
            location: 'Lənkəran',
            type: 'Villa',
            guests: 6,
            rooms: 3,
            rating: 4.6,
            price: 180,
            badge: null
        },
        {
            image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=600&q=80',
            title: 'Şahdağ Yaxınlığında Dağ Evi',
            location: 'Qusar',
            type: 'Ev',
            guests: 10,
            rooms: 5,
            rating: 5.0,
            price: 300,
            badge: 'Populyar'
        }
    ];

    // Search Form Submit - Demo Interaction
    const searchForm = document.getElementById('searchForm');
    const resultsSection = document.getElementById('search-results');
    const resultsGrid = document.getElementById('results-grid');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        
        // Generate listing cards
        resultsGrid.innerHTML = '';
        mockListings.forEach(listing => {
            const badgeHtml = listing.badge ? `<span class="badge">${listing.badge}</span>` : '';
            
            const cardHTML = `
                <div class="listing-card">
                    ${badgeHtml}
                    <div class="fav-icon"><i class="fa-regular fa-heart"></i></div>
                    <img src="${listing.image}" alt="${listing.title}" class="listing-img">
                    <div class="listing-content">
                        <div class="listing-location">
                            <span><i class="fa-solid fa-location-dot"></i> ${listing.location}</span>
                            <span><i class="fa-solid fa-star" style="color: #F59E0B;"></i> ${listing.rating}</span>
                        </div>
                        <h3 class="listing-title">${listing.title}</h3>
                        <div class="listing-details">
                            ${listing.type} • ${listing.guests} qonaq • ${listing.rooms} otaq
                        </div>
                        <div class="listing-price">
                            ${listing.price} AZN <span>/ gecə</span>
                        </div>
                    </div>
                </div>
            `;
            resultsGrid.insertAdjacentHTML('beforeend', cardHTML);
        });

        // Show the hidden results section
        resultsSection.classList.remove('hidden');

        // Smooth scroll to results
        setTimeout(() => {
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    });

    // Heart Icon Click Behavior inside dynamic content
    resultsGrid.addEventListener('click', (e) => {
        if(e.target.closest('.fav-icon')) {
            const icon = e.target.closest('.fav-icon').querySelector('i');
            if(icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                icon.style.color = '#ef4444'; // Red color
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                icon.style.color = ''; 
            }
        }
    });

});