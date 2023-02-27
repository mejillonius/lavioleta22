        document.addEventListener('DOMContentLoaded', () => {

            //===
            // SCROLL SMOOTH
            //===
            // Variables
            const links = document.querySelectorAll('a[href *= "#"]:not([href = "#"])');

            /**
             * Event scroll
             */
            function clickHandler(event) {
                event.preventDefault();
                const href = this.getAttribute("href");
                const offsetTop = document.querySelector(href).offsetTop;

                scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }

            // Add event all links
            links.forEach((link) => link.addEventListener("click", clickHandler));
        });