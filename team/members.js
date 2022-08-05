const sections = [
    {
        section: 'Core Team',
        members: [
            {
                position: 'President',
                name: 'Avaneesh Kumar',
                instagram: 'https://instagram.com',
                img: 'Avaneesh.png',
            },
            {
                position: 'Vice President',
                name: 'Zaid Mallik',
                instagram: 'https://instagram.com',
                linkedin: 'https://linkedin.com',
                img: 'zaid.png',
            },
        ],
    },
    {
        section: 'Video Team',
        members: [
            {
                position: 'Secretary (Video Editing)',
                name: 'Deepak Srinivas',
                img: 'deepak.png',
            },
        ],
    },
]

const elId = id => document.getElementById(id)

function onCardClick(n) {
    const el = elId(`socials-${n}`)
    if (el.classList.contains('shown')) {
        el.classList.add('hidden')
        el.classList.remove('shown')
    } else {
        el.classList.remove('hidden')
        el.classList.add('shown')
    }
}

let offsets = []

function init() {
    for (const section of sections) {
        elId('team').innerHTML += `
            <section class="team-section" id="${section.section}-parent">
                <h3 class="section-heading">${section.section}</h3>

                <div id="${section.section}" class="members"></div>
            </section>
        `

        for (const member of section.members) {
            elId(section.section).innerHTML += `
            <div class="c-wrap">
                <div class="card" onclick="onCardClick('${member.name}')" id="${
                member.name
            }-card">
                    <div class="pic">
                        <img 
                            class="s-img"
                            data-src="/img/team/${member.img}" 
                            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                            alt="${member.name}"
                        >
                    </div>
                    <div class="info">
                        <h3>${member.name}</h3>
                        <sub>${member.position}</sub>
                    </div>
                    <div class="socials" id="socials-${member.name}">
                        ${
                            member.instagram
                                ? `<a href="${member.position}">Instagram</a><br>`
                                : ''
                        }
                        ${
                            member.linkedin
                                ? `<a href="${member.position}">Linkedin</a><br>`
                                : ''
                        }
                    </div>
                </div>
            </div>
            `
            offsets.push({
                id: `${member.name}-card`,
                o: elId(`${member.name}-card`).getBoundingClientRect().top,
            })
        }
    }

    var imgDefer = document.getElementsByTagName('img')

    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute(
                'src',
                imgDefer[i].getAttribute('data-src'),
            )
        }
    }
}

init()
