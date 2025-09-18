// Application Data
const appData = {
  "healthcare": {
    "dentists": [
      {"id": "place:1", "name": "Bhubaneswar Dental", "location": "IRC Village, Nayapalli", "rating": 5.0, "fee_range": "₹500-2000", "timing": "10 am–7 pm", "phone": "+91 80930 06809", "userRatings": [], "totalRatings": 0},
      {"id": "place:4", "name": "Dental Care Center Bhubaneswar", "location": "Patrapada", "rating": 5.0, "fee_range": "₹400-1800", "timing": "24/7", "phone": "+91 97697 67506", "userRatings": [], "totalRatings": 0},
      {"id": "place:7", "name": "Dr Anshuman's Dental Care", "location": "Satya Vihar", "rating": 5.0, "fee_range": "₹600-2500", "timing": "10 am–9 pm", "phone": "+91 70084 14181", "userRatings": [], "totalRatings": 0},
      {"id": "place:10", "name": "Aastha Dental Care", "location": "Madhusudan Nagar", "rating": 4.9, "fee_range": "₹350-1500", "timing": "9 am–1 pm", "phone": "+91 82490 19847", "userRatings": [], "totalRatings": 0},
      {"id": "place:13", "name": "3S Dental Care", "location": "Bomikhal, Jharapada", "rating": 4.7, "fee_range": "₹400-2000", "timing": "10 am–9 pm", "phone": "+91 80939 24990", "userRatings": [], "totalRatings": 0},
      {"id": "place:16", "name": "Dpak Dental Salon", "location": "Old Town", "rating": 4.7, "fee_range": "₹500-2200", "timing": "10 am–8 pm", "phone": "+91 98610 41700", "userRatings": [], "totalRatings": 0},
      {"id": "place:19", "name": "Elite Dental Clinic", "location": "Kanan Vihar, Patia", "rating": 4.9, "fee_range": "₹600-2800", "timing": "10 am–7 pm", "phone": "+91 93379 33405", "userRatings": [], "totalRatings": 0},
      {"id": "place:22", "name": "Teeth and Gums Dental Clinic", "location": "Kalinga Vihar", "rating": 5.0, "fee_range": "₹300-1800", "timing": "7 am–10 pm", "phone": "+91 89847 83072", "userRatings": [], "totalRatings": 0}
    ],
    "dermatologists": [
      {"id": "place:2", "name": "The Skin Recovery Clinic", "location": "IRC Village, Jayadev Vihar", "rating": 4.8, "fee_range": "₹800-3000", "timing": "9 am–7 pm", "phone": "+91 99235 64840", "userRatings": [], "totalRatings": 0},
      {"id": "place:5", "name": "EPICARE Clinic", "location": "Patrapada", "rating": 5.0, "fee_range": "₹600-2500", "timing": "5:30–8:30 pm", "phone": "+91 89261 06575", "userRatings": [], "totalRatings": 0},
      {"id": "place:8", "name": "Dr. Nikunja Kumar Dash", "location": "Ashok Nagar", "rating": 4.8, "fee_range": "₹500-2000", "timing": "5–6:30 pm", "phone": "+91 90908 45262", "userRatings": [], "totalRatings": 0},
      {"id": "place:11", "name": "Dr. Sanghmitra Gudge's Skin Clinic", "location": "Jharapada", "rating": 4.2, "fee_range": "₹400-1800", "timing": "5–8 pm", "phone": "+91 97771 23100", "userRatings": [], "totalRatings": 0},
      {"id": "place:14", "name": "Revival Skin Clinic", "location": "Chandrasekharpur", "rating": 4.8, "fee_range": "₹700-2800", "timing": "5–9 pm", "phone": "+91 90900 18888", "userRatings": [], "totalRatings": 0},
      {"id": "place:17", "name": "EPA Skin Clinic & Laser Center", "location": "Kanan Vihar, Patia", "rating": 4.8, "fee_range": "₹800-3500", "timing": "9 am–7 pm", "phone": "+91 94372 22755", "userRatings": [], "totalRatings": 0},
      {"id": "place:20", "name": "Ashu Skin Care", "location": "Jayadev Vihar", "rating": 4.5, "fee_range": "₹600-2200", "timing": "9 am–7 pm", "phone": "+91 95834 71256", "userRatings": [], "totalRatings": 0},
      {"id": "place:23", "name": "Niki Skin Care", "location": "Pahala", "rating": 4.7, "fee_range": "₹500-2000", "timing": "9 am–6 pm", "phone": "+91 74400 11800", "userRatings": [], "totalRatings": 0}
    ],
    "orthopedics": [
      {"id": "place:3", "name": "Dr. Dibya Singha", "location": "Acharya Vihar", "rating": 5.0, "fee_range": "₹1000-4000", "timing": "9 am–9 pm", "phone": "+91 94395 37777", "userRatings": [], "totalRatings": 0},
      {"id": "place:6", "name": "Dr. Sandeep Singh", "location": "Kharvela Nagar", "rating": 4.9, "fee_range": "₹800-3500", "timing": "24/7", "phone": "+91 86580 44823", "userRatings": [], "totalRatings": 0},
      {"id": "place:9", "name": "Dr Aurobindo Das Ortho Clinic", "location": "Bhouma Nagar", "rating": 5.0, "fee_range": "₹1200-4500", "timing": "24/7", "phone": "+91 93482 99044", "userRatings": [], "totalRatings": 0},
      {"id": "place:12", "name": "Dr Saurav Narayan Nanda", "location": "Kanan Vihar, Patia", "rating": 4.9, "fee_range": "₹1000-3800", "timing": "Appointments", "phone": "+91 79781 20889", "userRatings": [], "totalRatings": 0},
      {"id": "place:15", "name": "Dr. Jitendra Mishra's Clinic", "location": "IRC Village, Nayapalli", "rating": 5.0, "fee_range": "₹900-3200", "timing": "9 am–10 pm", "phone": "+91 76090 97997", "userRatings": [], "totalRatings": 0},
      {"id": "place:18", "name": "Ortho One", "location": "Acharya Vihar", "rating": 4.8, "fee_range": "₹800-3000", "timing": "5–9 pm", "phone": "+91 94390 18585", "userRatings": [], "totalRatings": 0},
      {"id": "place:21", "name": "Prof. Dr Puspak Samal", "location": "Baramunda", "rating": 4.9, "fee_range": "₹1500-5000", "timing": "9 am–5 pm", "phone": "+91 78733 66631", "userRatings": [], "totalRatings": 0}
    ],
    "gynecologists": [
      {"id": "place:24", "name": "Dr. Monica Gupta", "location": "Jagamara", "rating": 5.0, "fee_range": "₹800-2500", "timing": "7–8:30 pm", "phone": "+91 73997 39911", "userRatings": [], "totalRatings": 0},
      {"id": "place:27", "name": "Dr. Madhusmita Nayak", "location": "Chandrasekharpur", "rating": 4.9, "fee_range": "₹1000-3500", "timing": "24/7", "phone": "+91 63705 71179", "userRatings": [], "totalRatings": 0},
      {"id": "place:30", "name": "Dr. P.K Senapati", "location": "IRC Village, Nayapalli", "rating": 4.9, "fee_range": "₹700-2800", "timing": "7:30–9:30 am", "phone": "+91 84560 40675", "userRatings": [], "totalRatings": 0},
      {"id": "place:33", "name": "Dr Shibani Devi", "location": "Khandagiri", "rating": 4.9, "fee_range": "₹900-3200", "timing": "9 am–5 pm", "phone": "+91 70089 64686", "userRatings": [], "totalRatings": 0},
      {"id": "place:36", "name": "Dr. Abhipsa Mishra", "location": "Chandrasekharpur", "rating": 4.9, "fee_range": "₹1200-4000", "timing": "9 am–5 pm", "phone": "+91 96920 30258", "userRatings": [], "totalRatings": 0},
      {"id": "place:39", "name": "Dr Swapnita Hota", "location": "Chandrasekharpur", "rating": 4.8, "fee_range": "₹800-2800", "timing": "6–10 pm", "phone": "+91 87632 40943", "userRatings": [], "totalRatings": 0},
      {"id": "place:42", "name": "Dr. Surya Narayan Mohanty", "location": "Gajapati Nagar", "rating": 4.8, "fee_range": "₹1000-3500", "timing": "9 am–6 pm", "phone": "+91 80 6297 0069", "userRatings": [], "totalRatings": 0},
      {"id": "place:45", "name": "Dr. Harpreet Kaur", "location": "Khandagiri", "rating": 4.1, "fee_range": "₹600-2200", "timing": "9 am–4 pm", "phone": "+91 70081 10200", "userRatings": [], "totalRatings": 0}
    ]
  },
  "beauty_lifestyle": {
    "salons": [
      {"id": "place:25", "name": "Lakme Salon Patia", "location": "Patia", "rating": 4.8, "fee_range": "₹300-2500", "timing": "10 am–9:30 pm", "phone": "+91 92373 62221", "userRatings": [], "totalRatings": 0},
      {"id": "place:28", "name": "Jawed Habib Salon", "location": "Chandrasekharpur", "rating": 4.9, "fee_range": "₹400-3000", "timing": "10 am–9:30 pm", "phone": "+91 97782 88852", "userRatings": [], "totalRatings": 0},
      {"id": "place:31", "name": "Lakme Salon Saheed Nagar", "location": "Saheed Nagar", "rating": 4.9, "fee_range": "₹350-2800", "timing": "10 am–10 pm", "phone": "+91 99380 69990", "userRatings": [], "totalRatings": 0},
      {"id": "place:34", "name": "Green Trends Jayadev Vihar", "location": "Jayadev Vihar", "rating": 4.7, "fee_range": "₹250-2000", "timing": "10 am–9 pm", "phone": "+91 98611 99940", "userRatings": [], "totalRatings": 0},
      {"id": "place:37", "name": "Green Trends Patia", "location": "Patia", "rating": 4.7, "fee_range": "₹280-2200", "timing": "10 am–9 pm", "phone": "+91 98610 77886", "userRatings": [], "totalRatings": 0},
      {"id": "place:40", "name": "Green Trends Chandrasekharpur", "location": "Chandrasekharpur", "rating": 4.9, "fee_range": "₹300-2500", "timing": "10 am–9 pm", "phone": "+91 82600 08008", "userRatings": [], "totalRatings": 0},
      {"id": "place:43", "name": "Green Trends Old Town", "location": "Old Town", "rating": 4.8, "fee_range": "₹250-2000", "timing": "10 am–9 pm", "phone": "+91 82600 09009", "userRatings": [], "totalRatings": 0},
      {"id": "place:46", "name": "4Season Unisex Salon", "location": "Jayadev Vihar, Nayapalli", "rating": 4.7, "fee_range": "₹400-3500", "timing": "10 am–9 pm", "phone": "+91 89848 88786", "userRatings": [], "totalRatings": 0}
    ],
    "spas": [
      {"id": "place:26", "name": "Naman Thai Spa", "location": "Ashok Nagar", "rating": 3.7, "fee_range": "₹1200-4500", "timing": "10 am–9:30 pm", "phone": "+91 78735 39999", "userRatings": [], "totalRatings": 0},
      {"id": "place:29", "name": "Sukham Massage SPA", "location": "Kanan Vihar, Patia", "rating": 4.8, "fee_range": "₹1500-5000", "timing": "10:30 am–9:30 pm", "phone": "+91 98611 99309", "userRatings": [], "totalRatings": 0},
      {"id": "place:32", "name": "SPA Station", "location": "IRC Village, Nayapalli", "rating": 4.9, "fee_range": "₹1800-6000", "timing": "10:30 am–9 pm", "phone": "+91 76550 24727", "userRatings": [], "totalRatings": 0},
      {"id": "place:35", "name": "Sabai Thai Spa", "location": "Kharvela Nagar", "rating": 4.2, "fee_range": "₹2000-7000", "timing": "11 am–9 pm", "phone": "+91 90909 89090", "userRatings": [], "totalRatings": 0},
      {"id": "place:38", "name": "Swarna Spa", "location": "Ashok Nagar", "rating": 4.4, "fee_range": "₹1000-4000", "timing": "8:30 am–9:30 pm", "phone": "+91 81149 61059", "userRatings": [], "totalRatings": 0},
      {"id": "place:41", "name": "BTM Spa", "location": "Chandrasekharpur", "rating": 4.5, "fee_range": "₹1200-4500", "timing": "9 am–9 pm", "phone": "+91 77490 16206", "userRatings": [], "totalRatings": 0},
      {"id": "place:44", "name": "Nirvin International Thai Spa", "location": "Kharvela Nagar", "rating": 4.9, "fee_range": "₹1800-6500", "timing": "10 am–9:30 pm", "phone": "+91 77878 70903", "userRatings": [], "totalRatings": 0}
    ]
  },
  "other_services": {
    "car_garage": [
      {"id": "place:47", "name": "Usman Garage", "location": "Laxmisagar", "rating": 4.8, "fee_range": "₹500-3000", "timing": "10 am–6 pm", "phone": "+91 90406 67513", "userRatings": [], "totalRatings": 0},
      {"id": "place:50", "name": "Car Masters", "location": "Kalinganagar", "rating": 4.7, "fee_range": "₹800-5000", "timing": "9 am–7 pm", "phone": "+91 80503 39872", "userRatings": [], "totalRatings": 0},
      {"id": "place:53", "name": "Neelachal Motor Works", "location": "Saheed Nagar", "rating": 4.9, "fee_range": "₹600-4000", "timing": "9 am–9 pm", "phone": "+91 90909 40747", "userRatings": [], "totalRatings": 0},
      {"id": "place:56", "name": "AutoRepa Motors", "location": "Chandrasekharpur", "rating": 4.9, "fee_range": "₹700-4500", "timing": "8 am–8 pm", "phone": "+91 97774 66507", "userRatings": [], "totalRatings": 0},
      {"id": "place:59", "name": "Anish Motors Chevrolet", "location": "Cuttack-Puri Bypass", "rating": 4.7, "fee_range": "₹1000-8000", "timing": "9:30 am–6:30 pm", "phone": "+91 63721 69866", "userRatings": [], "totalRatings": 0},
      {"id": "place:62", "name": "Car QC", "location": "Cuttack-Puri Bypass", "rating": 4.9, "fee_range": "₹500-3500", "timing": "8 am–10 pm", "phone": "+91 90900 01448", "userRatings": [], "totalRatings": 0},
      {"id": "place:64", "name": "Emirates Motors", "location": "Puri Bypass Road", "rating": 4.9, "fee_range": "₹400-3000", "timing": "7 am–7 pm", "phone": "+91 84559 32713", "userRatings": [], "totalRatings": 0},
      {"id": "place:66", "name": "FastFix Automotive", "location": "Tamando", "rating": 4.2, "fee_range": "₹600-4000", "timing": "9 am–7:30 pm", "phone": "+91 82495 91441", "userRatings": [], "totalRatings": 0}
    ],
    "veterinary": [
      {"id": "place:48", "name": "MSMB Pet Clinic", "location": "Government Boys' High School Area", "rating": 5.0, "fee_range": "₹300-1500", "timing": "7–9 am", "phone": "+91 82498 45052", "userRatings": [], "totalRatings": 0},
      {"id": "place:51", "name": "Vetcare Bhubaneswar", "location": "Baramunda", "rating": 3.9, "fee_range": "₹500-2000", "timing": "10 am–9 pm", "phone": "+91 90400 46346", "userRatings": [], "totalRatings": 0},
      {"id": "place:57", "name": "PetVetCure", "location": "Nayapalli", "rating": 4.8, "fee_range": "₹400-1800", "timing": "9 am–9 pm", "phone": "+91 98610 60456", "userRatings": [], "totalRatings": 0},
      {"id": "place:60", "name": "Dr Millon Rout", "location": "Sailashree Vihar", "rating": 4.7, "fee_range": "₹350-1500", "timing": "By Appointment", "phone": "+91 91142 28119", "userRatings": [], "totalRatings": 0}
    ],
    "fitness": [
      {"id": "place:49", "name": "Bhubaneswar Health Club", "location": "Patia", "rating": 4.7, "fee_range": "₹1500-4000/month", "timing": "6 am–10 pm", "phone": "+91 74400 16701", "userRatings": [], "totalRatings": 0},
      {"id": "place:52", "name": "Kalyan Multi Gym", "location": "Gautam Nagar", "rating": 4.8, "fee_range": "₹1200-3500/month", "timing": "5:30–11 am", "phone": "+91 98617 21180", "userRatings": [], "totalRatings": 0},
      {"id": "place:55", "name": "Kalinga Fitness Gym", "location": "Near SBI Bank", "rating": 4.3, "fee_range": "₹1000-3000/month", "timing": "6 am–9:30 pm", "phone": "+91 94390 59050", "userRatings": [], "totalRatings": 0},
      {"id": "place:58", "name": "Fitness Mantra Gym", "location": "Patia", "rating": 4.7, "fee_range": "₹1500-4500/month", "timing": "6 am–10 pm", "phone": "+91 63721 36363", "userRatings": [], "totalRatings": 0},
      {"id": "place:61", "name": "Galaxy Fitzone", "location": "Jharapada", "rating": 4.8, "fee_range": "₹1200-3800/month", "timing": "5:30 am–10 pm", "phone": "+91 77356 66783", "userRatings": [], "totalRatings": 0},
      {"id": "place:63", "name": "Cult Gym Patia", "location": "Patia", "rating": 4.8, "fee_range": "₹2000-6000/month", "timing": "6 am–10 pm", "phone": "+91 98615 05190", "userRatings": [], "totalRatings": 0},
      {"id": "place:65", "name": "Cult Gym Pal Height", "location": "Jayadev Vihar", "rating": 4.9, "fee_range": "₹2000-6000/month", "timing": "6 am–10 pm", "phone": "+91 97772 25580", "userRatings": [], "totalRatings": 0}
    ]
  }
};

// Application State
let currentPage = 'home';
let currentCategory = null;
let currentSubcategory = null;
let currentUser = null;
let selectedProvider = null;
let selectedDate = null;
let selectedTime = null;
let currentBookingTab = 'booked';
let selectedRatingBooking = null;
let selectedRating = 0;

// Data Storage Keys
const STORAGE_KEYS = {
  USER: 'slotify_user',
  BOOKINGS: 'slotify_bookings',
  FAVORITES: 'slotify_favorites',
  PROVIDER_RATINGS: 'slotify_provider_ratings'
};

// Initialize data from localStorage
function loadStoredData() {
  try {
    const storedUser = localStorage.getItem(STORAGE_KEYS.USER);
    if (storedUser) {
      currentUser = JSON.parse(storedUser);
    }

    const storedRatings = localStorage.getItem(STORAGE_KEYS.PROVIDER_RATINGS);
    if (storedRatings) {
      const ratingsData = JSON.parse(storedRatings);
      updateProviderRatingsFromStorage(ratingsData);
    }
  } catch (error) {
    console.error('Error loading stored data:', error);
  }
}

function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

function getFromStorage(key, defaultValue = []) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    console.error('Error getting from localStorage:', error);
    return defaultValue;
  }
}

// Update provider ratings from stored data
function updateProviderRatingsFromStorage(ratingsData) {
  for (const category of Object.values(appData)) {
    for (const subcategory of Object.values(category)) {
      subcategory.forEach(provider => {
        if (ratingsData[provider.id]) {
          const providerRatings = ratingsData[provider.id];
          provider.userRatings = providerRatings.userRatings || [];
          provider.totalRatings = providerRatings.totalRatings || 0;
          if (provider.userRatings.length > 0) {
            const sum = provider.userRatings.reduce((acc, rating) => acc + rating, 0);
            provider.rating = Math.round((sum / provider.userRatings.length) * 10) / 10;
          }
        }
      });
    }
  }
}

// Generate sample booking data for demonstration
function generateSampleBookings() {
  const bookings = getFromStorage(STORAGE_KEYS.BOOKINGS, []);
  
  if (bookings.length === 0 && currentUser) {
    const sampleBookings = [
      {
        id: 'booking_1',
        providerId: 'place:1',
        providerName: 'Bhubaneswar Dental',
        service: 'Dental Checkup',
        date: new Date(2025, 8, 20),
        time: '10:00 AM',
        status: 'completed',
        rating: null
      },
      {
        id: 'booking_2',
        providerId: 'place:25',
        providerName: 'Lakme Salon Patia',
        service: 'Hair Styling',
        date: new Date(2025, 8, 22),
        time: '2:00 PM',
        status: 'booked',
        rating: null
      },
      {
        id: 'booking_3',
        providerId: 'place:2',
        providerName: 'The Skin Recovery Clinic',
        service: 'Skin Treatment',
        date: new Date(2025, 8, 15),
        time: '11:00 AM',
        status: 'cancelled',
        rating: null
      }
    ];
    
    saveToStorage(STORAGE_KEYS.BOOKINGS, sampleBookings);
    return sampleBookings;
  }
  
  return bookings;
}

// Utility Functions
function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `<div>${message}</div>`;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s ease-out reverse';
    setTimeout(() => {
      if (toastContainer.contains(toast)) {
        toastContainer.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  
  const counter = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(counter);
    }
    element.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '⭐';
  }
  
  if (hasHalfStar) {
    stars += '⭐';
  }
  
  return stars;
}

function getInitials(name) {
  return name.split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

// Page Navigation Functions
function showPage(pageId) {
  console.log('Showing page:', pageId);
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = pageId.replace('-page', '');
    
    // Handle page-specific initialization
    if (pageId === 'profile-page') {
      initializeProfilePage();
    } else if (pageId === 'bookings-page') {
      initializeBookingsPage();
    }
  } else {
    console.error('Page not found:', pageId);
  }
}

// Global navigation functions
function showHome() {
  showPage('home-page');
}

function showLogin() {
  showPage('login-page');
}

function showRegister() {
  showPage('register-page');  
}

function showDashboard() {
  if (!currentUser) {
    showLogin();
    return;
  }
  showPage('dashboard-page');
  animateStatsCounters();
}

function showProfile() {
  if (!currentUser) {
    showLogin();
    return;
  }
  showPage('profile-page');
}

function showBookings() {
  if (!currentUser) {
    showLogin();
    return;
  }
  showPage('bookings-page');
}

function showCategory(categoryKey) {
  currentCategory = categoryKey;
  const categoryData = appData[categoryKey];
  const subcategories = Object.keys(categoryData);
  currentSubcategory = subcategories[0];
  
  // Set category title
  const categoryTitles = {
    'healthcare': 'Healthcare Services',
    'beauty_lifestyle': 'Beauty & Lifestyle',
    'other_services': 'Other Services'
  };
  
  document.getElementById('category-title').textContent = categoryTitles[categoryKey];
  
  // Generate subcategory tabs
  generateSubcategoryTabs(subcategories);
  
  // Show providers for first subcategory
  displayProviders(categoryData[currentSubcategory]);
  
  showPage('category-view');
}

// Make navigation functions globally available
window.showHome = showHome;
window.showLogin = showLogin;
window.showRegister = showRegister;
window.showDashboard = showDashboard;
window.showProfile = showProfile;
window.showBookings = showBookings;
window.showCategory = showCategory;

// Authentication Functions
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  if (email && password) {
    currentUser = {
      name: email.split('@')[0],
      email: email,
      profilePicture: null,
      age: null,
      phone: null
    };
    
    saveToStorage(STORAGE_KEYS.USER, currentUser);
    updateUserUI();
    generateSampleBookings();
    
    showToast('Login successful! Welcome to Slotify.', 'success');
    showDashboard();
  } else {
    showToast('Please fill in all fields.', 'error');
  }
}

function handleRegister(event) {
  event.preventDefault();
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const phone = document.getElementById('register-phone').value;
  const age = document.getElementById('register-age').value;
  const password = document.getElementById('register-password').value;
  
  if (name && email && phone && age && password) {
    currentUser = {
      name,
      email,
      phone,
      age: parseInt(age),
      profilePicture: null
    };
    
    saveToStorage(STORAGE_KEYS.USER, currentUser);
    updateUserUI();
    generateSampleBookings();
    
    showToast('Registration successful! Welcome to Slotify.', 'success');
    showDashboard();
  } else {
    showToast('Please fill in all fields.', 'error');
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem(STORAGE_KEYS.USER);
  showToast('You have been logged out.', 'info');
  showHome();
}

// Make authentication functions globally available
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.logout = logout;

function updateUserUI() {
  if (currentUser) {
    const userNameElement = document.getElementById('user-name');
    const navProfileAvatar = document.getElementById('nav-profile-avatar');
    
    if (userNameElement) {
      userNameElement.textContent = currentUser.name;
    }
    
    if (navProfileAvatar) {
      if (currentUser.profilePicture) {
        navProfileAvatar.style.backgroundImage = `url(${currentUser.profilePicture})`;
        navProfileAvatar.style.backgroundSize = 'cover';
        navProfileAvatar.style.backgroundPosition = 'center';
        navProfileAvatar.textContent = '';
        navProfileAvatar.classList.add('has-image');
      } else {
        navProfileAvatar.textContent = getInitials(currentUser.name);
        navProfileAvatar.classList.remove('has-image');
      }
    }
  }
}

// Profile Page Functions
function initializeProfilePage() {
  if (!currentUser) return;
  
  const profilePicture = document.getElementById('profile-picture');
  const profilePlaceholder = document.getElementById('profile-placeholder');
  const profileInitials = document.getElementById('profile-initials');
  
  // Set profile picture or initials
  if (currentUser.profilePicture) {
    profilePicture.src = currentUser.profilePicture;
    profilePicture.classList.remove('hidden');
    profilePlaceholder.classList.add('hidden');
  } else {
    profileInitials.textContent = getInitials(currentUser.name);
    profilePicture.classList.add('hidden');
    profilePlaceholder.classList.remove('hidden');
  }
  
  // Populate form fields
  document.getElementById('profile-name').value = currentUser.name || '';
  document.getElementById('profile-age').value = currentUser.age || '';
  document.getElementById('profile-email').value = currentUser.email || '';
  document.getElementById('profile-phone').value = currentUser.phone || '';
}

function triggerFileUpload() {
  document.getElementById('profile-picture-input').click();
}

function handleProfilePictureUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  // Validate file type
  if (!file.type.startsWith('image/')) {
    showToast('Please select a valid image file.', 'error');
    return;
  }
  
  // Validate file size (2MB max)
  if (file.size > 2 * 1024 * 1024) {
    showToast('Image size must be less than 2MB.', 'error');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const imageDataUrl = e.target.result;
    
    // Update UI
    const profilePicture = document.getElementById('profile-picture');
    const profilePlaceholder = document.getElementById('profile-placeholder');
    
    profilePicture.src = imageDataUrl;
    profilePicture.classList.remove('hidden');
    profilePlaceholder.classList.add('hidden');
    
    // Store in user data (temporarily)
    currentUser.profilePicture = imageDataUrl;
    
    showToast('Profile picture updated! Remember to save changes.', 'success');
  };
  
  reader.readAsDataURL(file);
}

function handleProfileUpdate(event) {
  event.preventDefault();
  
  const name = document.getElementById('profile-name').value;
  const age = document.getElementById('profile-age').value;
  const phone = document.getElementById('profile-phone').value;
  
  if (!name || !age) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }
  
  // Update user data
  currentUser.name = name;
  currentUser.age = parseInt(age);
  currentUser.phone = phone;
  
  // Save to localStorage
  saveToStorage(STORAGE_KEYS.USER, currentUser);
  
  // Update UI
  updateUserUI();
  
  showToast('Profile updated successfully!', 'success');
}

// Make profile functions globally available
window.triggerFileUpload = triggerFileUpload;
window.handleProfilePictureUpload = handleProfilePictureUpload;
window.handleProfileUpdate = handleProfileUpdate;

// Bookings Page Functions
function initializeBookingsPage() {
  currentBookingTab = 'booked';
  updateBookingTabsUI();
  displayBookings(currentBookingTab);
}

function switchBookingTab(tab) {
  currentBookingTab = tab;
  updateBookingTabsUI();
  displayBookings(tab);
}

// Make booking functions globally available
window.switchBookingTab = switchBookingTab;

function updateBookingTabsUI() {
  document.querySelectorAll('.bookings-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  const activeTab = document.getElementById(`tab-${currentBookingTab}`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
}

function displayBookings(status) {
  const bookingsList = document.getElementById('bookings-list');
  const bookings = getFromStorage(STORAGE_KEYS.BOOKINGS, []);
  
  const filteredBookings = bookings.filter(booking => booking.status === status);
  
  // Update tab counts
  updateBookingCounts(bookings);
  
  if (filteredBookings.length === 0) {
    bookingsList.innerHTML = createEmptyState(status);
    return;
  }
  
  bookingsList.innerHTML = filteredBookings
    .map(booking => createBookingCard(booking))
    .join('');
}

function updateBookingCounts(bookings) {
  const counts = {
    booked: bookings.filter(b => b.status === 'booked').length,
    completed: bookings.filter(b => b.status === 'completed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length
  };
  
  Object.entries(counts).forEach(([status, count]) => {
    const countElement = document.getElementById(`count-${status}`);
    if (countElement) {
      countElement.textContent = count;
    }
  });
}

function createEmptyState(status) {
  const messages = {
    booked: {
      icon: '📅',
      title: 'No Upcoming Bookings',
      message: 'You don\'t have any upcoming appointments. Browse services to book your next appointment!'
    },
    completed: {
      icon: '✅',
      title: 'No Completed Bookings',
      message: 'Your completed appointments will appear here.'
    },
    cancelled: {
      icon: '❌',
      title: 'No Cancelled Bookings',
      message: 'Your cancelled appointments will appear here.'
    }
  };
  
  const state = messages[status];
  return `
    <div class="empty-state">
      <div class="empty-icon">${state.icon}</div>
      <h3>${state.title}</h3>
      <p>${state.message}</p>
    </div>
  `;
}

function createBookingCard(booking) {
  const date = new Date(booking.date);
  const provider = findProviderById(booking.providerId);
  
  let actionsHtml = '';
  let ratingHtml = '';
  
  if (booking.status === 'booked') {
    actionsHtml = `
      <div class="booking-actions">
        <button class="btn btn--outline btn--sm" onclick="cancelBooking('${booking.id}')">Cancel</button>
        <button class="btn btn--primary btn--sm" onclick="markAsCompleted('${booking.id}')">Mark Complete</button>
      </div>
    `;
  } else if (booking.status === 'completed') {
    if (booking.rating) {
      ratingHtml = `
        <div class="booking-rating">
          <span>Your Rating:</span>
          <div class="rating-stars">
            ${Array.from({length: booking.rating}, () => '<span class="star">⭐</span>').join('')}
          </div>
        </div>
      `;
    } else {
      actionsHtml = `
        <div class="booking-actions">
          <button class="btn btn--primary btn--sm" onclick="openRatingModal('${booking.id}')">Rate Service</button>
        </div>
      `;
    }
  }
  
  return `
    <div class="booking-card">
      <div class="booking-header">
        <h3 class="booking-provider">${booking.providerName}</h3>
        <span class="booking-status ${booking.status}">${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span>
      </div>
      <div class="booking-details">
        <div class="booking-detail">
          <span class="detail-label">Service</span>
          <span class="detail-value">${booking.service}</span>
        </div>
        <div class="booking-detail">
          <span class="detail-label">Date</span>
          <span class="detail-value">${date.toLocaleDateString()}</span>
        </div>
        <div class="booking-detail">
          <span class="detail-label">Time</span>
          <span class="detail-value">${booking.time}</span>
        </div>
        <div class="booking-detail">
          <span class="detail-label">Provider Rating</span>
          <span class="detail-value">${provider ? provider.rating : 'N/A'} ⭐</span>
        </div>
      </div>
      ${ratingHtml}
      ${actionsHtml}
    </div>
  `;
}

function cancelBooking(bookingId) {
  const bookings = getFromStorage(STORAGE_KEYS.BOOKINGS, []);
  const bookingIndex = bookings.findIndex(b => b.id === bookingId);
  
  if (bookingIndex !== -1) {
    bookings[bookingIndex].status = 'cancelled';
    saveToStorage(STORAGE_KEYS.BOOKINGS, bookings);
    displayBookings(currentBookingTab);
    showToast('Booking cancelled successfully.', 'info');
  }
}

function markAsCompleted(bookingId) {
  const bookings = getFromStorage(STORAGE_KEYS.BOOKINGS, []);
  const bookingIndex = bookings.findIndex(b => b.id === bookingId);
  
  if (bookingIndex !== -1) {
    bookings[bookingIndex].status = 'completed';
    saveToStorage(STORAGE_KEYS.BOOKINGS, bookings);
    displayBookings(currentBookingTab);
    showToast('Booking marked as completed! You can now rate the service.', 'success');
  }
}

// Make booking action functions globally available
window.cancelBooking = cancelBooking;
window.markAsCompleted = markAsCompleted;

// Rating System
function openRatingModal(bookingId) {
  const bookings = getFromStorage(STORAGE_KEYS.BOOKINGS, []);
  const booking = bookings.find(b => b.id === bookingId);
  
  if (!booking) return;
  
  selectedRatingBooking = booking;
  selectedRating = 0;
  
  document.getElementById('rating-provider-name').textContent = booking.providerName;
  document.getElementById('rating-comment-text').value = '';
  
  // Reset star ratings
  document.querySelectorAll('.star-btn').forEach((star, index) => {
    star.classList.remove('active');
    star.onclick = () => selectRating(index + 1);
  });
  
  document.getElementById('submit-rating-btn').disabled = true;
  document.getElementById('rating-modal').classList.remove('hidden');
}

function closeRatingModal() {
  document.getElementById('rating-modal').classList.add('hidden');
  selectedRatingBooking = null;
  selectedRating = 0;
}

function selectRating(rating) {
  selectedRating = rating;
  
  document.querySelectorAll('.star-btn').forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
  
  document.getElementById('submit-rating-btn').disabled = false;
}

function submitRating() {
  if (!selectedRatingBooking || selectedRating === 0) return;
  
  // Update booking with rating
  const bookings = getFromStorage(STORAGE_KEYS.BOOKINGS, []);
  const bookingIndex = bookings.findIndex(b => b.id === selectedRatingBooking.id);
  
  if (bookingIndex !== -1) {
    bookings[bookingIndex].rating = selectedRating;
    saveToStorage(STORAGE_KEYS.BOOKINGS, bookings);
  }
  
  // Update provider rating
  updateProviderRating(selectedRatingBooking.providerId, selectedRating);
  
  // Close modal and refresh display
  closeRatingModal();
  displayBookings(currentBookingTab);
  
  showToast(`Thank you for rating ${selectedRatingBooking.providerName}!`, 'success');
}

// Make rating functions globally available
window.openRatingModal = openRatingModal;
window.closeRatingModal = closeRatingModal;
window.submitRating = submitRating;

function updateProviderRating(providerId, rating) {
  const provider = findProviderById(providerId);
  if (!provider) return;
  
  // Add new rating
  if (!provider.userRatings) provider.userRatings = [];
  provider.userRatings.push(rating);
  provider.totalRatings = provider.userRatings.length;
  
  // Calculate new average
  const sum = provider.userRatings.reduce((acc, r) => acc + r, 0);
  provider.rating = Math.round((sum / provider.userRatings.length) * 10) / 10;
  
  // Save to localStorage
  const ratingsData = getFromStorage(STORAGE_KEYS.PROVIDER_RATINGS, {});
  ratingsData[providerId] = {
    userRatings: provider.userRatings,
    totalRatings: provider.totalRatings,
    rating: provider.rating
  };
  saveToStorage(STORAGE_KEYS.PROVIDER_RATINGS, ratingsData);
}

// Dashboard Functions
function animateStatsCounters() {
  setTimeout(() => {
    document.querySelectorAll('.stat-number').forEach(animateCounter);
  }, 500);
}

function toggleProfileMenu() {
  const profileMenu = document.getElementById('profile-menu');
  profileMenu.classList.toggle('active');
}

// Make dashboard functions globally available
window.toggleProfileMenu = toggleProfileMenu;

// Category and Provider Functions
function generateSubcategoryTabs(subcategories) {
  const tabsContainer = document.getElementById('subcategory-tabs');
  tabsContainer.innerHTML = '';
  
  subcategories.forEach(subcategory => {
    const tab = document.createElement('button');
    tab.className = `subcategory-tab ${subcategory === currentSubcategory ? 'active' : ''}`;
    tab.textContent = subcategory.charAt(0).toUpperCase() + subcategory.slice(1).replace('_', ' ');
    tab.onclick = () => switchSubcategory(subcategory);
    tabsContainer.appendChild(tab);
  });
}

function switchSubcategory(subcategory) {
  currentSubcategory = subcategory;
  
  // Update active tab
  document.querySelectorAll('.subcategory-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Display providers for selected subcategory
  const categoryData = appData[currentCategory];
  displayProviders(categoryData[subcategory]);
}

function displayProviders(providers) {
  const grid = document.getElementById('providers-grid');
  grid.innerHTML = '';
  
  if (!providers || providers.length === 0) {
    grid.innerHTML = '<p>No providers found in this category.</p>';
    return;
  }
  
  providers.forEach(provider => {
    const card = createProviderCard(provider);
    grid.appendChild(card);
  });
}

function createProviderCard(provider) {
  const card = document.createElement('div');
  card.className = 'provider-card';
  
  const favorites = getFromStorage(STORAGE_KEYS.FAVORITES, []);
  const isFavorite = favorites.includes(provider.id);
  
  card.innerHTML = `
    <div class="provider-header">
      <h3 class="provider-name">${provider.name}</h3>
      <div class="provider-rating">
        ${generateStars(provider.rating)}
        <span>${provider.rating}</span>
      </div>
    </div>
    <p class="provider-location">📍 ${provider.location}</p>
    <div class="provider-info">
      <div class="info-item">
        <span class="info-label">Fee Range</span>
        <span class="info-value">${provider.fee_range}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Timing</span>
        <span class="info-value">${provider.timing}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Phone</span>
        <span class="info-value">${provider.phone}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Reviews</span>
        <span class="info-value">${provider.totalRatings || 0} reviews</span>
      </div>
    </div>
    <div class="provider-actions">
      <button class="action-btn action-btn--primary" onclick="openBookingModal('${provider.id}')">
        Book Now
      </button>
      <button class="action-btn" onclick="callProvider('${provider.phone}')">
        📞 Call
      </button>
      <button class="action-btn ${isFavorite ? 'favorited' : ''}" onclick="toggleFavorite('${provider.id}')">
        ${isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
  `;
  
  return card;
}

// Booking Modal Functions
function openBookingModal(providerId) {
  selectedProvider = findProviderById(providerId);
  if (!selectedProvider) return;
  
  document.getElementById('booking-provider-name').textContent = selectedProvider.name;
  document.getElementById('booking-provider-location').textContent = selectedProvider.location;
  
  generateCalendar();
  resetBookingSelection();
  
  document.getElementById('booking-modal').classList.remove('hidden');
}

function closeBookingModal() {
  document.getElementById('booking-modal').classList.add('hidden');
  selectedProvider = null;
  selectedDate = null;
  selectedTime = null;
}

// Make booking modal functions globally available
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;

function findProviderById(id) {
  for (const category of Object.values(appData)) {
    for (const subcategory of Object.values(category)) {
      const provider = subcategory.find(p => p.id === id);
      if (provider) return provider;
    }
  }
  return null;
}

function generateCalendar() {
  const calendar = document.getElementById('calendar');
  calendar.innerHTML = '';
  
  const today = new Date();
  
  // Generate next 14 days
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    dayElement.textContent = date.getDate();
    dayElement.onclick = () => selectDate(date, dayElement);
    
    calendar.appendChild(dayElement);
  }
}

function selectDate(date, element) {
  document.querySelectorAll('.calendar-day').forEach(day => {
    day.classList.remove('selected');
  });
  
  element.classList.add('selected');
  selectedDate = date;
  
  document.getElementById('selected-date').textContent = date.toLocaleDateString();
}

function selectTime(timeSlot) {
  document.querySelectorAll('.time-slot').forEach(slot => {
    slot.classList.remove('selected');
  });
  
  timeSlot.classList.add('selected');
  selectedTime = timeSlot.textContent;
  
  document.getElementById('selected-time').textContent = selectedTime;
}

function resetBookingSelection() {
  selectedDate = null;
  selectedTime = null;
  document.getElementById('selected-date').textContent = 'Not selected';
  document.getElementById('selected-time').textContent = 'Not selected';
  
  document.querySelectorAll('.calendar-day, .time-slot').forEach(element => {
    element.classList.remove('selected');
  });
}

function confirmBooking() {
  if (!selectedDate || !selectedTime) {
    showToast('Please select both date and time.', 'error');
    return;
  }
  
  const booking = {
    id: `booking_${Date.now()}`,
    providerId: selectedProvider.id,
    providerName: selectedProvider.name,
    service: 'Appointment',
    date: selectedDate,
    time: selectedTime,
    status: 'booked',
    rating: null
  };
  
  const bookings = getFromStorage(STORAGE_KEYS.BOOKINGS, []);
  bookings.push(booking);
  saveToStorage(STORAGE_KEYS.BOOKINGS, bookings);
  
  showToast(`Booking confirmed with ${selectedProvider.name} for ${selectedDate.toLocaleDateString()} at ${selectedTime}`, 'success');
  closeBookingModal();
}

// Make booking functions globally available
window.confirmBooking = confirmBooking;

// Utility Functions for Actions
function callProvider(phone) {
  showToast(`Calling ${phone}...`, 'info');
  // In a real app, this would trigger the phone app
}

function toggleFavorite(providerId) {
  const favorites = getFromStorage(STORAGE_KEYS.FAVORITES, []);
  const index = favorites.indexOf(providerId);
  
  if (index > -1) {
    favorites.splice(index, 1);
    showToast('Removed from favorites', 'info');
  } else {
    favorites.push(providerId);
    showToast('Added to favorites', 'success');
  }
  
  saveToStorage(STORAGE_KEYS.FAVORITES, favorites);
  
  // Refresh current view if in category view
  if (currentPage === 'category-view' && currentCategory && currentSubcategory) {
    displayProviders(appData[currentCategory][currentSubcategory]);
  }
}

// Make utility functions globally available
window.callProvider = callProvider;
window.toggleFavorite = toggleFavorite;

// Search and Filter Functions
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  
  let searchTimeout;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(e.target.value);
    }, 300);
  });
}

function performSearch(query) {
  if (!query.trim()) {
    if (currentPage === 'category-view' && currentCategory && currentSubcategory) {
      displayProviders(appData[currentCategory][currentSubcategory]);
    }
    return;
  }
  
  const allProviders = getAllProviders();
  const filtered = allProviders.filter(provider => 
    provider.name.toLowerCase().includes(query.toLowerCase()) ||
    provider.location.toLowerCase().includes(query.toLowerCase())
  );
  
  if (currentPage === 'category-view') {
    displayProviders(filtered);
  } else {
    showToast(`Found ${filtered.length} providers matching "${query}"`, 'info');
  }
}

function getAllProviders() {
  const all = [];
  for (const category of Object.values(appData)) {
    for (const subcategory of Object.values(category)) {
      all.push(...subcategory);
    }
  }
  return all;
}

// Quick Actions Functions
function showFavorites() {
  const favorites = getFromStorage(STORAGE_KEYS.FAVORITES, []);
  if (favorites.length === 0) {
    showToast('No favorites yet. Start adding your preferred providers!', 'info');
  } else {
    showToast(`You have ${favorites.length} favorite provider(s)`, 'info');
  }
}

function showEmergency() {
  showToast('Emergency services: Call 108 for medical emergency', 'info');
}

// Make quick action functions globally available
window.showFavorites = showFavorites;
window.showEmergency = showEmergency;

// Event Listeners Setup
function setupEventListeners() {
  // Time slot selection
  document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', () => selectTime(slot));
  });
  
  // Sort functionality
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      if (currentPage === 'category-view' && currentCategory && currentSubcategory) {
        sortProviders(e.target.value);
      }
    });
  }
  
  // Close modal on backdrop click
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        if (modal.id === 'booking-modal') {
          closeBookingModal();
        } else if (modal.id === 'rating-modal') {
          closeRatingModal();
        }
      }
    });
  });
  
  // Close profile menu on outside click
  document.addEventListener('click', (e) => {
    const profileMenu = document.getElementById('profile-menu');
    const profileBtn = document.querySelector('.profile-btn');
    
    if (profileMenu && profileBtn && !profileBtn.contains(e.target)) {
      profileMenu.classList.remove('active');
    }
  });
}

function sortProviders(sortBy) {
  const providers = [...appData[currentCategory][currentSubcategory]];
  
  switch (sortBy) {
    case 'rating':
      providers.sort((a, b) => b.rating - a.rating);
      break;
    case 'name':
      providers.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'price':
      providers.sort((a, b) => {
        const aPrice = parseInt(a.fee_range.match(/\d+/)[0]);
        const bPrice = parseInt(b.fee_range.match(/\d+/)[0]);
        return aPrice - bPrice;
      });
      break;
  }
  
  displayProviders(providers);
}

// Initialization
function init() {
  console.log('Initializing Slotify app...');
  
  // Load stored data
  loadStoredData();
  
  // Hide loading screen after 1.5 seconds
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
    }
  }, 1500);
  
  // Setup event listeners
  setupEventListeners();
  setupSearch();
  
  // Update UI if user is logged in
  if (currentUser) {
    updateUserUI();
  }
  
  // Show home page by default
  showHome();
  
  console.log('Slotify app initialized successfully');
}

// Start the application
document.addEventListener('DOMContentLoaded', init);