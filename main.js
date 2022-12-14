// edit contain 1

const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const project = document.querySelector('#project')
const small = document.querySelector('#small')

// edit contain 2
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectContent = document.querySelector('#project-content')
const smallContent = document.querySelector('#small-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Us',
    // modal: true,
    width: '320px',
    height: '310px',
    top: 50,
    right: 20,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Our Task',
    width: '320px',
    height: '310px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 60,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

// edit contain 3
project.addEventListener('click', () => {
  const ProjectBox = new WinBox({
    title: '_project',
    width: '320px',
    height: '310px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 50,
    mount: projectContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

small.addEventListener('click', () => {
  const SmallBox = new WinBox({
    title: 'prepared by DRAT71',
    width: '320px',
    height: '310px',
    top: 80,
    right: 50,
    bottom: 50,
    left: 50,
    mount: smallContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})


