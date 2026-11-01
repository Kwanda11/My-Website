/* =====================================================
   STUDENT SUCCESS HUB
   WEDE5020 - PART 3
   JavaScript Functionality
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ================================================
       1. FAQ ACCORDION
       ================================================ */

    const accordionButtons = document.querySelectorAll("[data-accordion-button]");

    accordionButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const panel = button.nextElementSibling;
            const isOpen = button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", String(!isOpen));

            if (panel) {
                panel.hidden = isOpen;
            }
        });
    });


    /* ================================================
       2. RESOURCE SEARCH
       ================================================ */

    const searchInput = document.querySelector("[data-resource-search]");
    const resourceItems = document.querySelectorAll("[data-search-item]");
    const searchMessage = document.querySelector("[data-search-message]");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase().trim();
            let visibleCount = 0;

            resourceItems.forEach(function (item) {
                const content = item.textContent.toLowerCase();
                const matches = content.includes(searchTerm);

                item.hidden = !matches;

                if (matches) {
                    visibleCount++;
                }
            });

            if (searchMessage) {
                searchMessage.textContent =
                    visibleCount + " resource(s) found.";
            }
        });
    }


    /* ================================================
       3. IMAGE GALLERY LIGHTBOX
       ================================================ */

    const lightbox = document.querySelector("[data-lightbox]");
    const lightboxImage = document.querySelector("[data-lightbox-image]");
    const lightboxCaption = document.querySelector("[data-lightbox-caption]");
    const lightboxClose = document.querySelector("[data-lightbox-close]");

    const galleryImages = document.querySelectorAll("[data-lightbox-image-source]");

    function closeLightbox() {
        if (lightbox) {
            lightbox.hidden = true;
            document.body.style.overflow = "";
        }
    }

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            if (!lightbox || !lightboxImage) return;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            if (lightboxCaption) {
                lightboxCaption.textContent = image.alt;
            }

            lightbox.hidden = false;
            document.body.style.overflow = "hidden";

            if (lightboxClose) {
                lightboxClose.focus();
            }
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });


    /* ================================================
       4. ENQUIRY FORM VALIDATION AND RESPONSE
       ================================================ */

    const enquiryForm = document.querySelector("#enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!enquiryForm.reportValidity()) {
                return;
            }

            const name = enquiryForm.elements["name"].value.trim();
            const topic = enquiryForm.elements["topic"].value;
            const message = document.querySelector("#enquiryResponse");

            let response = "Thank you, " + name + ". ";

            if (topic === "sponsorship") {
                response += "Thank you for your interest in sponsorship. Please contact our team for sponsorship information.";
            } else if (topic === "volunteering") {
                response += "Thank you for your interest in volunteering. Our team can provide information about available opportunities.";
            } else if (topic === "study-resources") {
                response += "You can explore our Study Resources page for learning materials.";
            } else {
                response += "Your enquiry has been checked successfully. Please contact our team for further information.";
            }

            if (message) {
                message.textContent = response;
                message.hidden = false;
            }

            enquiryForm.reset();
        });
    }


    /* ================================================
       5. CONTACT FORM VALIDATION AND EMAIL
       ================================================ */

    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.reportValidity()) {
                return;
            }

            const name = contactForm.elements["name"].value.trim();
            const email = contactForm.elements["email"].value.trim();
            const messageType = contactForm.elements["messageType"].value;
            const message = contactForm.elements["message"].value.trim();

            const recipient = "info@studentsuccesshub.co.za";

            const subject = encodeURIComponent(
                "Student Success Hub - " + messageType
            );

            const body = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\nMessage Type: " + messageType +
                "\n\nMessage:\n" + message
            );

            const mailtoLink =
                "mailto:" + recipient +
                "?subject=" + subject +
                "&body=" + body;

            window.location.href = mailtoLink;
        });
    }

});