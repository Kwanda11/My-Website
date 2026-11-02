# Student Success Hub

## WEDE5020 - Web Development (Introduction)

Student Success Hub is a student-focused website designed to provide useful academic and learning resources in one place. The website provides students with access to study resources, academic information, business topics, programming topics, contact information and frequently asked questions.

The website was developed using HTML, CSS and JavaScript, with a focus on clear structure, simple navigation, accessibility, functionality and responsive design.

---

# Website Purpose

The purpose of Student Success Hub is to provide students with an easy-to-use website where they can find useful academic information and learning resources.

The website aims to:

- Provide students with useful study resources.
- Help students find important academic information.
- Provide information about business and programming topics.
- Allow students to submit enquiries.
- Provide contact information.
- Answer common student questions.
- Present information in a clear and organised way.
- Make the website usable on desktop, tablet and mobile devices.

---

# Website Pages

The website contains the following pages:

Page| Description
Home| Introduces Student Success Hub and provides an overview of the available resources.
About| Provides information about the website, including its mission and vision.
Study Resources| Provides learning information and study materials.
Business Resources| Provides information about business-related topics such as management and business processes.
Programming Resources| Provides information about programming topics such as variables, loops, arrays and methods.
Web Development| Provides information about HTML, CSS, JavaScript, responsive design and accessibility.
Enquiry| Allows students to submit an enquiry.
Contact| Provides contact information and a contact form.
Academic Calendar| Provides information about important academic activities and dates.
FAQ| Provides answers to frequently asked questions.

---

# Technologies Used

The following technologies and tools were used to develop the website:

- HTML5
- CSS3
- JavaScript
- Leaflet.js
- OpenStreetMap
- GitHub
- GitHub Desktop
- Visual Studio Code
- Microsoft Edge Developer Tools

HTML5 was used to create the structure and content of the website.

CSS3 was used to style the website and create responsive layouts.

JavaScript was used to implement interactive website features, form validation and dynamic content.

Leaflet.js was used to create an interactive map.

OpenStreetMap was used as the map data provider.

GitHub was used for version control and to store the project repository.

Browser Developer Tools were used to test the website at different screen sizes.

---

# File and Folder Structure

The project uses the following structure:

Student Success Hub/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── robots.txt
├── sitemap.xml
│
├── Pages/
│   ├── about.html
│   ├── study-resources.html
│   ├── business.html
│   ├── programming.html
│   ├── web-development.html
│   ├── enquiry.html
│   ├── contact.html
│   ├── academic-calendar.html
│   └── faq.html
│
├── images/
│   ├── students-learning-together.jpg
│   ├── student-studying.jpg
│   ├── student-learning-resources.jpg
│   ├── academic-study-material.jpg
│   └── digital-learning-resources.jpg
│
└── screenshots/
    ├── desktop.png
    ├── tablet.png
    └── mobile.png

---

# Part 1 Feedback Implemented

The Part 1 website received feedback relating mainly to the use of HTML elements, the amount of website content, README documentation and references.

The following changes were made in Part 2.

1. More HTML Elements

Additional HTML elements were used to improve the structure and presentation of the website.

These include:

- "<header>"
- "<nav>"
- "<main>"
- "<section>"
- "<article>"
- "<footer>"
- "<table>"
- "<caption>"
- "<form>"
- "<label>"
- "<input>"
- "<textarea>"
- "<select>"
- "<button>"
- Ordered lists
- Unordered lists
- Images with alternative text

Semantic elements such as "<section>" and "<article>" were used to make the website structure clearer.

2. More Website Content

Additional content was added to address the feedback requesting more content.

The website now includes:

- Hero and supporting images.
- Additional information sections.
- Study tips.
- Business resources.
- Programming resources.
- An academic calendar table.
- Additional FAQ information.
- Mission and vision information.
- More detailed resource descriptions.
- Improved enquiry and contact forms.

3. Improved Academic Calendar

The Academic Calendar page was expanded to include a table containing academic activities and information about what students should do.

The table is placed inside a responsive container so that it can still be viewed on smaller screens.

4. Improved README Documentation

The README was expanded to provide information about:

- The purpose of the website.
- Website pages.
- Technologies used.
- File and folder structure.
- Part 1 feedback.
- Part 2 development.
- Responsive design.
- Testing.
- Changelog.
- References.

---

# Part 2 - CSS Styling

An external stylesheet named "style.css" was created and linked to the website pages.

The stylesheet provides a consistent design across the website.

CSS Reset

A CSS reset was implemented to remove default browser margins and padding.

The "box-sizing" property was also used to make sizing easier to manage.

Base Styling

The base styling defines:

- Font family.
- Font size.
- Line height.
- Text colour.
- Background colour.
- Margins.
- Padding.

The website mainly uses relative units such as "rem", "%" and "vw".

Typography

Typography was styled using CSS properties including:

- "font-family"
- "font-size"
- "font-weight"
- "line-height"
- "letter-spacing"

Different heading sizes were used for "<h1>", "<h2>" and "<h3>" elements.

The typography is also adjusted at smaller screen sizes using media queries.

Layout

CSS Grid and Flexbox were used to create the website layouts.

The feature cards use CSS Grid to create multiple columns on larger screens.

Flexbox is used for the navigation menu.

The layouts change at smaller screen sizes so that content can be displayed in fewer columns.

Colours and Decoration

CSS was used to create a consistent colour scheme throughout the website.

The styling includes:

- Background colours.
- Text colours.
- Borders.
- Rounded corners.
- Box shadows.
- Button styling.
- Navigation styling.
- Card styling.

The design uses a blue-based colour scheme to create a clean academic and technology-focused appearance.

Pseudo-Classes

CSS pseudo-classes were used to improve interaction and accessibility.

The website includes:

- ":hover"
- ":focus"
- ":active"

These are used on navigation links, buttons, cards and form controls.

The ":focus" styling provides a visible outline when interactive elements receive keyboard focus.

Responsive Design

The website was designed to work across different screen sizes.

Three main layout levels were considered:

- Desktop
- Tablet
- Mobile

Media queries were used to change the layout depending on the screen width.

Desktop

On larger screens:

- Feature cards are displayed in multiple columns.
- Navigation links are displayed horizontally.
- Content has wider spacing.
- Larger typography is used.

Tablet

At widths of 900px and below:

- Feature cards change to two columns.
- Navigation spacing is reduced.
- Heading sizes are reduced.
- Hero section spacing is adjusted.

Mobile

At widths of 600px and below:

- Feature cards change to one column.
- Navigation links are displayed vertically.
- Typography is reduced.
- Content padding is reduced.
- Tables can scroll horizontally.
- Images scale to fit the available screen width.

A further breakpoint at 400px is used for very small mobile screens.

Responsive Images

Images are styled using responsive CSS so that they scale according to the available screen width.

Alternative text is provided for images to improve accessibility.

Forms

The Enquiry and Contact pages contain forms.

Form elements were styled using CSS to provide:

- Consistent spacing.
- Borders.
- Padding.
- Rounded corners.
- Focus indicators.
- Consistent font styling.
- Styled buttons.

Labels were included with form controls to improve usability.

Accessibility

Accessibility was considered during development.

The website includes:

- Semantic HTML elements.
- Alternative text for images.
- Labels for form controls.
- Keyboard focus indicators.
- Clear headings.
- Readable text.
- Consistent navigation.
- Responsive layouts.

The aim is to make the website easier for different users to navigate and understand.

Responsive Design Testing

The website was tested at desktop, tablet and mobile screen sizes using Microsoft Edge Developer Tools.

The following testing sizes were used when recording the final evidence:

Device Type| Example Width| Purpose
Desktop| 1440px| Check the full desktop layout.
Tablet| 768px| Check the tablet layout and two-column content.
Mobile| 375px| Check the mobile layout and vertical navigation.
Small Mobile| 320px| Check the layout on a smaller mobile screen.

The following areas were checked:

- Navigation links.
- Page layouts.
- Images.
- Forms.
- Buttons.
- Tables.
- Text readability.
- Responsive card layouts.
- Mobile navigation.
- Horizontal scrolling of tables.
- Different screen sizes.

Screenshots of the responsive testing are included below as evidence for Part 2.

Desktop View

"Desktop View" (screenshots/desktop.png)

Tablet View

"Tablet View" (screenshots/tablet.png)

Mobile View

"Mobile View" (screenshots/mobile.png)

---

# Part 3 – Functionality and SEO

Part 3 focused on improving the website's functionality, adding interactive features, improving search engine optimisation (SEO) and testing the forms.

1. JavaScript Functionality

JavaScript was added to improve website interaction and functionality.

An external JavaScript file named "script.js" was created and connected to the website pages.

The following features were implemented:

Interactive FAQ Accordion

An accordion was added to the FAQ page.

Users can click on questions to expand or collapse the answers without leaving the page.

Study Resource Search

A search feature was added to the Study Resources page.

Users can enter keywords to filter the available resources. Resources that do not match the search are hidden.

Image Gallery and Lightbox

An image gallery was added to the Home page.

Users can click on an image to display a larger version in a lightbox. The lightbox can be closed using its close button or the Escape key.

Enquiry Form Validation

JavaScript validation was implemented on the Enquiry page.

Required fields and input restrictions help prevent incomplete submissions.

A response is displayed based on the selected enquiry topic.

Contact Form Validation

The Contact page includes validation for the user's name, email address, message type and message.

After successful validation, the website prepares an email containing the submitted information using a "mailto" link.

The user can review and send the email using their email application.

2. Interactive Map

An interactive map was added to the Contact page using Leaflet.js and OpenStreetMap.

The map focuses on Gqeberha and allows users to interact with the displayed map by zooming and moving around the area.

3. Search Engine Optimisation (SEO)

SEO improvements were implemented to help search engines understand the website content.

The following improvements were made:

- Added descriptive page titles.
- Added meta descriptions to website pages.
- Added relevant meta keywords.
- Improved image alternative text.
- Updated image filenames to use descriptive names.
- Improved internal navigation between website pages.
- Maintained responsive layouts for different screen sizes.

4. Additional SEO Files

Two additional files were created.

robots.txt

This file provides instructions to search engine crawlers about accessing the website and identifies the sitemap location.

sitemap.xml

This file lists the website pages to help search engines discover the website content.

5. Part 3 Testing

The Part 3 website functionality was tested to check that the interactive features work correctly.

Testing included:

- Opening and closing FAQ accordion answers.
- Searching and filtering study resources.
- Opening and closing gallery images.
- Submitting the Enquiry form with required information.
- Checking enquiry responses.
- Validating Contact form information.
- Preparing an email using the Contact form.
- Loading and interacting with the Gqeberha map.
- Checking image display after updating filenames.
- Checking website layouts at different screen sizes.

---

# GitHub Development

GitHub was used to store the project and track development.

Descriptive commits were used to show the development process.

Examples of descriptive commits include:

- Added external CSS stylesheet.
- Updated website content based on Part 1 feedback.
- Added academic calendar table.
- Added business and programming resources.
- Added responsive CSS media queries.
- Added JavaScript functionality to website.
- Implemented interactive FAQ accordion.
- Added study resource search feature.
- Created image gallery with lightbox.
- Added enquiry form validation and responses.
- Implemented contact form email functionality.
- Added interactive map to Contact page.
- Improved SEO metadata across website pages.
- Updated README documentation and references.

The final GitHub repository contains the website source files, CSS stylesheet, JavaScript file, images and README.

---

# Changelog

Part 1 Corrections

Added More Website Content

Additional content was added to several pages to address the Part 1 feedback requesting more content.

Changes included:

- Added additional supporting images.
- Added more descriptive paragraphs.
- Added study tips.
- Added business resources.
- Added programming resources.
- Added additional FAQ content.

Improved Use of HTML Elements

Additional HTML elements were introduced to make better use of HTML5.

Changes included:

- Added "<article>" elements for resource cards.
- Added a table and caption to the Academic Calendar page.
- Improved form structure using labels and form controls.
- Added semantic sections throughout the website.

Improved Image Usage

More images were incorporated into the website to address the Part 1 feedback requesting additional visual content.

Images were also given descriptive alternative text.

Fixed Image Path

The image path on the Enquiry page was corrected so that the image correctly references the image folder from inside the Pages folder.

Part 2 Changelog

Version 2.0 - CSS Styling

- Created the external "style.css" stylesheet.
- Linked the stylesheet to the website pages.
- Added a CSS reset.
- Added base typography styling.
- Added a consistent colour scheme.
- Added Flexbox navigation.
- Added CSS Grid layouts.
- Added card styling.
- Added button styling.
- Added form styling.
- Added table styling.
- Added hover effects.
- Added focus effects.
- Added active states.

Version 2.1 - Responsive Design

- Added tablet media queries.
- Added mobile media queries.
- Changed feature cards from three columns to two columns on tablets.
- Changed feature cards to one column on mobile devices.
- Changed navigation to a vertical layout on mobile.
- Adjusted heading sizes for smaller screens.
- Adjusted spacing and padding for smaller screens.
- Added responsive table behaviour.
- Added responsive image styling.

Version 2.2 - Content Improvements

- Added Business Resources.
- Added Programming Resources.
- Expanded Web Development Resources.
- Added additional study tips.
- Added an academic calendar table.
- Expanded About page content.
- Improved Contact page content.
- Improved Enquiry page form.
- Added additional FAQ content.

Version 2.3 - Documentation

- Updated the README.
- Added Part 1 feedback corrections.
- Added Part 2 development information.
- Added a detailed changelog.
- Added references.
- Added testing information.

Part 3 Changelog

Version 3.0 - JavaScript Functionality

- Created the external "script.js" file.
- Connected JavaScript to the website pages.
- Added the interactive FAQ accordion.
- Implemented study resource searching.
- Added the image gallery and lightbox.
- Added enquiry form validation and topic-based responses.
- Added contact form validation and email preparation.

Version 3.1 - SEO Improvements

- Added descriptive title tags to website pages.
- Added meta descriptions.
- Added meta keywords.
- Improved image alternative text.
- Renamed images using descriptive filenames.
- Created "robots.txt".
- Created "sitemap.xml".

Version 3.2 - Interactive Map and Testing

- Added an interactive Gqeberha map using Leaflet.js.
- Used OpenStreetMap as the map data provider.
- Tested interactive website features.
- Checked image paths after renaming images.
- Tested website responsiveness.

---

# References

The following resources were used to support the development and understanding of HTML, CSS, JavaScript, responsive design, accessibility, maps and SEO.

Mozilla Developer Network (MDN) Web Docs. (n.d.). HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML

Mozilla Developer Network (MDN) Web Docs. (n.d.). CSS: Cascading Style Sheets. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS

Mozilla Developer Network (MDN) Web Docs. (n.d.). Using media queries. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries

Mozilla Developer Network (MDN) Web Docs. (n.d.). JavaScript. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript

Mozilla Developer Network (MDN) Web Docs. (n.d.). HTML forms. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms

Leaflet. (n.d.). Leaflet – a JavaScript library for interactive maps. Available at: https://leafletjs.com/

OpenStreetMap. (n.d.). OpenStreetMap. Available at: https://www.openstreetmap.org/

Google Search Central. (n.d.). SEO Starter Guide. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

World Wide Web Consortium (W3C). (n.d.). Web Accessibility Initiative (WAI). Available at: https://www.w3.org/WAI/

World Wide Web Consortium (W3C). (n.d.). Web Content Accessibility Guidelines (WCAG). Available at: https://www.w3.org/WAI/standards-guidelines/wcag/

---

# GitHub Repository

GitHub Repository:

https://github.com/Kwanda11/My-Website

GitHub Pages Website:

https://kwanda11.github.io/My-Website/

---

# Conclusion

Student Success Hub was developed to provide students with a simple and organised platform for accessing academic and learning information.

Part 1 focused on creating the initial website structure and content.

Part 2 focused on improving the website based on Part 1 feedback, implementing an external CSS stylesheet, improving the visual design, adding responsive layouts and documenting the development process.

Part 3 focused on implementing JavaScript functionality, interactive website features, form validation, SEO improvements and an interactive map.

The website is designed to provide a consistent experience across desktop, tablet and mobile screen sizes.