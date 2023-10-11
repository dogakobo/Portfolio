$(document).ready(function() {

    const searchingForJob = true;

    if(searchingForJob){
        document.getElementById('searchingJob').innerText="I'm currently looking for new opportunities, my inbox is always open. Whether you have a question, I'll try my best to get back to you!";
    } else {
        document.getElementById('searchingJob').innerText="I'm not looking for job now but my inbox is always open. If you have a question, I'll try my best to get back to you! ;)";
    } 

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    navBarScroll();



    const options = {
        root: null,
        threshold: 0.15,
        rootMargin: "-50% 0% 0% 0%"
    };

    const observerProjects = new IntersectionObserver(function(entrie) {
        let items = document.querySelectorAll(".contact-sites i");
        if (entrie[0].isIntersecting) {
            items.forEach(element => {
                element.style.color = "#BBB59B";
            });
            document.querySelector(".mail a").style.color = "#BBB59B";
            document.querySelectorAll(".side-shape").forEach(element => {
                element.style.backgroundColor = "#BBB59B";
            });
        } else {
            items.forEach(element => {
                element.style.color = "#3D3A33";
            });
            document.querySelector(".mail a").style.color = "#3D3A33";
            document.querySelectorAll(".side-shape").forEach(element => {
                element.style.backgroundColor = "#3D3A33";
            });
        }




    }, options)

    var target = document.querySelector('#projects');

    observerProjects.observe(target)

});

function navBarScroll() {
    el_autohide = document.querySelector("#navbar");

    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector("#navbar").offsetHeight;

    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            } else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
        // window.addEventListener
    }
}



class Project {
    constructor(){
        /* this.images = images ?? {} */
        this.countCurrentImage = 0
        this.backwardIcon = document.querySelector('#backward-icon')
        this.forwardIcon = document.querySelector('#forward-icon')
        this.imagesContent = document.querySelector('.images-content')
        this.imagesCarousel = document.querySelector('.images-carousel')
        this.allImages = this.imagesContent.querySelectorAll('img')
        this.translateX = 0
        document.addEventListener('keydown', (event) => {
            console.log(event)
            event.key === 'ArrowRight' && this.forward()
            event.key === 'ArrowLeft' && this.backward()
            event.key === 'Escape' && this.exit()
        })
        this.forwardIcon.addEventListener('click', () => {
            this.forward()
        })
        
        this.backwardIcon.addEventListener('click', () => {
            this.backward()
        })
        imageViewer.addEventListener('click', async (event) => {
            const projectId = imageViewer.id
            if (event.target === imageViewer) {
                this.exit()
                setTimeout(async () => {
                    await document.startViewTransition(() => {
                        
                        document.querySelector(`#project-${projectId}`).style.viewTransitionName = `image-${projectId}`
                    });
                }, this.countCurrentImage === 0 ? 0 : 400)
                
                setTimeout(() => {
                    document.querySelector(`#project-${projectId}`).style.viewTransitionName = ``
                }, 100)
            }
        })
    }

    forward() {
        this.translateX = this.allImages[this.countCurrentImage + 1].offsetLeft
        this.imagesContent.style.transform = `translateX(-${this.translateX}px)`
        if (this.allImages.length - 2 == Number(this.countCurrentImage)) {
            this.forwardIcon.style.visibility = 'hidden'
        } else {
            this.backwardIcon.style.visibility = 'visible'
        }
        this.countCurrentImage ++
    }

    backward() {
        this.translateX = this.allImages[this.countCurrentImage - 1].offsetLeft
        this.imagesContent.style.transform = `translateX(-${this.translateX}px)`
        if (this.countCurrentImage == 1) {
            this.backwardIcon.style.visibility = 'hidden'
        } else {
            this.forwardIcon.style.visibility = 'visible'
        }
        this.countCurrentImage --
    }

    exit() {
        imageViewer.style.display = 'none'
        imageViewer.querySelector('img').style.viewTransitionName = ``
        this.backwardIcon.style.visibility = 'hidden'
        this.forwardIcon.style.visibility = 'visible'
        this.countCurrentImage = 0
        this.imagesContent.style.transform = `translateX(0px)`
        this.translateX = 0
    }
}

const projectsList = [
    {
        id: "1",
        title: "Pathys's Esthetic Web Site",
        description: 'An esthetic website. This has a catalog with search options and shopping cart with PayPal. On the side of the administrator, we have a dashboard with sales, users and last orders graphics. In addition to its respective product inventory system.',
        technologies: ['Angular', 'MongoDB', 'ExpressJS', 'Material UI'],
        github: 'https://github.com/dogakobo/estetica_website',
        link: '',
        images: ['./assets/img/project-1-1.PNG', './assets/img/project-1-2.PNG', './assets/img/project-1-3.PNG', './assets/img/project-1-4.PNG', './assets/img/project-1-5.PNG', './assets/img/project-1-6.PNG', './assets/img/project-1-7.PNG', './assets/img/project-1-8.PNG', ],
        cover: './assets/img/project-1-1.PNG'
    },
    {
        id: "2",
        title: "Fortnite Api Consume",
        description: 'This site compiles a large Fortnite database with information, items, users, season information, etc. Check out all the new Fortnite features every day. You can also create an account and add the items you have and then share your profile with your friends',
        technologies: ['React', 'MongoDB', 'ExpressJS', 'Tailwind CSS', 'Api consume'],
        github: '',
        images: ['./assets/img/project-2-1.png', './assets/img/project-2-2.png', './assets/img/project-2-3.png'],
        link: 'https://fortnite-items.onrender.com/',
        cover: './assets/img/project-2-1.png'
    },
    {
        id: "3",
        title: "Vue Photos App",
        description: 'An esthetic website. This has a catalog with search options and shopping cart with PayPal. On the side of the administrator, we have a dashboard with sales, users and last orders graphics. In addition to its respective product inventory system.',
        technologies: ['VueJS', 'Tailwind CSS', 'Api consume'],
        github: 'https://github.com/dogakobo/vuejs-photos-app.git',
        images: ['./assets/img/project-3-1.png', './assets/img/project-3-2.png'],
        link: 'https://vue-photos-app.onrender.com/',
        cover: './assets/img/project-3-1.png'
    }
]

const projects = document.querySelector('#projects')
const imageViewer = document.querySelector('.image-viewer')

/* imageViewer.addEventListener('click', async (event) => {
    const projectId = imageViewer.id
    if (event.target === imageViewer) {
        project.exit()
        setTimeout(async () => {
            await document.startViewTransition(() => {
                imageViewer.style.display = 'none'
                imageViewer.querySelector('img').style.viewTransitionName = ``
                document.querySelector(`#project-${projectId}`).style.viewTransitionName = `image-${projectId}`
            });
        }, project.countCurrentImage !== 0 ? 0 : 200)
        
        setTimeout(() => {
            document.querySelector(`#project-${projectId}`).style.viewTransitionName = ``
        }, 100)
    }
}) */

function SetAllImages (projectId) {
    const selectedProject = projectsList.filter(project => project.id == projectId)[0]
    imagesContent = document.querySelector('.images-content')
    imagesContent.innerHTML = ''
    imagesContent.innerHTML += selectedProject.images.map((imageSrc, index) => `<img src="${imageSrc}" class="">`)
}

async function viewImage (projectId) {
    await SetAllImages(projectId)
    new Project()
    const selectedProject = projectsList.filter(project => project.id == projectId)[0]
    const imageElement = imageViewer.querySelector('img')
    imageElement.setAttribute('src', selectedProject.cover)
    document.querySelector(`#project-${projectId}`).style.viewTransitionName = `image-${projectId}`
    const displayNewImage = () => {
        imageViewer.style.display = 'grid'
        document.querySelector(`#project-${projectId}`).style.viewTransitionName = ``
        imageElement.style.viewTransitionName = `image-${projectId}`
        imageViewer.id = projectId
    }
    if (!document.startViewTransition) {
        displayNewImage();
        return;
    }
    await document.startViewTransition(() => displayNewImage());
}

function resetStyle (projectId) {
    document.querySelector(`#project-${projectId}`).style.viewTransitionName = ``
}

projects.innerHTML += projectsList.map((project, index) => {
    const orientation = index % 2 === 1 ? 'left' : 'right'
    const projectCoverElement = document.createElement('div')
    
    projectCoverElement.innerHTML = `<div class="project-content-${orientation}">
        <div class="project-cover" onclick="viewImage(${project.id})">
            <div class="project-cover-color"></div>
            <img id='project-${project.id}' src=${project.cover} class="project-image" >
        </div>
    </div>`

    return `<section class="container-sm project-container">
    <div class="project-text-content-${orientation}">
        <p class="title">${project.title}</p>
        <p class="text z-depth-3">${project.description}</p>
        <div class="project-footer-${orientation}">
            <div class="technologies">
                ${project.technologies.map((technology) =>  `<p>${technology}</p>`)}
            </div>
            <div class="${orientation !== 'right' ? 'right' : 'icon'}">
                <a class="me-2" style="text-decoration: none;" href="${project.link}" target="_blank">
                    <i class="github-icon fas fa-external-link-alt" style="font-size: 26px;"></i>
                </a>
                ${project.github && `<a href="${project.github}" target="_blank">
                    <i class="github-icon fab fa-github-square"></i>
                </a>`}
            </div>
        </div>
    </div>
    ${projectCoverElement.outerHTML}
</section>`
})
/* 
const forwardIcon = document.querySelector('#forward-icon')
const backwardIcon = document.querySelector('#backward-icon') */

/* let translateX = 0
project.forwardIcon.addEventListener('click', () => {
    project.forward()
})

project.backwardIcon.addEventListener('click', () => {
    project.backward()
})
 */