document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. ELEMENT SELECTORS & SAFECHECKS
    // ==========================================
    const bookingForm = document.getElementById("dispatchBookingForm");
    const itemTypeSelect = document.getElementById("itemType");
    const weightSelect = document.getElementById("packageWeight");
    const priceDisplay = document.getElementById("calculatedPrice");
    
    const trackingForm = document.querySelector("#tracking form");
    const trackingInput = document.querySelector("#tracking input");

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navLinksList = document.getElementById("navLinksList");

    const authModal = document.getElementById("authModal");
    
    // Select ALL instances of the login buttons (Handles both desktop & mobile navigation links)
    const loginBtns = document.querySelectorAll(".login-btn");
    const closeModalBtn = document.querySelector(".close-modal-btn");
    
    const loginFormPane = document.getElementById("loginFormPane");
    const signupFormPane = document.getElementById("signupFormPane");
    const switchToSignup = document.getElementById("switchToSignup");
    const switchToLogin = document.getElementById("switchToLogin");

    const signupForm = document.getElementById("userSignupForm");
    const loginForm = document.getElementById("userLoginForm");

    const adminDashboard = document.getElementById("adminDashboard");
    const adminOrderTableBody = document.getElementById("adminOrderTableBody");
    const logoutAdminBtn = document.getElementById("logoutAdminBtn");

    // Master Credentials for Admin
    const MASTER_ADMIN_EMAIL = "admin@mummyj.com";
    const MASTER_ADMIN_PASSWORD = "mummyj2026";

    // Helper function to dynamically update all login buttons across layouts
    function updateLoginButtonsText(text, isSuccess = false) {
        loginBtns.forEach(btn => {
            btn.textContent = text;
            if (isSuccess) {
                btn.style.backgroundColor = "#ff5500";
                btn.style.color = "white";
            } else {
                btn.style.backgroundColor = "";
                btn.style.color = "";
            }
        });
    }

    // ==========================================
    // 2. LIVE PERSISTENCE RUN ON PAGE LOAD
    // ==========================================
    // If Admin was already logged in, keep dashboard open even after a live server reload
    if (localStorage.getItem("currentAdminMode") === "true" && adminDashboard) {
        adminDashboard.classList.remove("hidden-pane");
        updateLoginButtonsText("Admin Mode", true);
        renderAdminOrders();
    }


    // ==========================================
    // 3. MOBILE HAMBURGER NAVIGATION ENGINE
    // ==========================================
    if (mobileMenuBtn && navLinksList) {
        // Optimized to listen to both click and touch events for fast mobile response
        const toggleMenu = (e) => {
            e.preventDefault();
            mobileMenuBtn.classList.toggle("open");
            navLinksList.classList.toggle("active");
        };
        
        mobileMenuBtn.addEventListener("click", toggleMenu);

        // Closes panel dynamically when a user taps a section target link on mobile
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenuBtn.classList.remove("open");
                navLinksList.classList.remove("active");
            });
        });
    }


    // ==========================================
    // 4. REAL-TIME NIGERIAN NAIRA CALCULATOR
    // ==========================================
    const basePrices = {
        documents: 1500,
        food: 2000,
        clothes: 1800,
        electronics: 2500,
        other: 2000
    };

    const weightMultipliers = {
        light: 1.0,
        medium: 1.3,
        heavy: 1.6
    };

    function updateEstimatedPrice() {
        if (!itemTypeSelect || !weightSelect || !priceDisplay) return;
        
        const selectedType = itemTypeSelect.value;
        const selectedWeight = weightSelect.value;

        if (!selectedType) {
            priceDisplay.textContent = "₦0.00";
            return;
        }

        const base = basePrices[selectedType];
        const multiplier = weightMultipliers[selectedWeight];
        const finalPrice = Math.round(base * multiplier);

        priceDisplay.textContent = "₦" + finalPrice.toLocaleString();
    }

    if (itemTypeSelect && weightSelect) {
        itemTypeSelect.addEventListener("change", updateEstimatedPrice);
        weightSelect.addEventListener("change", updateEstimatedPrice);
    }


    // ==========================================
    // 5. UNIFIED BOOKING ENGINE
    // ==========================================
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault(); 

            const senderName = document.getElementById("senderName").value;
            const pickupAddress = document.getElementById("pickupAddress").value;
            const receiverName = document.getElementById("receiverName").value;
            const deliveryAddress = document.getElementById("deliveryAddress").value;
            const finalCost = priceDisplay ? priceDisplay.textContent : "₦0.00";

            // Generate unique structured layout tracking index
            const randomDigits = Math.floor(10000 + Math.random() * 90000);
            const uniqueTrackingID = `MJD-${randomDigits}`;

            const orderData = {
                trackingID: uniqueTrackingID,
                sender: senderName,
                pickup: pickupAddress,
                receiver: receiverName,
                delivery: deliveryAddress,
                cost: finalCost,
                status: "Rider Assigned"
            };

            // Commit order straight to local storage layout
            localStorage.setItem(uniqueTrackingID, JSON.stringify(orderData));

            alert(`🎉 Booking Confirmed!\n\nYour Mummy J Rider is on the way.\nYour Tracking ID is: ${uniqueTrackingID}\n\nPlease copy this code to track your parcel.`);
            
            bookingForm.reset();
            if (priceDisplay) priceDisplay.textContent = "₦0.00";
            
            // If admin panel is currently open on screen, live refresh the rows layout immediately
            if (localStorage.getItem("currentAdminMode") === "true") {
                renderAdminOrders();
            }
        });
    }


    // ==========================================
    // 6. CLIENT MOBILE-OPTIMIZED TRACKING WIDGET
    // ==========================================
    if (trackingForm) {
        trackingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!trackingInput) return;
            
            const searchID = trackingInput.value.trim().toUpperCase();

            if (!searchID) {
                alert("Please enter a valid Tracking ID.");
                return;
            }

            const savedOrder = localStorage.getItem(searchID);

            if (savedOrder) {
                const order = JSON.parse(savedOrder);
                alert(`📦 Order Found!\n\nTracking ID: ${order.trackingID}\nStatus: [ ${order.status} ]\nFrom: ${order.pickup}\nTo: ${order.delivery}\nTotal Cost: ${order.cost}`);
            } else {
                alert("❌ Tracking ID not found. Please check the code and try again.");
            }
        });
    }


    // ==========================================
    // 7. COMPREHENSIVE AUTHENTICATION INTERACTION
    // ==========================================
    if (loginBtns.length > 0 && authModal) {
        loginBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                authModal.classList.add("active");
            });
        });

        if (closeModalBtn) {
            closeModalBtn.addEventListener("click", () => {
                authModal.classList.remove("active");
            });
        }

        if (switchToSignup && switchToLogin && loginFormPane && signupFormPane) {
            switchToSignup.addEventListener("click", () => {
                loginFormPane.classList.add("hidden-pane");
                signupFormPane.classList.remove("hidden-pane");
            });

            switchToLogin.addEventListener("click", () => {
                signupFormPane.classList.add("hidden-pane");
                loginFormPane.classList.remove("hidden-pane");
            });
        }
    }

    // Client Signup Submission
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("signupName").value.trim();
            const email = document.getElementById("signupEmail").value.trim().toLowerCase();
            const password = document.getElementById("signupPassword").value;

            if (password.length < 6) {
                alert("Security Warning: Password must be at least 6 characters long.");
                return;
            }

            if (localStorage.getItem(email)) {
                alert("An account with this email already exists! Please log in.");
                return;
            }

            const userData = { name, email, password };
            localStorage.setItem(email, JSON.stringify(userData));

            alert("🎉 Registration Successful! You can now log in.");
            signupForm.reset();
            
            if (signupFormPane && loginFormPane) {
                signupFormPane.classList.add("hidden-pane");
                loginFormPane.classList.remove("hidden-pane");
            }
        });
    }

    // Unified Mobile/Desktop Sign-In Handler
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value.trim().toLowerCase();
            const password = document.getElementById("loginPassword").value;

            // 1. Admin Routing Check
            if (email === MASTER_ADMIN_EMAIL && password === MASTER_ADMIN_PASSWORD) {
                alert("🛡️ Access Granted: Welcome to the Mummy J Control Center.");
                
                if (authModal) authModal.classList.remove("active");
                loginForm.reset();
                
                updateLoginButtonsText("Admin Mode", true);
                
                localStorage.setItem("currentAdminMode", "true");
                
                if (adminDashboard) {
                    adminDashboard.classList.remove("hidden-pane");
                    renderAdminOrders();
                    
                    // Fixed mobile timing delay bug for scrolling
                    setTimeout(() => {
                        adminDashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 150);
                }
                return; 
            }

            // 2. Regular User Login Verification
            const storedAccount = localStorage.getItem(email);

            if (!storedAccount) {
                alert("No account found with this email. Please sign up first.");
                return;
            }

            const user = JSON.parse(storedAccount);

            if (user.password === password) {
                alert(`👋 Welcome back, ${user.name}! Login successful.`);
                
                const shortName = user.name.split(' ')[0];
                updateLoginButtonsText(`Hi, ${shortName}`, false);
                
                if (authModal) authModal.classList.remove("active");
                loginForm.reset();
            } else {
                alert("❌ Incorrect password. Please try again.");
            }
        });
    }


    // ==========================================
    // 8. ADMINISTRATIVE DASHBOARD PROCESSING
    // ==========================================
    function renderAdminOrders() {
        if (!adminOrderTableBody) return;
        
        adminOrderTableBody.innerHTML = ""; 
        let ordersFound = false;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            
            if (key && key.startsWith("MJD-")) {
                ordersFound = true;
                const order = JSON.parse(localStorage.getItem(key));

                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><strong>${order.trackingID}</strong></td>
                    <td>${order.sender}<br><small style="color:#aaa">${order.pickup}</small></td>
                    <td>${order.receiver}<br><small style="color:#aaa">${order.delivery}</small></td>
                    <td>${order.cost}</td>
                    <td><span class="status-badge" id="badge-${order.trackingID}">${order.status}</span></td>
                    <td>
                        <select class="status-updater" data-id="${order.trackingID}">
                            <option value="Rider Assigned" ${order.status === 'Rider Assigned' ? 'selected' : ''}>Rider Assigned</option>
                            <option value="In Transit" ${order.status === 'In Transit' ? 'selected' : ''}>In Transit</option>
                            <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                        </select>
                    </td>
                `;
                adminOrderTableBody.appendChild(row);
            }
        }

        if (!ordersFound) {
            adminOrderTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#888; padding: 20px;">No active dispatch requests available.</td></tr>`;
        }

        // Setup immediate event listeners for mobile drop-down adjustments
        document.querySelectorAll(".status-updater").forEach(selectElement => {
            selectElement.addEventListener("change", (event) => {
                const targetTrackingID = event.target.getAttribute("data-id");
                const newStatusValue = event.target.value;

                const updatedOrder = JSON.parse(localStorage.getItem(targetTrackingID));
                updatedOrder.status = newStatusValue;
                localStorage.setItem(targetTrackingID, JSON.stringify(updatedOrder));

                const correspondingBadge = document.getElementById(`badge-${targetTrackingID}`);
                if (correspondingBadge) {
                    correspondingBadge.textContent = newStatusValue;
                }
            });
        });
    }

    if (logoutAdminBtn) {
        logoutAdminBtn.addEventListener("click", () => {
            localStorage.removeItem("currentAdminMode"); 
            if (adminDashboard) adminDashboard.classList.add("hidden-pane");
            
            updateLoginButtonsText("Login / Signup", false);
            
            alert("Logged out securely from Admin Control Center.");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});